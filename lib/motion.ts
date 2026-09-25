// Fade-up the first time an element scrolls into view. Spread onto any motion.* element.
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});
