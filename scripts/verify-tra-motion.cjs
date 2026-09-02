const assert = require("node:assert/strict");
const {
  createAxialTrajectory,
  sampleAxialTrajectory,
} = require("/tmp/hotpot-timer-motion/traMotion.js");

const start = { x: -1.2, y: 0.78, z: 0.18 };
const target = { x: 0.9, y: 0.78, z: 0.18 };
const trajectory = createAxialTrajectory(start, target, 7, 19, 0);
const first = sampleAxialTrajectory(trajectory, 0);
const last = sampleAxialTrajectory(trajectory, 1);

assert.deepEqual(first, start, "the orbit must begin at the existing cube position");
assert.deepEqual(last, target, "the orbit must land exactly on the target cube position");
assert.equal(trajectory.direction, "counterclockwise", "every axial orbit must run counterclockwise");
assert.equal(trajectory.axisX, 0, "a single glyph must rotate around its own horizontal center");
assert.equal(trajectory.axisZ, 0.18, "the rotation axis must pass through the numeral plane, not a distant sphere center");

const axialSamples = Array.from({ length: 31 }, (_, index) =>
  sampleAxialTrajectory(trajectory, 0.15 + (index / 30) * 0.7),
);
const orbitErrors = axialSamples.map(({ x, y, z }) =>
  Math.abs(Math.hypot(x - trajectory.axisX, z - trajectory.axisZ) - trajectory.startOrbitRadius),
);
assert.ok(
  Math.max(...orbitErrors) > 0.12,
  "each cube needs a visible flight wave instead of a perfectly ordered axial rail",
);
assert.ok(
  Math.max(...orbitErrors) < 0.72,
  "the random flight wave must stay bounded around the glyph axis",
);

const alternateTrajectory = createAxialTrajectory(start, target, 18, 19, 0);
const alternateMidpoint = sampleAxialTrajectory(alternateTrajectory, 0.5);
const midpoint = sampleAxialTrajectory(trajectory, 0.5);
assert.ok(
  Math.hypot(
    midpoint.x - alternateMidpoint.x,
    midpoint.y - alternateMidpoint.y,
    midpoint.z - alternateMidpoint.z,
  ) > 0.12,
  "different cubes must receive visibly different flight paths",
);

const cleanMidpoint = sampleAxialTrajectory(trajectory, 0.5, 0, 1);
const cleanAlternateMidpoint = sampleAxialTrajectory(alternateTrajectory, 0.5, 0, 1);
assert.ok(
  Math.hypot(
    cleanMidpoint.x - cleanAlternateMidpoint.x,
    cleanMidpoint.y - cleanAlternateMidpoint.y,
    cleanMidpoint.z - cleanAlternateMidpoint.z,
  ) < 1e-8,
  "setting randomness to zero must remove seeded per-cube flight waves",
);
const deepMidpoint = sampleAxialTrajectory(trajectory, 0.5, 0, 1.35);
assert.ok(
  Math.hypot(deepMidpoint.x - trajectory.axisX, deepMidpoint.z - trajectory.axisZ)
    > Math.hypot(cleanMidpoint.x - trajectory.axisX, cleanMidpoint.z - trajectory.axisZ),
  "depth control must expand the orbit around the same embedded glyph axis",
);

const rawLongitudes = axialSamples.map(({ x, z }) =>
  Math.atan2(x - trajectory.axisX, z - trajectory.axisZ),
);
const unwrappedLongitudes = [rawLongitudes[0]];
for (const longitude of rawLongitudes.slice(1)) {
  let next = longitude;
  while (next < unwrappedLongitudes[unwrappedLongitudes.length - 1]) {
    next += Math.PI * 2;
  }
  unwrappedLongitudes.push(next);
}

assert.ok(
  unwrappedLongitudes.at(-1) - unwrappedLongitudes[0] > Math.PI * 1.4,
  "the main motion must still cover most of a counterclockwise axial circle",
);
assert.ok(
  Math.max(...axialSamples.map(({ z }) => z)) - Math.min(...axialSamples.map(({ z }) => z)) > 1.2,
  "the orbit must pass through real front/back depth",
);

const leftAxis = -1.00425;
const leftTrajectory = createAxialTrajectory(
  { x: -1.78, y: -0.4, z: 0.18 },
  { x: -0.22, y: 0.4, z: 0.18 },
  4,
  22,
  leftAxis,
);
assert.equal(leftTrajectory.axisX, leftAxis, "each glyph in a multi-digit value must keep its own axis");
assert.equal(leftTrajectory.axisZ, 0.18, "every per-glyph axis must remain embedded in the numeral plane");

console.log("TRA motion regression passed: turbulent counterclockwise flight around an axis embedded in each glyph.");
