import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import TraCountdownCanvas from "./component/TraCountdownCanvas";
import "./TimerPage.css";

const PRESETS = [
  { label: "10 SEC", value: 10 },
  { label: "30 SEC", value: 30 },
  { label: "01 MIN", value: 60 },
  { label: "05 MIN", value: 300 },
];

const NUMBER_WORDS: Record<number, string> = {
  0: "ZERO",
  1: "ONE",
  2: "TWO",
  3: "THREE",
  4: "FOUR",
  5: "FIVE",
  6: "SIX",
  7: "SEVEN",
  8: "EIGHT",
  9: "NINE",
  10: "TEN",
};

const MAX_LETTERS = 26;

type TimerMode = "countdown" | "letters";

const normalizeLetters = (value: string) => value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, MAX_LETTERS);

const getStoredLetters = () => {
  try {
    const stored = normalizeLetters(window.localStorage.getItem("tra-letter-sequence") ?? "");
    return stored || "TRA";
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

const formatTime = (seconds: number) => {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds - minutes * 60;
  const wholeSeconds = Math.floor(remainder);
  const tenths = Math.floor((remainder - wholeSeconds) * 10);

  if (minutes > 0) {
    return `${String(minutes).padStart(2, "0")}:${String(wholeSeconds).padStart(2, "0")}`;
  }

  return `00:${String(wholeSeconds).padStart(2, "0")}.${tenths}`;
};

const formatDurationLabel = (seconds: number) => {
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return remainder ? `${minutes}M ${remainder}S` : `${minutes} MIN`;
  }

  return `${seconds} SEC`;
};

const clampDuration = (value: number) =>
  Math.min(3600, Math.max(1, Math.round(Number.isFinite(value) ? value : 10)));

const TimerPage: React.FC = () => {
  const initialDuration = useMemo(() => getStoredDuration(), []);
  const initialLetters = useMemo(() => getStoredLetters(), []);
  const [duration, setDuration] = useState(initialDuration);
  const [secondsInput, setSecondsInput] = useState(String(initialDuration));
  const [remaining, setRemaining] = useState(initialDuration);
  const [mode, setMode] = useState<TimerMode>("countdown");
  const [letterInput, setLetterInput] = useState(initialLetters);
  const [letterSequence, setLetterSequence] = useState(initialLetters);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isLetterComplete, setIsLetterComplete] = useState(initialLetters.length <= 1);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [displayedWordValue, setDisplayedWordValue] = useState(initialDuration);
  const [sceneKey, setSceneKey] = useState(0);
  const [notice, setNotice] = useState("待命 · 设定一个时长开始");
  const letterInputRef = useRef(initialLetters);
  const deadlineRef = useRef(0);
  const runIdRef = useRef(0);

  const visualValue = useMemo(() => {
    const rounded = Math.ceil(Math.max(0, remaining));
    return duration > 99 && rounded > 99 ? Math.ceil(rounded / 60) : rounded;
  }, [duration, remaining]);

  useEffect(() => {
    if (!isRunning) {
      setDisplayedWordValue(visualValue);
      return undefined;
    }

    const wordTimer = window.setTimeout(() => setDisplayedWordValue(visualValue), 520);
    return () => window.clearTimeout(wordTimer);
  }, [isRunning, visualValue]);

  const visualWord = duration > 99 && Math.ceil(Math.max(0, remaining)) > 99
    ? "MINUTES"
    : NUMBER_WORDS[displayedWordValue] ?? "SECONDS";
  const activeLetter = letterSequence[letterIndex] ?? letterSequence[0] ?? "A";
  const stageComplete = mode === "letters" ? isLetterComplete : isComplete;
  const statusLabel = mode === "letters"
    ? isLetterComplete
      ? "SEQUENCE / COMPLETE"
      : letterIndex > 0
        ? "LETTER / ACTIVE"
        : "LETTER / READY"
    : isComplete
      ? "CYCLE / COMPLETE"
      : isRunning
        ? "LIVE / RUNNING"
        : remaining < duration
          ? "PAUSED / HOLD"
          : "READY / SET";
  const isStatusLive = mode === "letters"
    ? letterIndex > 0 && !isLetterComplete
    : isRunning;

  useEffect(() => {
    try {
      window.localStorage.setItem("tra-countdown-duration", String(duration));
    } catch {
      // Local persistence is a convenience, not a requirement for the timer.
    }
  }, [duration]);

  useEffect(() => {
    try {
      window.localStorage.setItem("tra-letter-sequence", letterSequence);
    } catch {
      // Local persistence is a convenience, not a requirement for the letter study.
    }
  }, [letterSequence]);

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
        setNotice("时间到 · 这一刻已经发生");

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        (event.target.tagName === "INPUT" ||
          event.target.tagName === "BUTTON" ||
          event.target.tagName === "A" ||
          event.target.isContentEditable)
      ) {
        return;
      }

      if (mode === "countdown" && event.code === "Space") {
        event.preventDefault();
        if (isRunning) {
          pauseTimer();
        } else {
          startTimer();
        }
      }

      if (event.key.toLowerCase() === "r") {
        resetTimer();
      }

      if (mode === "letters" && event.key === "ArrowRight") {
        event.preventDefault();
        if (isLetterComplete) {
          resetLetterSequence("序列重播 · 变换第一个字母");
        } else {
          transformNextLetter();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const startTimer = () => {
    const startingValue = remaining <= 0 ? duration : remaining;
    runIdRef.current += 1;
    deadlineRef.current = Date.now() + startingValue * 1000;
    setRemaining(startingValue);
    setIsComplete(false);
    setIsRunning(true);
    setNotice("倒计时进行中 · 保持专注");
  };

  const pauseTimer = () => {
    const nextRemaining = Math.max(0, (deadlineRef.current - Date.now()) / 1000);
    runIdRef.current += 1;
    deadlineRef.current = 0;
    setRemaining(nextRemaining);
    setIsRunning(false);
    setNotice("已暂停 · 按空格继续");
  };

  const resetLetterSequence = (noticeText = "字母序列已重置 · 变换第一个字母") => {
    runIdRef.current += 1;
    setLetterIndex(0);
    setIsLetterComplete(letterSequence.length <= 1);
    setNotice(noticeText);
    setSceneKey((current) => current + 1);
  };

  const applyLetterSequence = () => {
    const nextSequence = normalizeLetters(letterInputRef.current);
    if (!nextSequence) {
      letterInputRef.current = letterSequence;
      setLetterInput(letterSequence);
      setNotice("请输入至少一个 A–Z 字母");
      return;
    }

    runIdRef.current += 1;
    letterInputRef.current = nextSequence;
    setLetterInput(nextSequence);
    setLetterSequence(nextSequence);
    setLetterIndex(0);
    setIsLetterComplete(nextSequence.length <= 1);
    setNotice(`已载入 · ${nextSequence.length} 个字母等待变换`);
    setSceneKey((current) => current + 1);
  };

  const transformNextLetter = () => {
    if (letterSequence.length <= 1) {
      resetLetterSequence("序列只有一个字母 · 已重新显现");
      return;
    }

    const nextIndex = letterIndex + 1;
    if (nextIndex >= letterSequence.length) {
      resetLetterSequence("序列完成 · 再次开始逐字母变换");
      return;
    }

    setLetterIndex(nextIndex);
    setIsLetterComplete(nextIndex === letterSequence.length - 1);
    setNotice(
      nextIndex === letterSequence.length - 1
        ? "序列完成 · 最后一个字母已到达"
        : `正在变换 · 第 ${nextIndex + 1} / ${letterSequence.length} 个字母`,
    );
  };

  const handleModeChange = (nextMode: TimerMode) => {
    if (nextMode === mode) {
      return;
    }

    if (isRunning) {
      pauseTimer();
    }

    setMode(nextMode);
    setIsComplete(false);
    setNotice(nextMode === "letters" ? "字母模式 · 每次变换一个字母" : "倒计时模式 · 设定一个时长开始");
    setSceneKey((current) => current + 1);
  };

  const resetTimer = () => {
    runIdRef.current += 1;
    deadlineRef.current = 0;
    setRemaining(duration);
    setIsRunning(false);
    setIsComplete(false);
    if (mode === "letters") {
      setLetterIndex(0);
      setIsLetterComplete(letterSequence.length <= 1);
    }
    setNotice(mode === "letters" ? "字母序列已重置 · 变换第一个字母" : "待命 · 设定一个时长开始");
    setSceneKey((current) => current + 1);
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
    setNotice("已更新 · 准备就绪");
    setSceneKey((current) => current + 1);
  };

  const commitInput = () => {
    applyDuration(Number(secondsInput));
  };

  const replayTimer = () => {
    runIdRef.current += 1;
    deadlineRef.current = Date.now() + duration * 1000;
    setRemaining(duration);
    setIsComplete(false);
    setIsRunning(true);
    setNotice("重新开始 · 让这一刻展开");
    setSceneKey((current) => current + 1);
  };

  return (
    <div className="tra-app">
      <header className="tra-header">
        <div className="tra-brand" aria-label="TRA countdown studio">
          <span className="tra-brand-mark">TRA</span>
          <span className="tra-brand-rule" aria-hidden="true" />
          <span className="tra-brand-copy">TIME / RELATIONAL ATMOSPHERE</span>
        </div>

        <div className="tra-header-actions">
          <span className={`tra-status ${isStatusLive ? "is-live" : ""}`}>
            <span className="tra-status-dot" aria-hidden="true" />
            {statusLabel}
          </span>
          <a
            className="tra-header-github"
            href="https://github.com/holynova/hotpot-timer"
            target="_blank"
            rel="noreferrer"
            data-umami-event="github-repo"
          >
            <Github size={14} strokeWidth={1.6} aria-hidden="true" />
            GITHUB
          </a>
          <button className="tra-header-reset" type="button" onClick={resetTimer}>
            <RotateCcw size={14} strokeWidth={1.6} aria-hidden="true" />
            RESET
          </button>
        </div>
      </header>

      <div className="tra-workspace">
        <aside className="tra-controls" aria-label="倒计时设置">
          <div className="tra-intro">
            <h1>
              {mode === "letters" ? (
                <>
                  Give it
                  <br />
                  <span>a shape.</span>
                </>
              ) : (
                <>
                  Give it
                  <br />
                  <span>a second.</span>
                </>
              )}
            </h1>
            <p className="tra-intro-copy">
              {mode === "letters"
                ? "输入一串 A–Z 字母，让每一次变换都成为一个独立的瞬间。"
                : "一个会呼吸的倒计时。让时间从光里出现，也在光里结束。"}
            </p>
          </div>

          <div className="tra-mode-switch" role="group" aria-label="选择工具模式">
            <button
              type="button"
              aria-pressed={mode === "countdown"}
              className={mode === "countdown" ? "is-selected" : ""}
              data-umami-event="countdown-mode"
              onClick={() => handleModeChange("countdown")}
            >
              <span>COUNTDOWN</span>
              <small>倒计时</small>
            </button>
            <button
              type="button"
              aria-pressed={mode === "letters"}
              className={mode === "letters" ? "is-selected" : ""}
              data-umami-event="alphabet-mode"
              onClick={() => handleModeChange("letters")}
            >
              <span>ALPHABET</span>
              <small>字母变换</small>
            </button>
          </div>

          {mode === "countdown" ? (
            <>
              <div className="tra-control-group tra-duration-group">
                <div className="tra-field-label">
                  <span>SET DURATION</span>
                  <span className="tra-field-suffix">01 — 3600 SEC</span>
                </div>
                <label className="tra-duration-input">
                  <input
                    type="number"
                    min={1}
                    max={3600}
                    inputMode="numeric"
                    aria-label="倒计时秒数"
                    value={secondsInput}
                    onChange={(event) => setSecondsInput(event.target.value)}
                    onBlur={commitInput}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        commitInput();
                        event.currentTarget.blur();
                      }
                    }}
                  />
                  <span>SEC</span>
                </label>
                <p className="tra-duration-hint">当前时长 · {formatDurationLabel(duration)}</p>
              </div>

              <div className="tra-control-group">
                <div className="tra-field-label">
                  <span>QUICK SET</span>
                  <span className="tra-field-suffix">PRESETS</span>
                </div>
                <div className="tra-presets" role="list" aria-label="预设时长">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      className={duration === preset.value ? "is-selected" : ""}
                      onClick={() => applyDuration(preset.value)}
                    >
                      <span>{preset.label}</span>
                      <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="tra-control-group tra-letter-group">
                <div className="tra-field-label">
                  <span>SET SEQUENCE</span>
                  <span className="tra-field-suffix">01 — {MAX_LETTERS} LETTERS</span>
                </div>
                <label className="tra-sequence-input">
                  <input
                    type="text"
                    maxLength={MAX_LETTERS}
                    autoCapitalize="characters"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="输入英文字母序列"
                    value={letterInput}
                    onChange={(event) => {
                      const nextValue = normalizeLetters(event.target.value);
                      letterInputRef.current = nextValue;
                      setLetterInput(nextValue);
                      if (nextValue) {
                        runIdRef.current += 1;
                        setLetterSequence(nextValue);
                        setLetterIndex(0);
                        setIsLetterComplete(nextValue.length <= 1);
                        setNotice(`已载入 · ${nextValue.length} 个字母等待变换`);
                        setSceneKey((current) => current + 1);
                      }
                    }}
                    onBlur={applyLetterSequence}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        applyLetterSequence();
                        event.currentTarget.blur();
                      }
                    }}
                  />
                  <span>{letterInput.length}/{MAX_LETTERS}</span>
                </label>
                <p className="tra-duration-hint">当前序列 · {letterSequence}</p>
              </div>

              <div className="tra-control-group tra-letter-steps-group">
                <div className="tra-field-label">
                  <span>LETTER BY LETTER</span>
                  <span className="tra-field-suffix">MANUAL</span>
                </div>
                <div className="tra-letter-steps" role="list" aria-label="字母变换顺序">
                  {letterSequence.split("").map((letter, index) => (
                    <div
                      className={`tra-letter-step ${index === letterIndex ? "is-current" : ""} ${index < letterIndex ? "is-past" : ""}`}
                      key={`${letter}-${index}`}
                      role="listitem"
                      aria-current={index === letterIndex ? "step" : undefined}
                    >
                      <small>{String(index + 1).padStart(2, "0")}</small>
                      <strong>{letter}</strong>
                    </div>
                  ))}
                </div>
                <p className="tra-duration-hint">每次点击只变换一个字母 · {letterIndex + 1} / {letterSequence.length}</p>
              </div>
            </>
          )}

          <div className="tra-actions">
            {mode === "letters" ? (
              <button
                className="tra-primary-action"
                type="button"
                data-umami-event={isLetterComplete ? "letter-sequence-replay" : "letter-transform"}
                onClick={isLetterComplete ? () => resetLetterSequence("序列重播 · 变换第一个字母") : transformNextLetter}
              >
                {isLetterComplete ? (
                  <RotateCcw size={17} strokeWidth={1.8} aria-hidden="true" />
                ) : (
                  <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
                )}
                {isLetterComplete ? "REPLAY SEQUENCE" : "TRANSFORM NEXT LETTER"}
              </button>
            ) : isComplete ? (
              <button className="tra-primary-action" type="button" data-umami-event="countdown-replay" onClick={replayTimer}>
                <RotateCcw size={17} strokeWidth={1.8} aria-hidden="true" />
                REPLAY MOMENT
              </button>
            ) : (
              <button
                className="tra-primary-action"
                type="button"
                data-umami-event={isRunning ? "countdown-pause" : "countdown-start"}
                onClick={isRunning ? pauseTimer : startTimer}
              >
                {isRunning ? (
                  <Pause size={17} strokeWidth={1.8} aria-hidden="true" />
                ) : (
                  <Play size={17} strokeWidth={1.8} aria-hidden="true" />
                )}
                {isRunning ? "PAUSE COUNTDOWN" : remaining < duration ? "RESUME COUNTDOWN" : "START COUNTDOWN"}
              </button>
            )}
            <div className="tra-secondary-actions">
              <button className="tra-secondary-action" type="button" onClick={resetTimer}>
                <RotateCcw size={15} strokeWidth={1.6} aria-hidden="true" />
                RESET
              </button>
              <button
                className={`tra-secondary-action tra-sound-action ${soundEnabled ? "is-on" : ""}`}
                type="button"
                onClick={() => setSoundEnabled((enabled) => !enabled)}
                aria-pressed={soundEnabled}
              >
                {soundEnabled ? (
                  <Volume2 size={15} strokeWidth={1.6} aria-hidden="true" />
                ) : (
                  <VolumeX size={15} strokeWidth={1.6} aria-hidden="true" />
                )}
                {soundEnabled ? "SOUND ON" : "SOUND OFF"}
              </button>
            </div>
          </div>

          <div className="tra-controls-footer">
            <span>{notice}</span>
            <span className="tra-shortcuts">{mode === "letters" ? "ENTER / →" : "SPACE / R"}</span>
          </div>
        </aside>

        <main className="tra-stage" aria-label="Three.js 3D 倒计时舞台">
          <div className="tra-stage-meta">
            <span>{mode === "letters" ? "ALPHABET / LETTER STUDY" : "01 / LIVE COUNTDOWN"}</span>
            <span>{mode === "letters" ? "A—Z / ONE BY ONE" : "INSPIRED BY TRA STUDY"}</span>
          </div>

          <section
            className={`tra-visual-shell ${stageComplete ? "is-complete" : ""}`}
            role={mode === "letters" ? "group" : "timer"}
            aria-live="off"
            aria-label={mode === "letters" ? `字母序列 ${letterSequence}，当前第 ${letterIndex + 1} 个字母 ${activeLetter}` : "3D 倒计时舞台"}
          >
            <TraCountdownCanvas
              key={sceneKey}
              glyph={mode === "letters" ? activeLetter : String(visualValue)}
              isRunning={isRunning}
              isComplete={stageComplete}
              ariaLabel={mode === "letters" ? `Three.js 3D 字母模型 ${activeLetter}` : `Three.js 3D 倒计时数字 ${visualValue}`}
            />
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
                <span>{visualWord.slice(0, 1)}</span>
                {visualWord.slice(1)}
              </div>
            )}
            <div className="tra-stage-cross tra-stage-cross-top" aria-hidden="true" />
            <div className="tra-stage-cross tra-stage-cross-bottom" aria-hidden="true" />
            <div className="tra-stage-caption">
              <span className="tra-caption-dot" aria-hidden="true" />
              <span>
                {mode === "letters"
                  ? isLetterComplete
                    ? "SEQUENCE HAS ARRIVED"
                    : letterIndex === 0
                      ? "FIRST LETTER IS READY"
                      : "NEXT LETTER IS LIVE"
                  : isComplete
                    ? "TIME HAS ARRIVED"
                    : isRunning
                      ? "THE MOMENT IS LIVE"
                      : "THE STAGE IS READY"}
              </span>
            </div>
            <div className="tra-stage-time">
              {mode === "letters" ? (
                <>
                  <span>{String(letterIndex + 1).padStart(2, "0")} / {String(letterSequence.length).padStart(2, "0")}</span>
                  <small>LETTER POSITION</small>
                </>
              ) : (
                <>
                  <span>{formatTime(remaining)}</span>
                  <small>REMAINING</small>
                </>
              )}
            </div>
            <span id="tra-timer-announcement" className="tra-sr-timer" aria-live="polite" aria-atomic="true">
              {mode === "letters"
                ? `当前为第 ${letterIndex + 1} 个字母 ${activeLetter}，共 ${letterSequence.length} 个字母`
                : isComplete
                  ? "倒计时已结束"
                  : `剩余 ${Math.ceil(Math.max(0, remaining))} 秒`}
            </span>
          </section>

          <div className="tra-stage-footer">
            <span>MOVE YOUR CURSOR THROUGH THE FIELD</span>
            <span>WEBGL / THREE.JS / 60 FPS</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TimerPage;
