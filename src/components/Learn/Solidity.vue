<template>
    <div class="solidity">
        <div class="img">
            <img :src="this.solidityLogo" alt="" :class="{ 'rotate-3d': isRotating }">
        </div>
        <div class="text">
            <a href="https://soliditylang.org/" target="_blank">
                <div class="header"><span>S</span>OLIDITY</div>
            </a>
            <div class="desc">{{ this.solidityDesc }}</div>
        </div>
    </div>
</template>
<script>
import solidityLogo from "../../assets/solidity_logo.svg";
import { solidityDesc } from "../../static/learn";
export default {
    name: "Solidity",
    data() {
        return {
            solidityLogo,
            isRotating: true,
            solidityDesc
        }
    }
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #fff;
}

.solidity {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 5.5rem;
    width: 100%;
    align-items: center;

    .img {
        width: 20%;

        img {
            width: 200px;
            height: 200px;
            filter: invert(1);
        }
    }

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
            width: 100%;
            display: grid;
            place-items: center;
        }

        .text {
            width: 95%;
        }
    }
}
</style>