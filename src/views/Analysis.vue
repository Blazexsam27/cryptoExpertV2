<template>
    <div class="analysis">
        <ArbitaryNav />
        <div class="price-chart">
            <LineChart />
        </div>
        <div class="crypto-cards">
            <CryptoCard />
            <CryptoCard />
            <CryptoCard />
            <CryptoCard />
        </div>
        <div class="analysis-section1">
            <div class="left">
                <div class="container">
                    <div class="subhead">Scatter chart</div>
                    <ScatterChart />
                </div>

            </div>
            <div class="right">
                <div class="container">
                    <div class="subhead">Market cap chart</div>
                    <LineChart />
                </div>
            </div>
        </div>
        <div class="analysis-section2">
            <div class="left">
                <div class="container">
                    <div class="subhead">Trending News</div>
                    <TrendingNews />
                </div>

            </div>
            <div class="right">
                <div class="container">
                    <div class="subhead">Heat Map</div>
                    <HeatMap />
                </div>
            </div>
        </div>
        <!-- background animation related code -->
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>
<script>
import LineChart from '../components/Charts/LineChart.vue';
import CryptoCard from '../components/Widgets/CryptoCard.vue';
import ScatterChart from '../components/Charts/ScatterChart.vue';
import HeatMap from '../components/Charts/HeatMap.vue';
import TrendingNews from "../components/Analysis/TrendingNews.vue";
import ArbitaryNav from '../components/Widgets/ArbitaryNav.vue';
export default {
    name: "Analysis",
    components: {
        LineChart,
        CryptoCard,
        ScatterChart,
        HeatMap,
        TrendingNews,
        ArbitaryNav
    }
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
}

.arbitary-nav {
    display: flex;
    justify-content: start;
    padding: 1.5rem;
    font-weight: 600;
    font-size: $text;
    transition: .5s;
    height: 40px;

    &:hover {
        transition: .5s;
        color: $c2;
        font-size: 1.2rem;
        transform: skewX(-20deg);
    }
}

.analysis {
    background-color: #ffff;
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
}

.price-chart {
    @include common-dflex-center;
}

.crypto-cards {
    @include common-dflex-center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
}

.analysis-section1 {
    width: 100%;
    @include common-dflex-center;
    gap: 1rem;
    margin-top: 3rem;

    .left,
    .right {
        .container {
            @include common-dflex-column;

            .subhead {
                @include common-dflex-start;
                margin-bottom: 7px;
                color: $c4;
                font-weight: 600;
            }
        }
    }

    .left {
        width: 65%;
    }

    .right {
        width: 30%;
    }
}

.analysis-section2 {
    width: 100%;
    @include common-dflex-center;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 5rem;

    .left,
    .right {
        .container {
            @include common-dflex-column;

            .subhead {
                @include common-dflex-start;
                margin-bottom: 7px;
                color: $c4;
                font-weight: 600;
            }
        }
    }

    .left {
        width: 35%;
    }

    .right {
        width: 60%
    }
}

// Animation related code.
.cube {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px darken(#0040C1, 8%);
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;

    &:nth-child(2n) {
        border-color: lighten($c4, 10%);
    }

    &:nth-child(2) {
        animation-delay: 2s;
        left: 25vw;
        top: 40vh;
    }

    &:nth-child(3) {
        animation-delay: 4s;
        left: 75vw;
        top: 50vh;
    }

    &:nth-child(4) {
        animation-delay: 6s;
        left: 90vw;
        top: 10vh;
    }

    &:nth-child(5) {
        animation-delay: 8s;
        left: 10vw;
        top: 85vh;
    }

    &:nth-child(6) {
        animation-delay: 10s;
        left: 50vw;
        top: 10vh;
    }
}

@keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: .6;
    }

    to {
        transform: scale(10) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    }
}
</style>