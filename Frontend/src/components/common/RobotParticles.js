import React from "react";
import Particles from "@tsparticles/react";

const robotSvg = encodeURIComponent(`
<svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="16" fill="#3B82F6"/>
  <g>
    <circle cx="16" cy="16" r="10" fill="#fff"/>
    <rect x="12" y="10" width="8" height="8" rx="2" fill="#3B82F6"/>
    <rect x="14" y="18" width="4" height="2" rx="1" fill="#3B82F6"/>
    <circle cx="14.5" cy="14.5" r="1" fill="#fff"/>
    <circle cx="17.5" cy="14.5" r="1" fill="#fff"/>
  </g>
</svg>
`);

const gearSvg = encodeURIComponent(`
<svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="12" fill="#6366F1"/>
  <path d="M16 10v4m0 4v4m4-4h-4m-4 0h4" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg>
`);

const chipSvg = encodeURIComponent(`
<svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="16" height="16" rx="4" fill="#10B981"/>
  <rect x="12" y="12" width="8" height="8" rx="2" fill="#fff"/>
</svg>
`);

const RobotParticles = () => (
  <Particles
    id="robot-particles"
    className="absolute inset-0 w-full h-full z-0"
    options={{
      fullScreen: false,
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: "#3B82F6" },
        shape: {
          type: "image",
          image: [
            {
              src: `data:image/svg+xml,${robotSvg}`,
              width: 64,
              height: 64,
            },
            {
              src: `data:image/svg+xml,${gearSvg}`,
              width: 64,
              height: 64,
            },
            {
              src: `data:image/svg+xml,${chipSvg}`,
              width: 64,
              height: 64,
            },
          ],
        },
        opacity: {
          value: 1,
          random: { enable: false },
          anim: { enable: false },
        },
        size: {
          value: 64,
          random: { enable: false },
          anim: { enable: false },
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
          attract: { enable: false },
        },
        zIndex: { value: 5, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
      },
      interactivity: {
        events: {},
      },
      detectRetina: true,
    }}
  />
);

export default RobotParticles; 