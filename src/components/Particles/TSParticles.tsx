import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const TSParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      console.log(init);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        color: {
          value: "#4086ff",
        },
        links: {
          color: "#4086ff",
          distance: 350,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.25,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 35,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default TSParticles;
