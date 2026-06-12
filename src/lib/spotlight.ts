import type { MouseEvent } from "react";

// Feeds the cursor position into CSS vars consumed by the .spotlight-card glow.
export const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};
