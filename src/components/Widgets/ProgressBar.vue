<template>
    <div class="container">
        <div class="progress-bar-container">
            <div class="progress" :style="{ width: `${animatedProgress}%` }"></div>
        </div>
        {{ animatedProgress }}%
    </div>
</template>
<script>
export default {
    name: "ProgressBar",
    props: {
        progress: Number
    },
    data() {
        return {
            animatedProgress: 0,
        };
    },
    mounted() {
        this.animateProgressBar();
    },
    methods: {
        animateProgressBar() {
            // Set the animatedProgress to the actual progress value over a certain duration
            const duration = 2000; // Animation duration in milliseconds
            const interval = 20; // Interval for updating the progress
            const steps = duration / interval;
            const increment = Math.ceil(this.progress / steps);

            let currentProgress = 0;

            const timer = setInterval(() => {
                if (currentProgress >= this.progress) {
                    clearInterval(timer);
                } else {
                    currentProgress += increment;
                    this.animatedProgress = Math.min(currentProgress, this.progress);
                }
            }, interval);
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    @include common-dflex-center;
    width: 100%;
    gap: 1rem;


    .progress-bar-container {
        width: 100%;
        height: 10px;
        border-radius: 15px;
        box-shadow: $box-shadow;
        background: $lightgray;
        position: relative;

        .progress {
            background: $c5;
            border-radius: 15px;
            position: absolute;
            height: 100%;
        }
    }

}
</style>