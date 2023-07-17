import { useCallback } from "react";
// import { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const Graph = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadLinksPreset(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    container?.canvas;
  }, []);

  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#1E293B" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        preset: "links",
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
        },
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default Graph;
