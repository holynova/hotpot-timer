export interface MotionPoint {
  x: number;
  y: number;
  z: number;
}

export interface AxialTrajectory {
  start: MotionPoint;
  target: MotionPoint;
  direction: "counterclockwise";
  axisX: number;
  axisZ: number;
  startY: number;
  targetY: number;
  startAngle: number;
  angleDelta: number;
  startOrbitRadius: number;
  targetOrbitRadius: number;
  referenceRadius: number;
  flightAmplitude: number;
  flightFrequency: number;
  flightPhase: number;
}

const TAU = Math.PI * 2;
const AXIS_DEPTH = 0.18;
const MIN_ORBIT_RADIUS = 0.34;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const smoothstep = (value: number) => {
  const next = clamp01(value);
  return next * next * (3 - 2 * next);
};

const smootherstep = (value: number) => {
  const next = clamp01(value);
  return next * next * next * (next * (next * 6 - 15) + 10);
};

const interpolate = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;

const seededUnit = (index: number, transitionSeed: number, channel: number) => {
  let value = Math.imul(index + 1, 0x1f123bb5)
    ^ Math.imul(transitionSeed + 1, 0x5f356495)
    ^ Math.imul(channel + 1, 0x6c8e9cf5);
  value = Math.imul(value ^ (value >>> 15), 0x2c1b3c6d);
  value = Math.imul(value ^ (value >>> 12), 0x297a2d39);
  return ((value ^ (value >>> 15)) >>> 0) / 4294967296;
};

const getAngle = (
  point: MotionPoint,
  axisX: number,
  fallbackAngle: number,
) => {
  const offsetX = point.x - axisX;
  const offsetZ = point.z - AXIS_DEPTH;
  return Math.hypot(offsetX, offsetZ) > 0.04
    ? Math.atan2(offsetX, offsetZ)
    : fallbackAngle;
};

export const createAxialTrajectory = (
  start: MotionPoint,
  target: MotionPoint,
  index: number,
  transitionSeed: number,
  axisX = 0,
): AxialTrajectory => {
  const fallbackAngle = seededUnit(index, transitionSeed, 3) * TAU - Math.PI;
  const startAngle = getAngle(start, axisX, fallbackAngle);
  const targetAngle = getAngle(target, axisX, startAngle);
  const startOrbitRadius = Math.max(
    MIN_ORBIT_RADIUS,
    Math.hypot(start.x - axisX, start.z - AXIS_DEPTH),
  );
  const targetOrbitRadius = Math.max(
    MIN_ORBIT_RADIUS,
    Math.hypot(target.x - axisX, target.z - AXIS_DEPTH),
  );

  return {
    start: { ...start },
    target: { ...target },
    direction: "counterclockwise",
    axisX,
    axisZ: AXIS_DEPTH,
    startY: start.y,
    targetY: target.y,
    startAngle,
    angleDelta: TAU + targetAngle - startAngle,
    startOrbitRadius,
    targetOrbitRadius,
    referenceRadius: Math.max(startOrbitRadius, targetOrbitRadius),
    flightAmplitude: interpolate(0.2, 0.38, seededUnit(index, transitionSeed, 0)),
    flightFrequency: interpolate(1.05, 2.05, seededUnit(index, transitionSeed, 1)),
    flightPhase: seededUnit(index, transitionSeed, 2) * TAU,
  };
};

export const sampleAxialTrajectory = (
  trajectory: AxialTrajectory,
  rawProgress: number,
  randomness = 1,
  depth = 1,
): MotionPoint => {
  if (rawProgress <= 0) {
    return { ...trajectory.start };
  }
  if (rawProgress >= 1) {
    return { ...trajectory.target };
  }

  const progress = clamp01(rawProgress);
  const angularProgress = smootherstep(progress);
  const handoffProgress = smootherstep((progress - 0.34) / 0.32);
  const angle = trajectory.startAngle + trajectory.angleDelta * angularProgress;
  const orbitRadius = interpolate(
    trajectory.startOrbitRadius,
    trajectory.targetOrbitRadius,
    handoffProgress,
  ) * depth;

  const flightEnvelope = Math.pow(Math.sin(Math.PI * progress), 1.25);
  const flightPhase = trajectory.flightPhase + progress * TAU * trajectory.flightFrequency;
  const radialWave = trajectory.flightAmplitude
    * flightEnvelope
    * (0.58 + Math.sin(flightPhase * 0.73 + 0.4) * 0.42);
  const tangentWave = trajectory.flightAmplitude
    * flightEnvelope
    * Math.sin(flightPhase)
    * 0.7;
  const verticalWave = trajectory.flightAmplitude
    * flightEnvelope
    * Math.cos(flightPhase * 1.27 + 0.9)
    * 0.88;

  const radialX = Math.sin(angle);
  const radialZ = Math.cos(angle);
  const tangentX = Math.cos(angle);
  const tangentZ = -Math.sin(angle);
  const liftedRadius = orbitRadius + radialWave * randomness;
  const orbitPosition = {
    x: trajectory.axisX + radialX * liftedRadius + tangentX * tangentWave * randomness,
    y: interpolate(trajectory.startY, trajectory.targetY, handoffProgress) + verticalWave * randomness,
    z: trajectory.axisZ + radialZ * liftedRadius + tangentZ * tangentWave * randomness,
  };

  const mountProgress = smoothstep(progress / 0.14);
  const dismountProgress = smoothstep((1 - progress) / 0.14);
  const orbitInfluence = Math.min(mountProgress, dismountProgress);
  const baseline = {
    x: interpolate(trajectory.start.x, trajectory.target.x, angularProgress),
    y: interpolate(trajectory.start.y, trajectory.target.y, angularProgress),
    z: interpolate(trajectory.start.z, trajectory.target.z, angularProgress),
  };

  return {
    x: interpolate(baseline.x, orbitPosition.x, orbitInfluence),
    y: interpolate(baseline.y, orbitPosition.y, orbitInfluence),
    z: interpolate(baseline.z, orbitPosition.z, orbitInfluence),
  };
};
