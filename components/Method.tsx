"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { STEPS } from "@/lib/content";

const STEP_MS = 6500;
const EASE = [0.2, 0.7, 0.2, 1] as const;
const num = (i: number) => String(i + 1).padStart(2, "0");

export default function Method() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const running = auto && !reduced;

  // Auto-advance until the user picks a phase.
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), STEP_MS);
    return () => clearTimeout(t);
  }, [running, step]);

  const cur = STEPS[step];

  return (
    <>
      <div role="tablist" aria-label="Fasi del metodo" className="steps">
        {STEPS.map((st, i) => (
          <button
            key={st.title}
            type="button"
            role="tab"
            id={`step-tab-${i}`}
            aria-controls="step-panel"
            aria-selected={i === step}
            className={"step" + (i <= step ? " done" : "")}
            onClick={() => {
              setAuto(false);
              setStep(i);
            }}
          >
            <span className="step-top">
              <span className="step-num">{num(i)}</span>
              <span className="step-title">{st.title}</span>
            </span>
            <span className="step-bar">
              <motion.span
                key={i === step && running ? `run-${step}` : "still"}
                className="step-fill"
                initial={{ width: i === step && running ? "0%" : i <= step ? "100%" : "0%" }}
                animate={{ width: i <= step ? "100%" : "0%" }}
                transition={i === step && running ? { duration: STEP_MS / 1000, ease: "linear" } : { duration: 0.3 }}
              />
            </span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id="step-panel" aria-labelledby={`step-tab-${step}`} className="step-panel">
        <motion.div
          key={`copy-${step}`}
          className="panel-copy"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="panel-kicker">Fase {num(step)} di 03</span>
          <h3>{cur.title}</h3>
          <p className="panel-desc">{cur.desc}</p>
          <p className="panel-out">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#1D1A38" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
            {cur.out}
          </p>
        </motion.div>
        <div className="panel-list">
          <span className="panel-list-title">Cosa succede</span>
          {cur.items.map((t, k) => (
            <motion.div
              key={`${step}-${k}`}
              className="panel-item"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.12 + k * 0.1 }}
            >
              <span className="panel-item-ico">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" /></svg>
              </span>
              <span className="panel-item-text">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
