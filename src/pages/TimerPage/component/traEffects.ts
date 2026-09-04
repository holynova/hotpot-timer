export interface TraEffects {
  randomness: number;
  glow: number;
  pixelDensity: number;
  speed: number;
  slowMotion: number;
  trail: number;
  stagger: number;
  depth: number;
}

export const DEFAULT_TRA_EFFECTS: TraEffects = {
  randomness: 0.2,
  glow: 1.5,
  pixelDensity: 1,
  speed: 1.3,
  slowMotion: 1,
  trail: 1,
  stagger: 1,
  depth: 1,
};

const LEGACY_DEFAULT_TRA_EFFECTS: TraEffects = {
  randomness: 1,
  glow: 1,
  pixelDensity: 1,
  speed: 1,
  slowMotion: 1,
  trail: 0.28,
  stagger: 1,
  depth: 1,
};

const EFFECT_LIMITS: Record<keyof TraEffects, [number, number]> = {
  randomness: [0, 1.5],
  glow: [0, 1.5],
  pixelDensity: [0.6, 1.4],
  speed: [0.7, 1.6],
  slowMotion: [0.1, 1],
  trail: [0, 1],
  stagger: [0, 1.5],
  depth: [0.65, 1.35],
};

export const normalizeTraEffects = (value: Partial<TraEffects>): TraEffects =>
  (Object.keys(DEFAULT_TRA_EFFECTS) as Array<keyof TraEffects>).reduce((effects, key) => {
    const [minimum, maximum] = EFFECT_LIMITS[key];
    const candidate = Number(value[key]);
    effects[key] = Math.min(
      maximum,
      Math.max(minimum, Number.isFinite(candidate) ? candidate : DEFAULT_TRA_EFFECTS[key]),
    );
    return effects;
  }, { ...DEFAULT_TRA_EFFECTS });

export const isLegacyDefaultTraEffects = (effects: TraEffects) =>
  (Object.keys(DEFAULT_TRA_EFFECTS) as Array<keyof TraEffects>).every(
    (key) => effects[key] === LEGACY_DEFAULT_TRA_EFFECTS[key],
  );
