<template>
    <div class="particles-container">
        <Particles id="tsparticles" class="particles" :options="this.options" :particlesInit="this.particlesInit" />
    </div>
</template>
  
<script>
import { loadFull } from "tsparticles";
export default {
    props: {
        backgroundColor: String,
        // "#130f40"
    },
    data() {
        return {
            options: {
                background: {
                    color: this.backgroundColor, // this sets a background color for the canvas
                },
                fullScreen: {
                    enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
                    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true, // enables the click event, it's disabled by default
                            mode: "push", // adds the particles on click
                        },
                        onHover: {
                            enable: true, // enables the mouse hover event, it's disabled by default
                            mode: "repulse", // repulse the particles on mouse hover
                        },
                    },
                    modes: {
                        push: {
                            quantity: 5, // number of particles to add on click
                        },
                        repulse: {
                            distance: 100, // distance of the particles from the cursor
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#b2bec3"
                    },
                    links: {
                        distance: 100, // maximum distance for linking the particles
                        enable: true, // enabling this will make the particles linked together
                        color: "#6c5ce7"
                    },
                    move: {
                        enable: true, // enabling this will make particles move in the canvas
                        speed: { min: .5, max: 1 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
                    },
                    number: {
                        value: 100,
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.5 }, // using a different opacity, to have some semitransparent effects
                    },
                    size: {
                        value: { min: 2, max: 6 }, // let's randomize the particles size a bit
                    },
                    shape: {
                        type: "square",

                    },
                },
            },
        };
    },
    methods: {
        async particlesInit(engine) {
            await loadFull(engine);
        }
    }
};
</script>

<style lang="scss" scoped>
.particles-container {
    width: 100%;
    height: 100%;

    .particles {
        height: 100%;
    }
}
</style>
  