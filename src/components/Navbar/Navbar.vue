<template>
    <div class="navbar-container">
        <div class="navbar">
            <div class="left">Crypto Expert</div>
            <div class="center">
                <div @click="scrollToExplore">Explore</div>
                <router-link to="/news">
                    <div>News</div>
                </router-link>
                <router-link to="/learn">
                    <div>Learn</div>
                </router-link>
                <div>About</div>
            </div>
            <div class="right">
                <router-link to="/analysis">
                    <Button text="Get Started" />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Button from '../Widgets/Button.vue';
export default {
    name: "Navbar",
    components: {
        Button
    },
    methods: {
        scrollToExplore() {
            this.$emit('scroll-to-explore');
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar-container {
    display: flex;
    width: 100%;
    height: fit-content;
    position: absolute;
    justify-content: center;
    margin-top: 1rem;

    a {
        text-decoration: none;
        color: $c1;
    }

    .navbar {
        @include common-dflex-space-between;
        width: 75%;
        height: 65px;
        border-radius: 100px;
        backdrop-filter: blur(0px) saturate(200%);
        border: 1px solid rgba(255, 255, 255, 0.125);
        background: $white80;
        padding: 0 2rem;
        color: $c1;

        .left {
            cursor: pointer;
        }

        .center {
            @include common-dflex-center;
            gap: 1.2rem;
            cursor: pointer;

            div {
                transition: .4s;

                &:hover {
                    transition: .4s;
                    transform: scale(1.2);
                    color: $c2;
                }
            }
        }

    }
}
</style>