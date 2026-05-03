"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor
 * Renders only on desktop (pointer:fine) devices.
 * - Dot: snaps directly to mouse position (GPU transform, no layout thrash)
 * - Ring: lerps toward dot at 14% per frame for smooth trailing effect
 * - Enlarges on hover over interactive elements
 */
export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bail out on touch/non-fine-pointer devices
    const isTouch = !window.matchMedia("(pointer: fine)").matches;
    if (isTouch) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = -100, ty = -100; // target (mouse)
    let rx = -100, ry = -100; // ring (lerped)
    const LERP = 0.14;
    let rafId: number;

    // Read mouse position — no DOM writes here
    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    // Single rAF loop — all DOM writes happen here
    const loop = () => {
      rafId = requestAnimationFrame(loop);

      // Dot: snap directly to mouse
      dot.style.transform = `translate(calc(${tx}px - 50%), calc(${ty}px - 50%))`;

      // Ring: lerp toward target
      rx += (tx - rx) * LERP;
      ry += (ty - ry) * LERP;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
    };
    loop();

    // Hover enlargement — attach to all interactive elements
    const interactives = document.querySelectorAll("a, button, [role='button']");
    const addHover    = () => dot.classList.add("hovering");
    const removeHover = () => dot.classList.remove("hovering");

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover,    { passive: true });
      el.addEventListener("mouseleave", removeHover, { passive: true });
    });

    // Fade on window exit/enter
    const onLeave = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; };
    const onEnter = () => { dot.style.opacity = "1"; ring.style.opacity = "0.7"; };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={dotRef} aria-hidden="true" />
      <div id="custom-cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
