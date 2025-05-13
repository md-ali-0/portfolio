"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim" // Use slim version for better performance

export default function ParticleBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: do something when particles are loaded
  }, [])

  if (!isClient) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value: 40, // Reduced number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#10b981",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: false,
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#10b981",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8, // Slower movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 2, // Push fewer particles
            },
          },
        },
        retina_detect: true,
      }}
    />
  )
}
