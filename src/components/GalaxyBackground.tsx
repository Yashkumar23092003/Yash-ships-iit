import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number; // depth: 0.25 (far) -> 1 (near)
  r: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  ox: number; // mouse-displacement offset
  oy: number;
  color: "white" | "lime" | "blue";
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // 1 -> 0
};

const STAR_COLORS = {
  white: (a: number) => `rgba(255, 255, 255, ${a})`,
  lime: (a: number) => `hsla(67, 100%, 70%, ${a})`,
  blue: (a: number) => `hsla(210, 100%, 82%, ${a})`,
};

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let rafId = 0;
    let nextShootingStarAt = performance.now() + 3000 + Math.random() * 4000;
    const mouse = { x: -9999, y: -9999 };

    const pickColor = (): Star["color"] => {
      const roll = Math.random();
      if (roll < 0.1) return "lime";
      if (roll < 0.2) return "blue";
      return "white";
    };

    const initStars = () => {
      const density = coarsePointer ? 9000 : 4500;
      const count = Math.min(420, Math.max(110, Math.floor((width * height) / density)));
      stars = Array.from({ length: count }, () => {
        const z = 0.25 + Math.random() * 0.75;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: (0.4 + Math.random() * 1.1) * z,
          baseAlpha: 0.25 + Math.random() * 0.6,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.4 + Math.random() * 1.2,
          ox: 0,
          oy: 0,
          color: pickColor(),
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const drawNebula = (t: number) => {
      // Two very faint drifting glows so the dark field reads as a galaxy, not a void.
      const cx1 = width * (0.25 + 0.05 * Math.sin(t * 0.00005));
      const cy1 = height * (0.3 + 0.06 * Math.cos(t * 0.00004));
      const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, Math.max(width, height) * 0.5);
      g1.addColorStop(0, "hsla(67, 100%, 63%, 0.045)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const cx2 = width * (0.78 + 0.04 * Math.cos(t * 0.00006));
      const cy2 = height * (0.7 + 0.05 * Math.sin(t * 0.00005));
      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, Math.max(width, height) * 0.45);
      g2.addColorStop(0, "hsla(220, 60%, 40%, 0.05)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = (t: number, animateField: boolean) => {
      const scrollY = window.scrollY;
      const parallaxX = (mouse.x - width / 2) || 0;
      const parallaxY = (mouse.y - height / 2) || 0;

      for (const star of stars) {
        if (animateField) {
          // Slow universal drift, scaled by depth.
          star.x += 0.012 * star.z;
          star.y -= 0.008 * star.z;

          // Cursor gravity: nearby stars get nudged away, then ease back.
          const sx = star.x + star.ox;
          const sy = ((star.y - scrollY * star.z * 0.18) % height + height) % height + star.oy;
          const dx = sx - mouse.x;
          const dy = sy - mouse.y;
          const dist = Math.hypot(dx, dy);
          const radius = 160;
          if (dist < radius && dist > 0.001) {
            const force = (1 - dist / radius) ** 2 * 2.4 * star.z;
            star.ox += (dx / dist) * force;
            star.oy += (dy / dist) * force;
          }
          star.ox *= 0.92;
          star.oy *= 0.92;
        }

        const wrappedY = ((star.y - scrollY * star.z * 0.18) % height + height) % height;
        const px = star.x + star.ox + parallaxX * star.z * -0.012;
        const py = wrappedY + star.oy + parallaxY * star.z * -0.012;
        const x = ((px % width) + width) % width;

        const twinkle = animateField
          ? 0.65 + 0.35 * Math.sin(t * 0.001 * star.twinkleSpeed + star.twinklePhase)
          : 1;
        const alpha = star.baseAlpha * twinkle;

        ctx.beginPath();
        ctx.arc(x, py, star.r, 0, Math.PI * 2);
        ctx.fillStyle = STAR_COLORS[star.color](alpha);
        if (star.color === "lime" && star.r > 0.9) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "hsla(67, 100%, 63%, 0.8)";
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const updateShootingStars = (now: number) => {
      if (now > nextShootingStarAt && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.35,
          vx: 7 + Math.random() * 5,
          vy: 3 + Math.random() * 3,
          life: 1,
        });
        nextShootingStarAt = now + 5000 + Math.random() * 7000;
      }

      shootingStars = shootingStars.filter((s) => s.life > 0);
      for (const s of shootingStars) {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.016;

        const tailX = s.x - s.vx * 9;
        const tailY = s.y - s.vy * 9;
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.85 * s.life})`);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
    };

    const frame = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      drawNebula(now);
      drawStars(now, true);
      updateShootingStars(now);
      rafId = requestAnimationFrame(frame);
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, width, height);
      drawNebula(0);
      drawStars(0, false);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      if (reducedMotion) renderStatic();
    };

    resize();
    window.addEventListener("resize", onResize);

    if (reducedMotion) {
      renderStatic();
      const onScroll = () => renderStatic();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
      };
    }

    if (!coarsePointer) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
};

export default GalaxyBackground;
