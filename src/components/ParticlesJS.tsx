import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesJS(props: { on: boolean; dark: boolean }) {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    setOpacity(0);
    setVisible(false);

    const timeout = setTimeout(() => {
      setVisible(true);
      setOpacity(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [props.dark, props.on]);

  return (
    <div
      style={{
        opacity,
        transition: "opacity 0.5s ease-in-out",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        position: "absolute",
      }}
    >
      {visible && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: { resize: true },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: props.dark ? "#333" : "#fff" },
              move: {
                direction: "right",
                enable: props.on,
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 80 },
                value: 60,
              },
              opacity: { value: 0.4 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
