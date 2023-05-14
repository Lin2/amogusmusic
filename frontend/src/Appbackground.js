// //referenced tsparticle doc and codepen demos code

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Appbackground = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         await loadFull(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);

//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "#000000",
//                     },
//                 },
//                 fpsLimit: 60,
//                 particles: {
//                     color: {
//                         value: "#ffffff",
//                     },
//                     // move: {
//                     //     directions: "right",
//                     //     enable: true,
//                     //     random: false,
//                     //     speed: 6,
//                     //     straight: true,

//                     // },

//                     move: {
//                       angle: {
//                         value: 10,
//                         offset: 0
//                       },
//                       enable: true,
//                       speed: {min:1, max:2.5},
//                       direction: "right",
//                       random: false,
//                       straight: true,
//                       outModes: {
//                         default: "out"
//                       }
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 900,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 1,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1.5, max: 3 },
//                     },
//                 },
//                 detectRetina: true,

//                 particles: {
//                   shape: {
//                     type: "images",
//                     options: {
//                       images: [
//                         {
//                           src: "https://lin2.github.io/amongusdrums.png",
//                           width: 205,
//                           height: 267
//                         },
//                         {
//                           src: "https://particles.js.org/images/amongus_cyan.png",
//                           width: 207,
//                           height: 265
//                         },
//                         {
//                           src: "https://particles.js.org/images/amongus_green.png",
//                           width: 204,
//                           height: 266
//                         }
//                       ]
//                     }
//                   },
//                   move: {
//                     angle: {
//                       value: 10,
//                       offset: 0
//                     },
//                     enable: true,
//                     speed: {min:1, max:2.5},
//                     direction: "right",
//                     random: false,
//                     straight: true,
//                     outModes: {
//                       default: "out"
//                     }
//                   },


//                 },

//             }


//           }
//         />
//     );
// }

// export default Appbackground















//referenced tsparticle doc and codepen demos code

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Appbackground = () => {
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
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        particles: {
          shape: {
            type: "images",
            options: {
              images: [
                {
                  src: "https://lin2.github.io/amongusdrums.png",
                  width: 1024,
                  height: 1024
                },
                {
                  src: "https://lin2.github.io/amongussaxo.png",
                  width: 1024,
                  height: 1024
                },
                {
                  src: "https://lin2.github.io/amongusguitar.png",
                  width: 1024,
                  height: 1024
                }
              ]
            }
          },

          move: {
            angle: {
              value: 10,
              offset: 10
            },
            enable: true,
            speed: { min: 1, max: 2.5 },
            direction: "right",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            }
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 10,
          },
          opacity: {
            value: 1,
          },
          size: {
            value: { min: 50, max: 50 },
          },
        },
        detectRetina: true,




        particles1: {
          color: {
            value: "#ffffff",
          },
          // move: {
          //     directions: "right",
          //     enable: true,
          //     random: false,
          //     speed: 6,
          //     straight: true,

          // },

          move: {
            angle: {
              value: 10,
              offset: 0
            },
            zIndex: {
              value: 0
            },
            enable: true,
            speed: { min: 1, max: 2.5 },
            direction: "right",
            random: false,
            straight: true,
            outModes: {
              default: "out"
            }
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 80,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1.5, max: 3 },
          },
        },







      }


      }
    />
  );
}

export default Appbackground






