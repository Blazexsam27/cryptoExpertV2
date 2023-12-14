<template>
    <div class="blockchain">
        <div class="text">
            <a href="https://www.blockchain.com/" target="_blank">
                <div class="header"><span>B</span>lockchain</div>
            </a>
            <div class="desc">{{ this.blockchainDesc }}</div>
        </div>

        <div class="img">
            <img :src="this.blockchainLogo" alt="" :class="{ 'rotate-3d': isRotating }">
        </div>
    </div>
</template>
<script>
import blockchainLogo from "../../assets/blockchain-icon.svg";
import { blockchainDesc } from "../../static/learn";
export default {
    name: "BlockChain",
    data() {
        return {
            blockchainLogo,
            blockchainDesc,
            isRotating: true
        }
    }
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #fff;
}

.blockchain {
    display: flex;
    gap: 1.5rem;
    padding: 5rem 5.5rem;
    width: 100%;
    align-items: center;

    @media(max-width: 1400px) {}

    .text {
        @include common-dflex-column;
        width: 60%;
        color: $white;
        letter-spacing: 2px;

        .header {
            cursor: pointer;

            span {
                font-size: 6rem;
                font-weight: bold;
            }

            font-size: 2.5rem;
            transition: .5s;

            &:hover {
                transition: .5s;
                color: $c7;
            }
        }
    }

    .img {
        width: 20%;

        img {
            width: 200px;
            height: 200px;
            filter: invert(100);
        }
    }

    .rotate-3d {
        transform-origin: center;
        animation: rotateCar 20s infinite linear;
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
        flex-flow: column-reverse;
        margin-top: 3rem;

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