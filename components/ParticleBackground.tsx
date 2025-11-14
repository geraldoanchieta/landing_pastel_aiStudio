import React, { useEffect } from 'react';

declare global {
  interface Window {
    tsParticles: any;
  }
}

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load("tsparticles", {
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FFC107",
          },
          links: {
            color: "#FFD700",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      });
    }
  }, []);

  return <div id="tsparticles" className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;
