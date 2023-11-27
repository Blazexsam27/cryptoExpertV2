<template>
    <div class="web3">
        <div class="img">
            <img :src="this.web3Logo" alt="" :class="{ 'rotate-3d': isRotating }">
        </div>

        <div class="text">
            <a href="https://web3.foundation/" target="_blank">
                <div class="header"><span>W</span>eb3</div>
            </a>
            <div class="desc">{{ this.web3Desc }}</div>
        </div>
    </div>
</template>
<script>
import web3Logo from "../../assets/web3-icon.svg";
import { web3Desc } from "../../static/learn";
export default {
    name: "Web3",
    data() {
        return {
            web3Logo,
            isRotating: true,
            web3Desc

        }
    }
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #fff;
}

.web3 {
    display: flex;
    gap: 1.5rem;
    padding: 5rem 5.5rem;
    width: 100%;
    align-items: center;

    .text {
        @include common-dflex-column;
        width: 55%;
        color: $white;
        letter-spacing: 2px;

        .header {
            cursor: pointer;

            span {
                font-size: 6rem;
                font-weight: bold;
            }

            font-size: 2.5rem;

            &:hover {
                transition: .5s;
                color: $c7;
            }
        }


    }

    .img {
        width: 26%;

        img {
            width: 300px;
            height: 300px;
            filter: invert(100);
        }
    }

    .rotate-3d {
        transform-origin: center;
        animation: rotateCar 6s infinite linear;
    }

    @keyframes rotateCar {
        from {
            transform: rotate3d(0, 1, 0, 0deg);
        }

        to {
            transform: rotate3d(0, 1, 0, 360deg);
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        padding: 1rem;

        .img {
            width: 50%;
            display: grid;
            place-items: center;
        }

        .text {
            width: 95%;
        }
    }
}
</style>