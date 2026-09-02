import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import {
  createAxialTrajectory,
  sampleAxialTrajectory,
  type AxialTrajectory,
} from "./traMotion";
import type { TraEffects } from "./traEffects";
import "./TraCountdownCanvas.css";

interface TraCountdownCanvasProps {
  glyph: string;
  isRunning: boolean;
  isComplete: boolean;
  ariaLabel: string;
  effects: TraEffects;
}

interface CountdownSceneApi {
  setGlyph: (glyph: string) => void;
  setRunning: (running: boolean) => void;
  setComplete: (complete: boolean) => void;
  setEffects: (effects: TraEffects) => void;
}

interface BlockState {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  scale: number;
  fromPosition: THREE.Vector3;
  fromQuaternion: THREE.Quaternion;
  fromScale: number;
  targetPosition: THREE.Vector3;
  targetQuaternion: THREE.Quaternion;
  targetScale: number;
  trajectory: AxialTrajectory;
  spinTurns: number;
  delay: number;
  brightness: number;
  seed: number;
}

const MAX_BLOCKS = 84;
const BLOCK_SIZE = 0.255;
const CELL_SIZE = 0.39;
const TRANSITION_DURATION = 0.96;
const TRAIL_LAYERS = 3;

const DIGIT_GRID: Record<string, string[]> = {
  "0": ["01110", "11011", "11011", "11011", "11011", "11011", "01110"],
  "1": ["00110", "01110", "00110", "00110", "00110", "00110", "11111"],
  "2": ["01110", "11011", "00011", "00110", "01100", "11000", "11111"],
  "3": ["11110", "00011", "00011", "01110", "00011", "00011", "11110"],
  "4": ["11011", "11011", "11011", "11111", "00011", "00011", "00011"],
  "5": ["11111", "11000", "11000", "11110", "00011", "00011", "11110"],
  "6": ["01110", "11000", "11000", "11110", "11011", "11011", "01110"],
  "7": ["11111", "00011", "00110", "00110", "01100", "01100", "01100"],
  "8": ["01110", "11011", "11011", "01110", "11011", "11011", "01110"],
  "9": ["01110", "11011", "11011", "01111", "00011", "00011", "01110"],
};

const LETTER_GRID: Record<string, string[]> = {
  A: ["01110", "11011", "11011", "11111", "11011", "11011", "11011"],
  B: ["11110", "11011", "11011", "11110", "11011", "11011", "11110"],
  C: ["01111", "11000", "11000", "11000", "11000", "11000", "01111"],
  D: ["11110", "11011", "11011", "11011", "11011", "11011", "11110"],
  E: ["11111", "11000", "11000", "11110", "11000", "11000", "11111"],
  F: ["11111", "11000", "11000", "11110", "11000", "11000", "11000"],
  G: ["01111", "11000", "11000", "11011", "11011", "11011", "01110"],
  H: ["11011", "11011", "11011", "11111", "11011", "11011", "11011"],
  I: ["11111", "00110", "00110", "00110", "00110", "00110", "11111"],
  J: ["00111", "00011", "00011", "00011", "11011", "11011", "01110"],
  K: ["11011", "11011", "11110", "11100", "11110", "11011", "11011"],
  L: ["11000", "11000", "11000", "11000", "11000", "11000", "11111"],
  M: ["11011", "11111", "11111", "11011", "11011", "11011", "11011"],
  N: ["11011", "11111", "11111", "11111", "11111", "11011", "11011"],
  O: ["01110", "11011", "11011", "11011", "11011", "11011", "01110"],
  P: ["11110", "11011", "11011", "11110", "11000", "11000", "11000"],
  Q: ["01110", "11011", "11011", "11011", "11111", "01110", "00011"],
  R: ["11110", "11011", "11011", "11110", "11100", "11011", "11011"],
  S: ["01111", "11000", "11000", "01110", "00011", "00011", "11110"],
  T: ["11111", "00110", "00110", "00110", "00110", "00110", "00110"],
  U: ["11011", "11011", "11011", "11011", "11011", "11011", "01110"],
  V: ["11011", "11011", "11011", "11011", "11011", "01110", "01110"],
  W: ["11011", "11011", "11011", "11111", "11111", "11111", "11011"],
  X: ["11011", "11011", "01110", "00110", "01110", "11011", "11011"],
  Y: ["11011", "11011", "01110", "00110", "00110", "00110", "00110"],
  Z: ["11111", "00011", "00110", "00110", "01100", "11000", "11111"],
};

const GLYPH_GRID: Record<string, string[]> = { ...DIGIT_GRID, ...LETTER_GRID };

const createRandom = (seed: number) => () => {
  let next = seed += 0x6d2b79f5;
  next = Math.imul(next ^ (next >>> 15), next | 1);
  next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
  return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
};

const random = createRandom(0x545241);
const randomBetween = (min: number, max: number) => min + random() * (max - min);

const getGlyphPoints = (displayGlyph: string) => {
  const glyphs = displayGlyph.toUpperCase().split("").filter((glyph) => GLYPH_GRID[glyph]);
  const glyphWidth = CELL_SIZE * 4;
  const glyphGap = glyphs.length > 1 ? CELL_SIZE * 1.15 : 0;
  const totalWidth = glyphs.length * glyphWidth + (glyphs.length - 1) * glyphGap;
  const points: THREE.Vector3[] = [];

  glyphs.forEach((glyph, glyphIndex) => {
    const rows = GLYPH_GRID[glyph] ?? GLYPH_GRID["0"];
    const glyphOffset = -totalWidth / 2 + glyphWidth / 2 + glyphIndex * (glyphWidth + glyphGap);

    rows.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        if (cell !== "1") {
          return;
        }

        points.push(
          new THREE.Vector3(
            glyphOffset + (columnIndex - 2) * CELL_SIZE,
            (3 - rowIndex) * CELL_SIZE,
            0.18,
          ),
        );
      });
    });
  });

  return points;
};

const getGlyphAxes = (displayGlyph: string) => {
  const glyphs = displayGlyph.toUpperCase().split("").filter((glyph) => GLYPH_GRID[glyph]);
  if (glyphs.length <= 1) {
    return [0];
  }

  const glyphWidth = CELL_SIZE * 4;
  const glyphGap = CELL_SIZE * 1.15;
  const totalWidth = glyphs.length * glyphWidth + (glyphs.length - 1) * glyphGap;
  return glyphs.map((_, glyphIndex) =>
    -totalWidth / 2 + glyphWidth / 2 + glyphIndex * (glyphWidth + glyphGap),
  );
};

const getNearestAxis = (x: number, axes: number[]) =>
  axes.reduce((nearest, axis) =>
    Math.abs(x - axis) < Math.abs(x - nearest) ? axis : nearest,
  axes[0] ?? 0);

const getRandomPosition = () =>
  new THREE.Vector3(
    randomBetween(-6.2, 6.2),
    randomBetween(-3.8, 3.8),
    randomBetween(-1.8, 0.6),
  );

const createBeamMaterial = () =>
  new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0x19558b) },
      uOpacity: { value: 0.18 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        float edgeFade = 1.0 - smoothstep(0.15, 0.5, abs(vUv.y - 0.5));
        float lengthFade = pow(1.0 - vUv.x, 0.85);
        float alpha = edgeFade * lengthFade * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

const TraCountdownCanvas: React.FC<TraCountdownCanvasProps> = ({
  glyph,
  isRunning,
  isComplete,
  ariaLabel,
  effects,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<CountdownSceneApi | null>(null);
  const [hasWebgl, setHasWebgl] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010304);
    scene.fog = new THREE.FogExp2(0x010304, 0.022);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 10.5);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    } catch {
      setHasWebgl(false);
      return undefined;
    }

    setHasWebgl(true);
    renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * effects.pixelDensity, 3));
    renderer.setClearColor(0x010304, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.38;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "tra-countdown-canvas";
    container.appendChild(renderer.domElement);

    const world = new THREE.Group();
    const blocksGroup = new THREE.Group();
    const beamsGroup = new THREE.Group();
    world.add(beamsGroup, blocksGroup);
    scene.add(world);

    const ambientLight = new THREE.AmbientLight(0x416c86, 1.7);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xf4fbff, 3.9);
    frontLight.position.set(1.5, 3.5, 7);
    scene.add(frontLight);

    const centerLight = new THREE.PointLight(0x78b8e8, 13, 11, 2);
    centerLight.position.set(0, 0, 2.5);
    scene.add(centerLight);

    const rimLight = new THREE.PointLight(0x0b3d71, 18, 10, 2);
    rimLight.position.set(0, -1.2, -1.8);
    scene.add(rimLight);

    const blockGeometry = new RoundedBoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, 5, 0.045);
    const blockMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4f8fa,
      roughness: 0.52,
      metalness: 0.02,
      emissive: 0xa7cce1,
      emissiveIntensity: 0.36,
      vertexColors: true,
      toneMapped: false,
    });
    const blocks = new THREE.InstancedMesh(blockGeometry, blockMaterial, MAX_BLOCKS);
    blocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    blocksGroup.add(blocks);

    const trailMaterials = Array.from({ length: TRAIL_LAYERS }, (_, layer) =>
      new THREE.MeshBasicMaterial({
        color: layer === 0 ? 0xa9d8f4 : 0x5c9bc4,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    const trailMeshes = trailMaterials.map((material) => {
      const trail = new THREE.InstancedMesh(blockGeometry, material, MAX_BLOCKS);
      trail.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      trail.renderOrder = -1;
      blocksGroup.add(trail);
      return trail;
    });

    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 64;
    glowCanvas.height = 64;
    const glowContext = glowCanvas.getContext("2d");
    if (glowContext) {
      const glowGradient = glowContext.createRadialGradient(32, 32, 2, 32, 32, 32);
      glowGradient.addColorStop(0, "rgba(205, 236, 255, 0.72)");
      glowGradient.addColorStop(0.24, "rgba(116, 186, 235, 0.28)");
      glowGradient.addColorStop(1, "rgba(58, 132, 194, 0)");
      glowContext.fillStyle = glowGradient;
      glowContext.fillRect(0, 0, 64, 64);
    }
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glowPositions = new Float32Array(MAX_BLOCKS * 3);
    const glowGeometry = new THREE.BufferGeometry();
    glowGeometry.setAttribute("position", new THREE.BufferAttribute(glowPositions, 3));
    const glowMaterial = new THREE.PointsMaterial({
      color: 0x9fd3f6,
      map: glowTexture,
      size: 0.78,
      transparent: true,
      opacity: 0.14,
      alphaTest: 0.005,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      toneMapped: false,
    });
    const blockGlow = new THREE.Points(glowGeometry, glowMaterial);
    blockGlow.renderOrder = -1;
    blocksGroup.add(blockGlow);

    const blockStates: BlockState[] = Array.from({ length: MAX_BLOCKS }, (_, index) => {
      const position = getRandomPosition();
      const rotation = new THREE.Euler(randomBetween(-1.2, 1.2), randomBetween(-1.2, 1.2), randomBetween(-1.2, 1.2));
      const quaternion = new THREE.Quaternion().setFromEuler(rotation);
      const brightness = randomBetween(0.92, 1);
      const color = new THREE.Color().setRGB(brightness, brightness, brightness);
      blocks.setColorAt(index, color);

      return {
        position,
        quaternion,
        scale: randomBetween(0.18, 0.8),
        fromPosition: position.clone(),
        fromQuaternion: quaternion.clone(),
        fromScale: 0,
        targetPosition: position.clone(),
        targetQuaternion: new THREE.Quaternion(),
        targetScale: 0,
        trajectory: createAxialTrajectory(position, position, index, 0, 0),
        spinTurns: randomBetween(1.15, 1.65),
        delay: (index % 12) * 0.014,
        brightness,
        seed: random() * Math.PI * 2,
      };
    });
    if (blocks.instanceColor) {
      blocks.instanceColor.needsUpdate = true;
    }

    const dummy = new THREE.Object3D();
    const instanceColor = new THREE.Color();
    const frontAxis = new THREE.Vector3(0, 0, 1);
    const surfaceNormal = new THREE.Vector3();
    const surfaceQuaternion = new THREE.Quaternion();
    const spinQuaternion = new THREE.Quaternion();
    const clock = new THREE.Clock();
    let transitionStart = 0;
    let transitionDuration = reducedMotion ? 0.18 : TRANSITION_DURATION;
    let transitionStyle: "intro" | "morph" = "intro";
    let currentGlyph = "";
    let transitionSerial = 0;
    let animationFrame = 0;
    let running = isRunning;
    let complete = isComplete;
    let pointerTargetX = 0;
    let pointerTargetY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let effectsState = { ...effects };

    const setGlyph = (nextGlyph: string) => {
      const nextDisplayGlyph = nextGlyph.toUpperCase().split("").filter((character) => GLYPH_GRID[character]).join("").slice(0, 2);
      if (nextDisplayGlyph === currentGlyph && currentGlyph !== "") {
        return;
      }

      const renderedGlyph = nextDisplayGlyph || "0";
      const targetPoints = getGlyphPoints(renderedGlyph);
      const targetAxes = getGlyphAxes(renderedGlyph);
      const currentAxes = getGlyphAxes(currentGlyph || renderedGlyph);
      const isInitialTransition = currentGlyph === "";
      transitionStart = clock.getElapsedTime();
      transitionStyle = isInitialTransition ? "intro" : "morph";
      transitionSerial += 1;
      const baseTransitionDuration = isInitialTransition
        ? 0.72
        : nextDisplayGlyph.length > 1
          ? 1.18
          : TRANSITION_DURATION;
      transitionDuration = reducedMotion ? 0.18 : baseTransitionDuration / effectsState.speed;

      const targetsByBlock = new Map<number, THREE.Vector3>();
      const axesByBlock = new Map<number, number>();
      const availableBlocks = new Set(blockStates.map((_, index) => index));
      const orderedTargets = [...targetPoints].sort((first, second) =>
        second.y - first.y || first.x - second.x,
      );

      orderedTargets.forEach((target) => {
        const targetAxis = getNearestAxis(target.x, targetAxes);
        let selectedIndex = -1;
        let selectedCost = Number.POSITIVE_INFINITY;

        availableBlocks.forEach((index) => {
          const block = blockStates[index];
          const rowDistance = Math.abs(block.position.y - target.y);
          const columnDistance = Math.abs(block.position.x - target.x);
          const hiddenPenalty = block.scale < 0.2 ? 1.4 : 0;
          const currentAxis = getNearestAxis(block.position.x, currentAxes);
          const axisPenalty = Math.abs(currentAxis - targetAxis) > 0.5 ? 3.4 : 0;
          const assignmentDrift = Math.abs(Math.sin(index * 12.9898 + transitionSerial * 4.1414))
            * 1.05
            * effectsState.randomness;
          const cost = rowDistance * 3.2 + columnDistance * 0.24 + hiddenPenalty + axisPenalty + assignmentDrift;
          if (cost < selectedCost) {
            selectedCost = cost;
            selectedIndex = index;
          }
        });

        if (selectedIndex >= 0) {
          targetsByBlock.set(selectedIndex, target);
          axesByBlock.set(selectedIndex, targetAxis);
          availableBlocks.delete(selectedIndex);
        }
      });

      blockStates.forEach((block, index) => {
        block.fromPosition.copy(block.position);
        block.fromQuaternion.copy(block.quaternion);
        block.fromScale = block.scale;

        const target = targetsByBlock.get(index);
        if (target) {
          block.targetPosition.copy(target);
          block.targetQuaternion.setFromEuler(
            new THREE.Euler(randomBetween(-0.1, 0.1), randomBetween(-0.1, 0.1), randomBetween(-0.075, 0.075)),
          );
          block.targetScale = 1;
        } else {
          block.targetPosition.set(
            block.fromPosition.x,
            block.fromPosition.y,
            0.18,
          );
          block.targetQuaternion.setFromEuler(
            new THREE.Euler(randomBetween(-1.8, 1.8), randomBetween(-1.8, 1.8), randomBetween(-1.8, 1.8)),
          );
          block.targetScale = 0;
        }

        const axisX = axesByBlock.get(index) ?? getNearestAxis(block.fromPosition.x, currentAxes);
        block.trajectory = createAxialTrajectory(
          block.fromPosition,
          block.targetPosition,
          index,
          transitionSerial,
          axisX,
        );
        block.spinTurns = randomBetween(1.08, 1.92);
        block.delay = Math.min(0.22, randomBetween(0, 0.13) * effectsState.stagger);
      });

      currentGlyph = nextDisplayGlyph;
    };

    const setRunning = (nextRunning: boolean) => {
      running = nextRunning;
    };

    const setComplete = (nextComplete: boolean) => {
      complete = nextComplete;
    };

    const setEffects = (nextEffects: TraEffects) => {
      const densityChanged = nextEffects.pixelDensity !== effectsState.pixelDensity;
      effectsState = { ...nextEffects };
      if (densityChanged) {
        renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * effectsState.pixelDensity, 3));
        renderer.setSize(Math.max(1, container.clientWidth), Math.max(1, container.clientHeight), false);
      }
    };

    apiRef.current = { setGlyph, setRunning, setComplete, setEffects };

    const createStars = (count: number, size: number, opacity: number, depthMin: number, depthMax: number) => {
      const positions = new Float32Array(count * 3);
      for (let index = 0; index < count; index += 1) {
        positions[index * 3] = randomBetween(-8.6, 8.6);
        positions[index * 3 + 1] = randomBetween(-2.6, 4.4);
        positions[index * 3 + 2] = randomBetween(depthMin, depthMax);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0xa5c9e2,
        size,
        transparent: true,
        opacity,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);
      return { points, geometry, material, speed: randomBetween(0.015, 0.035) };
    };

    const farStars = createStars(280, 0.038, 0.46, -4.5, -1.8);
    const nearStars = createStars(84, 0.066, 0.62, -1.6, -0.6);

    const beamGeometry = new THREE.BufferGeometry();
    const beamLength = 7.2;
    const beamWidth = 0.3;
    beamGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [0, 0, 0, beamLength, -beamWidth, 0, beamLength, beamWidth, 0],
        3,
      ),
    );
    beamGeometry.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0.5, 1, 0, 1, 1], 2));
    const beamMaterial = createBeamMaterial();

    for (let index = 0; index < 18; index += 1) {
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.rotation.z = (index / 18) * Math.PI * 2 + 0.06;
      beam.position.z = -0.62;
      beam.scale.setScalar(randomBetween(0.82, 1.12));
      beamsGroup.add(beam);
    }

    const handleResize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const aspect = width / height;
      camera.aspect = aspect;
      camera.fov = aspect < 0.82 ? 38 : 30;
      camera.position.z = aspect < 0.82 ? 11.8 : 10.5;
      world.scale.setScalar(aspect < 0.82 ? 0.76 : 0.66);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointerTargetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerTargetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointerTargetX = 0;
      pointerTargetY = 0;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    let resizeObserver: ResizeObserver | undefined;
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    }

    const updateStars = (starField: ReturnType<typeof createStars>, delta: number, factor: number) => {
      const attribute = starField.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let index = 0; index < attribute.count; index += 1) {
        const nextY = attribute.getY(index) - delta * starField.speed * factor;
        attribute.setY(index, nextY < -3.1 ? 4.5 : nextY);
      }
      attribute.needsUpdate = true;
    };

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.elapsedTime;
      const speedFactor = reducedMotion ? 0.18 : running ? 1 : 0.42;

      pointerX += (pointerTargetX - pointerX) * 0.035;
      pointerY += (pointerTargetY - pointerY) * 0.035;
      world.rotation.y += (pointerX * 0.045 - world.rotation.y) * 0.035;
      world.rotation.x += (-pointerY * 0.028 - world.rotation.x) * 0.035;
      world.position.x += (pointerX * 0.08 - world.position.x) * 0.035;
      world.position.y += (-pointerY * 0.055 - world.position.y) * 0.035;
      beamsGroup.rotation.z += delta * 0.008 * speedFactor;

      const transitionProgress = Math.min(1, Math.max(0, (elapsed - transitionStart) / transitionDuration));
      const easedProgress = 1 - Math.pow(1 - transitionProgress, 4);
      const settleProgress = 1 - easedProgress;
      const transitionEnergy = transitionStyle === "morph" ? Math.sin(Math.PI * transitionProgress) : 0;
      const completePulse = complete && !reducedMotion ? 1 + Math.sin(elapsed * 3.2) * 0.06 : 1;

      blockStates.forEach((block, index) => {
        let localProgress = 0;
        if (transitionStyle === "intro" || reducedMotion) {
          block.position.lerpVectors(block.fromPosition, block.targetPosition, easedProgress);
          block.quaternion.slerpQuaternions(block.fromQuaternion, block.targetQuaternion, easedProgress);
          block.scale = THREE.MathUtils.lerp(block.fromScale, block.targetScale, easedProgress);
        } else {
          localProgress = Math.min(1, Math.max(0, (transitionProgress - block.delay) / (1 - block.delay)));
          const sampledPosition = sampleAxialTrajectory(
            block.trajectory,
            localProgress,
            effectsState.randomness,
            effectsState.depth,
          );
          block.position.set(sampledPosition.x, sampledPosition.y, sampledPosition.z);

          const orbitMount = THREE.MathUtils.smoothstep(localProgress, 0, 0.14);
          const orbitDismount = 1 - THREE.MathUtils.smoothstep(localProgress, 0.84, 1);
          const orbitInfluence = Math.min(orbitMount, orbitDismount);
          surfaceNormal.set(
            block.position.x - block.trajectory.axisX,
            0,
            block.position.z - block.trajectory.axisZ,
          );
          if (surfaceNormal.lengthSq() < 0.0001) {
            surfaceNormal.copy(frontAxis);
          } else {
            surfaceNormal.normalize();
          }
          surfaceQuaternion.setFromUnitVectors(frontAxis, surfaceNormal);
          spinQuaternion.setFromAxisAngle(
            surfaceNormal,
            Math.PI * 2 * block.spinTurns * effectsState.speed * (1 - Math.pow(1 - localProgress, 3)),
          );
          surfaceQuaternion.multiply(spinQuaternion);
          block.quaternion.slerpQuaternions(block.fromQuaternion, surfaceQuaternion, orbitInfluence);
          if (localProgress > 0.82) {
            block.quaternion.slerp(
              block.targetQuaternion,
              THREE.MathUtils.smoothstep(localProgress, 0.82, 1),
            );
          }

          const scaleProgress = THREE.MathUtils.smoothstep(localProgress, block.targetScale > 0 ? 0.68 : 0.58, 1);
          block.scale = THREE.MathUtils.lerp(block.fromScale, block.targetScale, scaleProgress);
        }

        const turbulence = transitionStyle === "morph"
          ? 0
          : settleProgress * (reducedMotion ? 0.02 : 0.06);
        block.position.x += Math.sin(elapsed * (1.2 + block.seed) + block.seed) * turbulence;
        block.position.y += Math.cos(elapsed * (1.5 + block.seed) + block.seed) * turbulence;
        block.position.z += Math.sin(elapsed * 1.4 + block.seed) * turbulence * 0.6;

        const renderScale = block.scale * (block.targetScale > 0 ? completePulse : 1);
        dummy.position.copy(block.position);
        dummy.quaternion.copy(block.quaternion);
        dummy.scale.setScalar(renderScale);
        dummy.updateMatrix();
        blocks.setMatrixAt(index, dummy.matrix);

        trailMeshes.forEach((trail, layer) => {
          const trailLag = (layer + 1) * (0.026 + effectsState.trail * 0.032);
          const trailProgress = Math.max(0, localProgress - trailLag);
          const showTrail = transitionStyle === "morph"
            && !reducedMotion
            && effectsState.trail > 0.01
            && trailProgress > 0
            && localProgress < 0.995;

          if (showTrail) {
            const trailPosition = sampleAxialTrajectory(
              block.trajectory,
              trailProgress,
              effectsState.randomness,
              effectsState.depth,
            );
            dummy.position.set(trailPosition.x, trailPosition.y, trailPosition.z);
            dummy.quaternion.copy(block.quaternion);
            dummy.scale.setScalar(renderScale * (0.72 - layer * 0.16));
          } else {
            dummy.position.copy(block.position);
            dummy.quaternion.copy(block.quaternion);
            dummy.scale.setScalar(0);
          }
          dummy.updateMatrix();
          trail.setMatrixAt(index, dummy.matrix);
        });

        const frontness = THREE.MathUtils.clamp(
          (block.position.z - block.trajectory.axisZ) / block.trajectory.referenceRadius,
          -1,
          1,
        );
        const depthBrightness = THREE.MathUtils.lerp(0.22, 1, (frontness + 1) * 0.5);
        const visibleBrightness = block.brightness * depthBrightness;
        instanceColor.setRGB(visibleBrightness, visibleBrightness, visibleBrightness);
        blocks.setColorAt(index, instanceColor);

        const glowOffset = index * 3;
        if (renderScale > 0.035 && frontness > -0.5) {
          glowPositions[glowOffset] = block.position.x;
          glowPositions[glowOffset + 1] = block.position.y;
          glowPositions[glowOffset + 2] = block.position.z - 0.08;
        } else {
          glowPositions[glowOffset] = 0;
          glowPositions[glowOffset + 1] = 0;
          glowPositions[glowOffset + 2] = -50;
        }
      });
      blocks.instanceMatrix.needsUpdate = true;
      trailMeshes.forEach((trail) => {
        trail.instanceMatrix.needsUpdate = true;
      });
      if (blocks.instanceColor) {
        blocks.instanceColor.needsUpdate = true;
      }
      (glowGeometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;

      glowMaterial.opacity = effectsState.glow * 0.14;
      glowMaterial.size = 0.58 + effectsState.glow * 0.2;
      blockMaterial.emissiveIntensity = effectsState.glow * 0.36;
      trailMaterials.forEach((material, layer) => {
        material.opacity = effectsState.trail * (0.2 - layer * 0.045);
      });

      updateStars(farStars, delta, speedFactor);
      updateStars(nearStars, delta, speedFactor * 1.3);
      beamMaterial.uniforms.uOpacity.value = 0.13 + transitionEnergy * 0.14 + Math.sin(elapsed * 0.7) * 0.014;
      centerLight.intensity = 9.6 + transitionEnergy * 11 + Math.sin(elapsed * 1.1) * 0.45;
      renderer.render(scene, camera);
    };

    handleResize();
    setGlyph(glyph);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      resizeObserver?.disconnect();
      apiRef.current = null;
      renderer.dispose();
      blockGeometry.dispose();
      blockMaterial.dispose();
      trailMaterials.forEach((material) => material.dispose());
      glowGeometry.dispose();
      glowMaterial.dispose();
      glowTexture.dispose();
      beamGeometry.dispose();
      beamMaterial.dispose();
      farStars.geometry.dispose();
      farStars.material.dispose();
      nearStars.geometry.dispose();
      nearStars.material.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
    // The scene is created once per canvas key. Props are synced through apiRef below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    apiRef.current?.setGlyph(glyph);
  }, [glyph]);

  useEffect(() => {
    apiRef.current?.setRunning(isRunning);
  }, [isRunning]);

  useEffect(() => {
    apiRef.current?.setComplete(isComplete);
  }, [isComplete]);

  useEffect(() => {
    apiRef.current?.setEffects(effects);
  }, [effects]);

  return (
    <div
      ref={containerRef}
      className="tra-canvas-wrap"
      role="img"
      aria-label={ariaLabel}
    >
      {!hasWebgl && (
        <div className="tra-canvas-fallback" aria-hidden="true">
          <span>{glyph}</span>
        </div>
      )}
    </div>
  );
};

export default TraCountdownCanvas;
