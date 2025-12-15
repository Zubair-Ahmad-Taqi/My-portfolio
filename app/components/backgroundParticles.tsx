/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#0E0A1A" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["repulse", "grab"],
            },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 0.6 },
            grab: { distance: 200, links: { opacity: 0.7 } },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#A78BFA" },
          links: {
            color: "#7C3AED",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
            blink: true,
            triangles: { enable: true, color: "#DDD3FF", opacity: 0.08 },
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: {
            value: { min: 0.25, max: 0.75 },
            animation: { enable: true, speed: 1.2, minimumValue: 0.25, sync: false },
          },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 }, animation: { enable: true, speed: 2.5, minimumValue: 2, sync: false } },
          font: { value: "'Exo 2', sans-serif" }
        },
        detectRetina: true,
      }}
    />
  );
}
