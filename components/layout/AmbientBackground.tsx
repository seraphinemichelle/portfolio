"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/theme-context";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let phase = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let scroll = window.scrollY;
    let targetScroll = scroll;
    let color = "";

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      const columns = width < 600 ? 28 : 48;
      const rows = 32;
      // Broad rolling waves stay visible even when the pointer is idle.
      for (let row = 0; row < rows; row++) {
        const depth = row / (rows - 1);
        const spread = 0.25 + depth * 1.15;
        for (let column = 0; column < columns; column++) {
          const wave = Math.sin(column * 0.24 + phase - row * 0.12) * 38
            + Math.cos(row * 0.32 + phase * 0.7) * 26;
          const x = width / 2 + (column / (columns - 1) - 0.5)
            * (width + 160) * spread + pointerX * depth
            + Math.sin(phase * 0.6 + row * 0.16) * 8 * depth;
          const y = height * 0.26 + depth * depth * height * 0.85
            + wave * (0.3 + depth) + pointerY * depth
            + Math.sin(scroll * 0.002 + depth * 2) * 24 * depth;
          context.globalAlpha = (0.12 + depth * 0.3) * (width < 600 ? 0.8 : 1);
          context.beginPath();
          context.arc(x, y, 0.55 + depth * 1.05, 0, Math.PI * 2);
          context.fill();
        }
      }
      context.globalAlpha = 1;
    };

    const animate = (time: number) => {
      frame = 0;
      if (document.hidden || motion.matches) return;
      const elapsed = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      phase += elapsed * 0.45;
      const easing = 1 - Math.exp(-elapsed * 3);
      pointerX += (targetX - pointerX) * easing;
      pointerY += (targetY - pointerY) * easing;
      scroll += (targetScroll - scroll) * easing;
      draw();
      frame = requestAnimationFrame(animate);
    };

    const syncMotion = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      if (motion.matches) phase = pointerX = pointerY = scroll = 0;
      draw();
      if (!document.hidden && !motion.matches) frame = requestAnimationFrame(animate);
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      color = getComputedStyle(canvas).color;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      targetX = (event.clientX / Math.max(width, 1) - 0.5) * 44;
      targetY = (event.clientY / Math.max(height, 1) - 0.5) * 28;
    };
    const resetPointer = () => { targetX = targetY = 0; };
    const onScroll = () => { targetScroll = window.scrollY; };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    syncMotion();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", syncMotion);
    motion.addEventListener("change", syncMotion);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", syncMotion);
      motion.removeEventListener("change", syncMotion);
    };
  }, [darkMode]);

  return (
    <div className="ambient-background" aria-hidden="true">
      <canvas ref={canvasRef} className="ambient-wave" />
      <svg className="ambient-shape ambient-shape-circle" viewBox="0 0 100 100" fill="none" focusable="false">
        <circle cx="50" cy="50" r="42" />
        <ellipse cx="50" cy="50" rx="22" ry="42" />
        <path d="M8 50h84" />
      </svg>
      <svg className="ambient-shape ambient-shape-diamond" viewBox="0 0 100 100" fill="none" focusable="false">
        <path d="M50 8 90 50 50 92 10 50Z M50 8v84 M10 50h80" />
      </svg>
      <svg className="ambient-shape ambient-shape-hexagon" viewBox="0 0 100 100" fill="none" focusable="false">
        <path d="M50 6 88 28v44L50 94 12 72V28Z M50 6v44l38 22 M50 50 12 72 M12 28l38 22 38-22 M50 50v44" />
      </svg>
    </div>
  );
}
