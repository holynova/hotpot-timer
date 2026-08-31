import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import "./TraCountdownCanvas.css";

interface TraCountdownCanvasProps {
  glyph: string;
  isRunning: boolean;
  isComplete: boolean;
  ariaLabel: string;
}

interface CountdownSceneApi {
  setGlyph: (glyph: string) => void;
  setRunning: (running: boolean) => void;
  setComplete: (complete: boolean) => void;
}

interface BlockState {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: number;
  fromPosition: THREE.Vector3;
  fromRotation: THREE.Euler;
  fromScale: number;
  targetPosition: THREE.Vector3;
  targetRotation: THREE.Euler;
  targetScale: number;
  seed: number;
}

const MAX_BLOCKS = 84;
const BLOCK_SIZE = 0.48;
const CELL_SIZE = 0.62;
const TRANSITION_DURATION = 0.95;

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

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

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
            0.22,
          ),
        );
      });
    });
  });

  return points;
};

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

const TraCountdownCanvas: React.FC<TraCountdownCanvasProps> = ({ glyph, isRunning, isComplete, ariaLabel }) => {
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
    scene.fog = new THREE.FogExp2(0x010304, 0.032);

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 9.5);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    } catch {
      setHasWebgl(false);
      return undefined;
    }

    setHasWebgl(true);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
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

    const ambientLight = new THREE.AmbientLight(0x2f5874, 1.35);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xeaf6ff, 2.8);
    frontLight.position.set(1.5, 3.5, 7);
    scene.add(frontLight);

    const centerLight = new THREE.PointLight(0x78b8e8, 13, 11, 2);
    centerLight.position.set(0, 0, 2.5);
    scene.add(centerLight);

    const rimLight = new THREE.PointLight(0x0b3d71, 18, 10, 2);
    rimLight.position.set(0, -1.2, -1.8);
    scene.add(rimLight);

    const blockGeometry = new RoundedBoxGeometry(BLOCK_SIZE, BLOCK_SIZE, 0.28, 5, 0.09);
    const blockMaterial = new THREE.MeshBasicMaterial({
      color: 0xf4f8fa,
      toneMapped: false,
    });
    const blocks = new THREE.InstancedMesh(blockGeometry, blockMaterial, MAX_BLOCKS);
    blocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    blocksGroup.add(blocks);

    const blockStates: BlockState[] = Array.from({ length: MAX_BLOCKS }, (_, index) => {
      const position = getRandomPosition();
      const rotation = new THREE.Euler(randomBetween(-1.2, 1.2), randomBetween(-1.2, 1.2), randomBetween(-1.2, 1.2));
      const color = new THREE.Color().setHSL(0.55, 0.1, randomBetween(0.84, 0.98));
      blocks.setColorAt(index, color);

      return {
        position,
        rotation,
        scale: randomBetween(0.18, 0.8),
        fromPosition: position.clone(),
        fromRotation: rotation.clone(),
        fromScale: 0,
        targetPosition: position.clone(),
        targetRotation: new THREE.Euler(),
        targetScale: 0,
        seed: Math.random() * Math.PI * 2,
      };
    });
    if (blocks.instanceColor) {
      blocks.instanceColor.needsUpdate = true;
    }

    const dummy = new THREE.Object3D();
    const clock = new THREE.Clock();
    let transitionStart = 0;
    let transitionDuration = reducedMotion ? 0.18 : TRANSITION_DURATION;
    let currentGlyph = "";
    let animationFrame = 0;
    let running = isRunning;
    let complete = isComplete;
    let pointerTargetX = 0;
    let pointerTargetY = 0;
    let pointerX = 0;
    let pointerY = 0;

    const setGlyph = (nextGlyph: string) => {
      const nextDisplayGlyph = nextGlyph.toUpperCase().split("").filter((character) => GLYPH_GRID[character]).join("").slice(0, 2);
      if (nextDisplayGlyph === currentGlyph && currentGlyph !== "") {
        return;
      }

      const targetPoints = getGlyphPoints(nextDisplayGlyph || "0");
      transitionStart = clock.getElapsedTime();
      transitionDuration = reducedMotion ? 0.18 : nextDisplayGlyph.length > 1 ? 1.05 : TRANSITION_DURATION;

      blockStates.forEach((block, index) => {
        block.fromPosition.copy(block.position);
        block.fromRotation.copy(block.rotation);
        block.fromScale = block.scale;

        const target = targetPoints[index];
        if (target) {
          block.targetPosition.copy(target);
          block.targetRotation.set(randomBetween(-0.025, 0.025), randomBetween(-0.025, 0.025), randomBetween(-0.035, 0.035));
          block.targetScale = 1;
        } else {
          const angle = randomBetween(0, Math.PI * 2);
          const radius = randomBetween(2.7, 5.3);
          block.targetPosition.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.68, randomBetween(-1.4, 0.5));
          block.targetRotation.set(randomBetween(-1.8, 1.8), randomBetween(-1.8, 1.8), randomBetween(-1.8, 1.8));
          block.targetScale = 0;
        }
      });

      currentGlyph = nextDisplayGlyph;
    };

    const setRunning = (nextRunning: boolean) => {
      running = nextRunning;
    };

    const setComplete = (nextComplete: boolean) => {
      complete = nextComplete;
    };

    apiRef.current = { setGlyph, setRunning, setComplete };

    const createStars = (count: number, size: number, opacity: number, depthMin: number, depthMax: number) => {
      const positions = new Float32Array(count * 3);
      for (let index = 0; index < count; index += 1) {
        positions[index * 3] = randomBetween(-8.6, 8.6);
        positions[index * 3 + 1] = randomBetween(-3.5, 4.2);
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

    const farStars = createStars(220, 0.055, 0.52, -4.5, -1.8);
    const nearStars = createStars(90, 0.09, 0.7, -1.6, -0.6);

    const beamGeometry = new THREE.BufferGeometry();
    const beamLength = 6.4;
    const beamWidth = 0.72;
    beamGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [0, 0, 0, beamLength, -beamWidth, 0, beamLength, beamWidth, 0],
        3,
      ),
    );
    beamGeometry.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0.5, 1, 0, 1, 1], 2));
    const beamMaterial = createBeamMaterial();

    for (let index = 0; index < 12; index += 1) {
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.rotation.z = (index / 12) * Math.PI * 2 + 0.06;
      beam.position.z = -0.72;
      beam.scale.setScalar(randomBetween(0.72, 1.08));
      beamsGroup.add(beam);
    }

    const handleResize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const aspect = width / height;
      camera.aspect = aspect;
      camera.fov = aspect < 0.82 ? 42 : 34;
      camera.position.z = aspect < 0.82 ? 11.5 : 9.5;
      world.scale.setScalar(aspect < 0.82 ? 0.78 : 0.7);
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
        attribute.setY(index, nextY < -4.2 ? 4.3 : nextY);
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
      beamsGroup.rotation.z += delta * 0.012 * speedFactor;

      const transitionProgress = Math.min(1, Math.max(0, (elapsed - transitionStart) / transitionDuration));
      const easedProgress = 1 - Math.pow(1 - transitionProgress, 4);
      const settleProgress = 1 - easedProgress;
      const completePulse = complete && !reducedMotion ? 1 + Math.sin(elapsed * 3.2) * 0.06 : 1;

      blockStates.forEach((block, index) => {
        block.position.lerpVectors(block.fromPosition, block.targetPosition, easedProgress);
        block.rotation.x = THREE.MathUtils.lerp(block.fromRotation.x, block.targetRotation.x, easedProgress);
        block.rotation.y = THREE.MathUtils.lerp(block.fromRotation.y, block.targetRotation.y, easedProgress);
        block.rotation.z = THREE.MathUtils.lerp(block.fromRotation.z, block.targetRotation.z, easedProgress);
        block.scale = THREE.MathUtils.lerp(block.fromScale, block.targetScale, easedProgress);

        const turbulence = settleProgress * (reducedMotion ? 0.02 : 0.18);
        block.position.x += Math.sin(elapsed * (1.2 + block.seed) + block.seed) * turbulence;
        block.position.y += Math.cos(elapsed * (1.5 + block.seed) + block.seed) * turbulence;
        block.position.z += Math.sin(elapsed * 1.4 + block.seed) * turbulence * 0.6;

        const renderScale = block.scale * (block.targetScale > 0 ? completePulse : 1);
        dummy.position.copy(block.position);
        dummy.rotation.copy(block.rotation);
        dummy.scale.setScalar(renderScale);
        dummy.updateMatrix();
        blocks.setMatrixAt(index, dummy.matrix);
      });
      blocks.instanceMatrix.needsUpdate = true;

      updateStars(farStars, delta, speedFactor);
      updateStars(nearStars, delta, speedFactor * 1.3);
      beamMaterial.uniforms.uOpacity.value = 0.24 + Math.sin(elapsed * 0.7) * 0.02;
      centerLight.intensity = 12.2 + Math.sin(elapsed * 1.1) * 0.55;
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
