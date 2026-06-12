import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: string;
  className?: string;
};

// Animates the numeric part of a stat string (e.g. "10,000+", "Top 25")
// while leaving any prefix/suffix text untouched.
const CountUp = ({ value, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/[\d,]+(?:\.\d+)?/);
    if (!inView || !el || !match || reducedMotion) return;

    const target = parseFloat(match[0].replace(/,/g, ""));
    const hasCommas = match[0].includes(",");
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = Math.round(v);
        el.textContent = prefix + (hasCommas ? n.toLocaleString("en-US") : String(n)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};

export default CountUp;
