import React, { useEffect, useMemo, useRef, useState } from "react";
import { Github, Pause, Play, RotateCcw, SlidersHorizontal, Volume2, VolumeX } from "lucide-react";
import TraCountdownCanvas from "./component/TraCountdownCanvas";
import {
  DEFAULT_TRA_EFFECTS,
  isLegacyDefaultTraEffects,
  normalizeTraEffects,
  type TraEffects,
} from "./component/traEffects";
import "./TimerPage.css";

const PRESETS = [10, 30, 60, 300];
const MAX_LETTERS = 26;

const NUMBER_WORDS: Record<number, string> = {
  0: "ZERO", 1: "ONE", 2: "TWO", 3: "THREE", 4: "FOUR",
  5: "FIVE", 6: "SIX", 7: "SEVEN", 8: "EIGHT", 9: "NINE", 10: "TEN",
};

type TimerMode = "countdown" | "letters";

interface EffectControl {
  key: keyof TraEffects;
  label: string;
  minimum: number;
  maximum: number;
  step: number;
  format: (value: number) => string;
}

const EFFECT_CONTROLS: EffectControl[] = [
  { key: "randomness", label: "随机跳动", minimum: 0, maximum: 1.5, step: 0.05, format: (value) => `${Math.round(value * 100)}%` },
  { key: "glow", label: "发光", minimum: 0, maximum: 1.5, step: 0.05, format: (value) => `${Math.round(value * 100)}%` },
  { key: "pixelDensity", label: "像素密度", minimum: 0.6, maximum: 1.4, step: 0.05, format: (value) => `${value.toFixed(2)}×` },
  { key: "speed", label: "旋转速度", minimum: 0.7, maximum: 1.6, step: 0.05, format: (value) => `${value.toFixed(2)}×` },
  { key: "slowMotion", label: "慢放倍率", minimum: 0.1, maximum: 1, step: 0.1, format: (value) => `${value.toFixed(1)}×` },
  { key: "trail", label: "旋转拖尾", minimum: 0, maximum: 1, step: 0.05, format: (value) => `${Math.round(value * 100)}%` },
  { key: "stagger", label: "错峰", minimum: 0, maximum: 1.5, step: 0.05, format: (value) => `${Math.round(value * 100)}%` },
  { key: "depth", label: "纵深", minimum: 0.65, maximum: 1.35, step: 0.05, format: (value) => `${value.toFixed(2)}×` },
];

const normalizeLetters = (value: string) =>
  value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, MAX_LETTERS);

const getStoredLetters = () => {
  try {
    return normalizeLetters(window.localStorage.getItem("tra-letter-sequence") ?? "") || "TRA";
  } catch {
    return "TRA";
  }
};

const getStoredDuration = () => {
  try {
    const stored = Number(window.localStorage.getItem("tra-countdown-duration"));
    return Number.isFinite(stored) && stored > 0 ? Math.min(stored, 3600) : 10;
  } catch {
    return 10;
  }
};

const getStoredEffects = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem("tra-animation-effects") ?? "{}");
    const effects = normalizeTraEffects(stored);
    return isLegacyDefaultTraEffects(effects) ? { ...DEFAULT_TRA_EFFECTS } : effects;
  } catch {
    return { ...DEFAULT_TRA_EFFECTS };
  }
};

const clampDuration = (value: number) =>
  Math.min(3600, Math.max(1, Math.round(Number.isFinite(value) ? value : 10)));

const formatTime = (seconds: number) => {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds - minutes * 60;
  const wholeSeconds = Math.floor(remainder);
  const tenths = Math.floor((remainder - wholeSeconds) * 10);

  return minutes > 0
    ? `${String(minutes).padStart(2, "0")}:${String(wholeSeconds).padStart(2, "0")}`
    : `00:${String(wholeSeconds).padStart(2, "0")}.${tenths}`;
};

const formatPreset = (seconds: number) => seconds >= 60 ? `${seconds / 60}M` : `${seconds}S`;

const TimerPage: React.FC = () => {
  const initialDuration = useMemo(() => getStoredDuration(), []);
  const initialLetters = useMemo(() => getStoredLetters(), []);
  const initialEffects = useMemo(() => getStoredEffects(), []);
  const [duration, setDuration] = useState(initialDuration);
  const [secondsInput, setSecondsInput] = useState(String(initialDuration));
  const [remaining, setRemaining] = useState(initialDuration);
  const [mode, setMode] = useState<TimerMode>("countdown");
  const [letterInput, setLetterInput] = useState(initialLetters);
  const [letterSequence, setLetterSequence] = useState(initialLetters);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isLetterRunning, setIsLetterRunning] = useState(false);
  const [isLetterComplete, setIsLetterComplete] = useState(initialLetters.length <= 1);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [displayedWordValue, setDisplayedWordValue] = useState(initialDuration);
  const [sceneKey, setSceneKey] = useState(0);
  const [notice, setNotice] = useState("设定时间，然后开始");
  const [effects, setEffects] = useState(initialEffects);
  const deadlineRef = useRef(0);
  const runIdRef = useRef(0);

  const visualValue = useMemo(() => {
    const rounded = Math.ceil(Math.max(0, remaining));
    return duration > 99 && rounded > 99 ? Math.ceil(rounded / 60) : rounded;
  }, [duration, remaining]);

  const activeLetter = letterSequence[letterIndex] ?? letterSequence[0] ?? "A";
  const activeRunning = mode === "letters" ? isLetterRunning : isRunning;
  const stageComplete = mode === "letters" ? isLetterComplete : isComplete;
  const visualWord = duration > 99 && Math.ceil(Math.max(0, remaining)) > 99
    ? "MINUTES"
    : NUMBER_WORDS[displayedWordValue] ?? "SECONDS";

  useEffect(() => {
    if (!isRunning) {
      setDisplayedWordValue(visualValue);
      return undefined;
    }

    const timer = window.setTimeout(() => setDisplayedWordValue(visualValue), 520);
    return () => window.clearTimeout(timer);
  }, [isRunning, visualValue]);

  useEffect(() => {
    try {
      window.localStorage.setItem("tra-countdown-duration", String(duration));
    } catch {
      // Persistence is optional.
    }
  }, [duration]);

  useEffect(() => {
    try {
      window.localStorage.setItem("tra-letter-sequence", letterSequence);
    } catch {
      // Persistence is optional.
    }
  }, [letterSequence]);

  useEffect(() => {
    try {
      window.localStorage.setItem("tra-animation-effects", JSON.stringify(effects));
    } catch {
      // Persistence is optional.
    }
  }, [effects]);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const runId = runIdRef.current;
    let frame = 0;
    const tick = () => {
      if (runId !== runIdRef.current) {
        return;
      }

      const nextRemaining = Math.max(0, (deadlineRef.current - Date.now()) / 1000);
      setRemaining(nextRemaining);
      if (nextRemaining <= 0) {
        runIdRef.current += 1;
        setIsRunning(false);
        setIsComplete(true);
        setNotice("时间到");

        if (soundEnabled) {
          const completionSound = new Audio("/timer_sound.mp3");
          completionSound.volume = 0.24;
          completionSound.play().catch(() => undefined);
        }
        return;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isRunning, soundEnabled]);

  useEffect(() => {
    if (mode !== "letters" || !isLetterRunning) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = letterIndex + 1;
      if (nextIndex >= letterSequence.length) {
        setIsLetterRunning(false);
        setIsLetterComplete(true);
        setNotice("序列完成");
        return;
      }

      setLetterIndex(nextIndex);
      if (nextIndex === letterSequence.length - 1) {
        setIsLetterRunning(false);
        setIsLetterComplete(true);
        setNotice("序列完成");
      } else {
        setNotice(`自动播放 · ${nextIndex + 1} / ${letterSequence.length}`);
      }
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isLetterRunning, letterIndex, letterSequence.length, mode]);

  const startTimer = () => {
    const requestedDuration = clampDuration(Number(secondsInput));
    const startingValue = remaining <= 0 || (remaining === duration && requestedDuration !== duration)
      ? requestedDuration
      : remaining;
    runIdRef.current += 1;
    deadlineRef.current = Date.now() + startingValue * 1000;
    setDuration(requestedDuration);
    setSecondsInput(String(requestedDuration));
    setRemaining(startingValue);
    setIsComplete(false);
    setIsRunning(true);
    setNotice("倒计时进行中");
  };

  const pauseTimer = () => {
    const nextRemaining = Math.max(0, (deadlineRef.current - Date.now()) / 1000);
    runIdRef.current += 1;
    deadlineRef.current = 0;
    setRemaining(nextRemaining);
    setIsRunning(false);
    setNotice("已暂停");
  };

  const startLetters = () => {
    if (letterSequence.length <= 1) {
      setIsLetterComplete(true);
      setNotice("序列只有一个字母");
      return;
    }

    if (isLetterComplete || letterIndex >= letterSequence.length - 1) {
      setLetterIndex(0);
      setSceneKey((current) => current + 1);
    }
    setIsLetterComplete(false);
    setIsLetterRunning(true);
    setNotice("每秒自动变换一个字母");
  };

  const pauseLetters = () => {
    setIsLetterRunning(false);
    setNotice("字母播放已暂停");
  };

  const resetTimer = () => {
    runIdRef.current += 1;
    deadlineRef.current = 0;
    setIsRunning(false);
    setIsComplete(false);
    setIsLetterRunning(false);
    if (mode === "letters") {
      setLetterIndex(0);
      setIsLetterComplete(letterSequence.length <= 1);
      setNotice("字母序列已重置");
    } else {
      setRemaining(duration);
      setNotice("倒计时已重置");
    }
    setSceneKey((current) => current + 1);
  };

  const updateEffect = (key: keyof TraEffects, value: number) => {
    setEffects((current) => normalizeTraEffects({ ...current, [key]: value }));
  };

  const applyDuration = (rawValue: number) => {
    const nextDuration = clampDuration(rawValue);
    runIdRef.current += 1;
    deadlineRef.current = 0;
    setDuration(nextDuration);
    setSecondsInput(String(nextDuration));
    setRemaining(nextDuration);
    setIsRunning(false);
    setIsComplete(false);
    setNotice("时间已更新");
    setSceneKey((current) => current + 1);
  };

  const updateLetterSequence = (value: string) => {
    const nextSequence = normalizeLetters(value);
    setLetterInput(nextSequence);
    setIsLetterRunning(false);
    if (!nextSequence) {
      return;
    }
    setLetterSequence(nextSequence);
    setLetterIndex(0);
    setIsLetterComplete(nextSequence.length <= 1);
    setNotice(`${nextSequence.length} 个字母已就绪`);
    setSceneKey((current) => current + 1);
  };

  const commitLetterSequence = () => {
    if (letterInput) {
      return;
    }
    setLetterInput(letterSequence);
    setNotice("至少输入一个 A–Z 字母");
  };

  const handleModeChange = (nextMode: TimerMode) => {
    if (nextMode === mode) {
      return;
    }
    if (isRunning) {
      pauseTimer();
    }
    setIsLetterRunning(false);
    setMode(nextMode);
    setIsComplete(false);
    setNotice(nextMode === "letters" ? "输入字母，点击播放" : "设定时间，然后开始");
    setSceneKey((current) => current + 1);
  };

  const togglePlayback = () => {
    if (mode === "letters") {
      if (isLetterRunning) {
        pauseLetters();
      } else {
        startLetters();
      }
      return;
    }

    if (isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        (event.target.tagName === "INPUT" || event.target.tagName === "BUTTON" || event.target.tagName === "A")
      ) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        togglePlayback();
      }
      if (event.key.toLowerCase() === "r") {
        resetTimer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const statusLabel = stageComplete
    ? "COMPLETE"
    : activeRunning
      ? "RUNNING"
      : mode === "letters"
        ? letterIndex > 0
          ? "PAUSED"
          : "READY"
        : remaining < duration
        ? "PAUSED"
        : "READY";

  return (
    <div className="tra-app">
      <header className="tra-header">
        <div className="tra-brand" aria-label="TRA countdown studio">
          <span className="tra-brand-mark">TRA</span>
          <span className="tra-brand-copy">TIME / RELATIONAL ATMOSPHERE</span>
        </div>
        <div className="tra-header-actions">
          <span className={`tra-status ${activeRunning ? "is-live" : ""}`}>
            <span className="tra-status-dot" aria-hidden="true" />
            {statusLabel}
          </span>
          <a
            className="tra-icon-link"
            href="https://github.com/holynova/hotpot-timer"
            target="_blank"
            rel="noreferrer"
            aria-label="打开 GitHub 项目"
            title="GitHub"
            data-umami-event="github-repo"
          >
            <Github size={16} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main className="tra-stage" aria-label="Three.js 3D 倒计时舞台">
        <section
          className={`tra-visual-shell ${stageComplete ? "is-complete" : ""}`}
          role={mode === "letters" ? "group" : "timer"}
          aria-label={mode === "letters" ? `字母序列 ${letterSequence}，当前字母 ${activeLetter}` : "3D 倒计时舞台"}
        >
          <TraCountdownCanvas
            key={sceneKey}
            glyph={mode === "letters" ? activeLetter : String(visualValue)}
            isRunning={activeRunning}
            isComplete={stageComplete}
            ariaLabel={mode === "letters" ? `Three.js 3D 字母模型 ${activeLetter}` : `Three.js 3D 倒计时数字 ${visualValue}`}
            effects={effects}
          />

          <div className="tra-tool-strip">
            <div className="tra-mode-switch" role="group" aria-label="选择模式">
              <button
                type="button"
                aria-pressed={mode === "countdown"}
                className={mode === "countdown" ? "is-selected" : ""}
                onClick={() => handleModeChange("countdown")}
              >
                TIMER
              </button>
              <button
                type="button"
                aria-pressed={mode === "letters"}
                className={mode === "letters" ? "is-selected" : ""}
                onClick={() => handleModeChange("letters")}
              >
                A—Z
              </button>
            </div>

            {mode === "countdown" ? (
              <div className="tra-compact-setting">
                <label>
                  <span className="tra-sr-only">倒计时秒数</span>
                  <input
                    type="number"
                    min={1}
                    max={3600}
                    inputMode="numeric"
                    value={secondsInput}
                    onChange={(event) => setSecondsInput(event.target.value)}
                    onBlur={() => applyDuration(Number(secondsInput))}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        applyDuration(Number(secondsInput));
                        event.currentTarget.blur();
                      }
                    }}
                  />
                  <span>SEC</span>
                </label>
                <div className="tra-presets" aria-label="预设时长">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      className={duration === preset ? "is-selected" : ""}
                      onClick={() => applyDuration(preset)}
                    >
                      {formatPreset(preset)}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <label className="tra-letter-input">
                <span className="tra-sr-only">输入英文字母序列</span>
                <input
                  type="text"
                  maxLength={MAX_LETTERS}
                  autoCapitalize="characters"
                  autoComplete="off"
                  spellCheck={false}
                  value={letterInput}
                  onChange={(event) => updateLetterSequence(event.target.value)}
                  onBlur={commitLetterSequence}
                />
                <span>{letterInput.length}/{MAX_LETTERS}</span>
              </label>
            )}
          </div>

          <details className="tra-effects-panel">
            <summary aria-label="调整动画效果" title="动画效果">
              <SlidersHorizontal size={16} strokeWidth={1.7} aria-hidden="true" />
              <span>FX</span>
            </summary>
            <div className="tra-effects-content">
              <div className="tra-effects-header">
                <span>动画效果</span>
                <button
                  type="button"
                  onClick={() => setEffects({ ...DEFAULT_TRA_EFFECTS })}
                  aria-label="恢复默认动画效果"
                  title="恢复默认"
                >
                  <RotateCcw size={14} strokeWidth={1.7} aria-hidden="true" />
                </button>
              </div>
              <div className="tra-effect-list">
                {EFFECT_CONTROLS.map((control) => (
                  <label className="tra-effect-control" key={control.key}>
                    <span>{control.label}</span>
                    <output>{control.format(effects[control.key])}</output>
                    <input
                      type="range"
                      min={control.minimum}
                      max={control.maximum}
                      step={control.step}
                      value={effects[control.key]}
                      aria-label={control.label}
                      onChange={(event) => updateEffect(control.key, Number(event.target.value))}
                    />
                  </label>
                ))}
              </div>
              <p>设置自动保存在本机 · 慢放不改变计时</p>
            </div>
          </details>

          {mode === "letters" ? (
            <div className="tra-stage-word is-sequence" aria-hidden="true">
              {letterSequence.split("").map((letter, index) => (
                <span
                  className={`${index === letterIndex ? "is-current" : ""} ${index < letterIndex ? "is-past" : ""}`}
                  key={`${letter}-${index}`}
                >
                  {letter}
                </span>
              ))}
            </div>
          ) : (
            <div className="tra-stage-word" key={visualWord} aria-hidden="true">
              <span>{visualWord.slice(0, 1)}</span>{visualWord.slice(1)}
            </div>
          )}

          <div className="tra-playback" role="group" aria-label={mode === "letters" ? "字母播放控制" : "倒计时控制"}>
            <button
              className="tra-play-button"
              type="button"
              onClick={togglePlayback}
              aria-label={activeRunning ? "暂停" : stageComplete ? "重新播放" : "开始"}
              title={activeRunning ? "暂停" : stageComplete ? "重新播放" : "开始"}
              data-umami-event={mode === "letters" ? "letter-autoplay-toggle" : "countdown-toggle"}
            >
              {activeRunning
                ? <Pause size={19} strokeWidth={1.8} aria-hidden="true" />
                : <Play size={19} strokeWidth={1.8} aria-hidden="true" />}
            </button>
            <button type="button" onClick={resetTimer} aria-label="重置" title="重置">
              <RotateCcw size={17} strokeWidth={1.7} aria-hidden="true" />
            </button>
            {mode === "countdown" && (
              <button
                type="button"
                className={soundEnabled ? "is-active" : ""}
                onClick={() => setSoundEnabled((enabled) => !enabled)}
                aria-label={soundEnabled ? "关闭声音" : "打开声音"}
                title={soundEnabled ? "关闭声音" : "打开声音"}
                aria-pressed={soundEnabled}
              >
                {soundEnabled
                  ? <Volume2 size={17} strokeWidth={1.7} aria-hidden="true" />
                  : <VolumeX size={17} strokeWidth={1.7} aria-hidden="true" />}
              </button>
            )}
          </div>

          <div className="tra-stage-caption" aria-live="polite">
            <span className="tra-caption-dot" aria-hidden="true" />
            <span>{notice}</span>
          </div>
          <div className="tra-stage-time">
            {mode === "letters" ? (
              <>
                <span>{String(letterIndex + 1).padStart(2, "0")} / {String(letterSequence.length).padStart(2, "0")}</span>
                <small>1 SEC / LETTER</small>
              </>
            ) : (
              <>
                <span>{formatTime(remaining)}</span>
                <small>REMAINING</small>
              </>
            )}
          </div>
          <span className="tra-sr-only" aria-live="polite" aria-atomic="true">
            {mode === "letters"
              ? `当前为第 ${letterIndex + 1} 个字母 ${activeLetter}，共 ${letterSequence.length} 个字母`
              : isComplete
                ? "倒计时已结束"
                : `剩余 ${Math.ceil(Math.max(0, remaining))} 秒`}
          </span>
        </section>
      </main>
    </div>
  );
};

export default TimerPage;
