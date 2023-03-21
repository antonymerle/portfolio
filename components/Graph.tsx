import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const Graph = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(engine);
    await loadLinksPreset(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      container?.canvas;
      await console.log(container);
    },
    []
  );
  // const options = {
  //   preset: "links",
  //   background: {
  //     color: {
  //       value: "#000",
  //     },
  //   },
  // particles: {
  //   number: {
  //     value: 80,
  //     density: {
  //       enable: true,
  //       value_area: 800,
  //     },
  //   },
  //     fullScreen: {
  //       enable: false,
  //     },
  //     color: {
  //       value: "#ffffff",
  //     },
  //     shape: {
  //       type: "circle",
  //       stroke: {
  //         width: 0,
  //         color: "#000000",
  //       },
  //       polygon: {
  //         nb_sides: 5,
  //       },
  //     },
  //   },
  // };
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
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
        background: {
          color: { value: "#1E293B" },
        },
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
    // <Particles
    //   id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
    //   options={{
    //     background: {
    //       color: {
    //         value: "#0d47a1",
    //       },
    //     },
    //     fpsLimit: 120,
    //     interactivity: {
    //       events: {
    //         onClick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //         onHover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         push: {
    //           quantity: 4,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: "#ffffff",
    //       },
    //       links: {
    //         color: "#ffffff",
    //         distance: 150,
    //         enable: true,
    //         opacity: 0.5,
    //         width: 1,
    //       },
    //       collisions: {
    //         enable: true,
    //       },
    //       move: {
    //         direction: "none",
    //         enable: true,
    //         outModes: {
    //           default: "bounce",
    //         },
    //         random: false,
    //         speed: 6,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 800,
    //         },
    //         value: 80,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       size: {
    //         value: { min: 1, max: 5 },
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // />
  );
};

export default Graph;
