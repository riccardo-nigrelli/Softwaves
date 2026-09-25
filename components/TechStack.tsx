"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TECH, TECH_CATS } from "@/lib/content";

export default function TechStack() {
  const [tab, setTab] = useState("Tutte");
  const items = tab === "Tutte" ? TECH : TECH.filter((t) => t.cat === tab);

  return (
    <div className="tech">
      <div role="tablist" aria-label="Categorie tecnologie" className="tech-tabs">
        {TECH_CATS.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={tab === c} className="tech-tab" onClick={() => setTab(c)}>
            {tab === c && <motion.span layoutId="tech-pill" className="tech-pill" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />}
            <span className="tech-tab-label">
              {c}
              <span>{c === "Tutte" ? TECH.length : TECH.filter((t) => t.cat === c).length}</span>
            </span>
          </button>
        ))}
      </div>
      <motion.ul layout className="tech-list">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((it) => (
            <motion.li
              layout
              key={it.name}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <span className="tech-ico">
                <img src={it.icon} alt="" width={28} height={28} loading="lazy" />
              </span>
              <span className="lbl">
                <span className="tech-name">{it.name}</span>
                <span className="tech-cat">{it.cat}</span>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
