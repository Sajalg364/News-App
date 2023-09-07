import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={

      // {
      //   background: {
      //     color: "#000", // this sets a background color for the canvas
      //   },
      //   fullScreen: {
      //     enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
      //     zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      //   },
      //   interactivity: {
      //     events: {
      //       onClick: {
      //         enable: true, // enables the click event
      //         mode: "push", // adds the particles on click
      //       },
      //       onHover: {
      //         enable: true, // enables the hover event
      //         mode: "repulse", // make the particles run away from the cursor
      //       },
      //     },
      //     modes: {
      //       push: {
      //         quantity: 10, // number of particles to add on click
      //       },
      //       repulse: {
      //         distance: 100, // distance of the particles from the cursor
      //       },
      //     },
      //   },
      //   particles: {
      //     links: {
      //       enable: true, // enabling this will make particles linked together
      //       distance: 200, // maximum distance for linking the particles
      //     },
      //     move: {
      //       enable: true, // enabling this will make particles move in the canvas
      //       speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
      //     },
      //     opacity: {
      //       value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
      //     },
      //     size: {
      //       value: { min: 1, max: 3 }, // let's randomize the particles size a bit
      //     },
      //   },
      // }





      {
        background: {
              color: "#000", 
            },
            fullScreen: {
                  enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                  zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                },    
        "particles": {
          "number": {
            "value": 132,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 20,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          // "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    }
/>
  )
}
//hello there
export default Particle