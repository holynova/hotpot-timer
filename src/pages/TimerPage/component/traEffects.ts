export interface TraEffects {
  randomness: number;
  glow: number;
  pixelDensity: number;
  speed: number;
  trail: number;
  stagger: number;
  depth: number;
}

export const DEFAULT_TRA_EFFECTS: TraEffects = {
  randomness: 1,
  glow: 1,
  pixelDensity: 1,
  speed: 1,
  trail: 0.28,
  stagger: 1,
  depth: 1,
};

const EFFECT_LIMITS: Record<keyof TraEffects, [number, number]> = {
  randomness: [0, 1.5],
  glow: [0, 1.5],
  pixelDensity: [0.6, 1.4],
  speed: [0.7, 1.6],
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
