import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none animate-fade-in opacity-80">
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["bubble", "repel"],
              },
            },
            modes: {
              bubble: {
                distance: 250,
                size: 60,
                duration: 2,
                opacity: 0.8,
              },
              repel: {
                distance: 150,
                duration: 0.8,
                factor: 2,
              },
            },
          },
          particles: {
            color: {
              value: ["#FFD700", "#D4AF37", "#f3e5ab", "#ffffff"],
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: { min: 0.1, max: 0.4 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 5, max: 40 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            shadow: {
              enable: true,
              color: "#d4af37",
              blur: 20,
              offset: { x: 0, y: 0 },
            },
          },
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 12,
                  },
                },
              },
            },
          ],
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
