<template>
    <div class="analysis">
        <ArbitaryNav />
        <div class="price-chart">
            <div class="subhead">Price chart (past 30 days in usd)</div>
            <LineChart :dataPoints="this.dataPoints" :cryptoId="this.selectedCrypto" chartType="price" />
        </div>
        <div class="crypto-cards">
            <div v-for="crypto of this.popularCryptos">
                <template v-if="crypto.id.toLowerCase() !== this.selectedCrypto.toLowerCase()">
                    <CryptoCard :cryptoName="crypto.name" :img="crypto.image" :price="crypto.current_price"
                        @click="setSelectedCryptoId(crypto.id)" />

                </template>
            </div>
        </div>
        <div class="lstm-summary">**Try the trained LSTM model to get 30 days future predictions (Bitcoin only)</div>
        <div class="note">IMP NOTE**: This is only for educational purpose and not any kind of financial advice.</div>
        <div class="lstm-btn">
            <Button text="LSTM Analysis" @click="this.getBitcoin30DaysPredictions()" />
        </div>
        <div class="ring-loader">
            <pulse-loader :loading="this.loading" :color="loaderColor" :size="size"></pulse-loader>
        </div>

        <div class="lstm-result-container" v-if="showPredictionInsights">
            <LSTMResult :dataPoints="this.predictedData" />
        </div>

        <div class="analysis-section1">
            <div class="left">
                <div class="container">
                    <div class="subhead">Scatter chart (Price Vs Volume)</div>
                    <ScatterChart :data="this.scatterPlotData" />
                </div>
            </div>
            <div class="right">
                <div class="container">
                    <div class="subhead">Market cap chart</div>
                    <LineChart :dataPoints="this.marketCaps" :cryptoId="this.selectedCrypto" chartType="market_cap" />
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
                    <div class="subhead">Tree Map (24hr Volume in usd)</div>
                    <TreeChart :treeChartData="this.treeChartData" :d="213123131" />
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
import TreeChart from '../components/Charts/TreeChart.vue';
import TrendingNews from "../components/Analysis/TrendingNews.vue";
import ArbitaryNav from '../components/Widgets/ArbitaryNav.vue';
import geckoService from "../services/gecko.service";
import { scatterPlotDataMapper } from "../utils/geckoDataExtractor";
import Button from '../components/Widgets/Button.vue';
import { getRandomInt } from '../utils/basicUtils';
import lstmService from '../services/lstm.service';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import LSTMResult from '../components/Analysis/LSTMResult.vue';


export default {
    name: "Analysis",
    components: {
        LineChart,
        CryptoCard,
        ScatterChart,
        HeatMap,
        TrendingNews,
        ArbitaryNav,
        TreeChart,
        Button,
        PulseLoader,
        LSTMResult
    },
    data() {
        return {
            loaderColor: "#1e3799",
            dataPoints: [],
            prices: [],
            marketCaps: [],
            volumes: [],
            trendingCryptos: [],
            scatterPlotData: [],
            treeChartData: [],
            popularCryptos: [],
            reqCryptoIds: ["ripple", "bitcoin", "ethereum", "solana", "matic-network"],
            selectedCrypto: "bitcoin",
            loading: false,
            predictedData: [],
            showPredictionInsights: false
        }
    },
    mounted() {
        this.getCryptoLineChartData();
        this.getTrendingCryptos();
        // this.getTrendingCryptoCurrentVolume();
        this.getGivenCryptoListData();
    },
    methods: {
        async getCryptoLineChartData() {
            try {
                const result = await geckoService.getCryptoData(this.selectedCrypto, "usd", 30);
                this.dataPoints = result.prices[1];
                this.prices = result.prices[1];
                this.marketCaps = result.market_caps[1];
                this.volumes = result.total_volumes[1];
                this.scatterPlotData = scatterPlotDataMapper(result.prices[1], result.total_volumes[1]);
            } catch (error) {
                console.error("Error", error);
            }
        },

        async getTrendingCryptos() {
            try {
                const response = await geckoService.getTrendingCoins();
                const trendingCoins = response.coins.slice(0, 4);
                const btcPriceObj = await geckoService.getBitcoinPrice();
                for (let i = 0; i < 4; i++) trendingCoins[i].item.price = trendingCoins[i].item.price_btc * btcPriceObj.bitcoin.usd;
                this.trendingCryptos = trendingCoins;
            } catch (error) {
                console.error("Error", error)
            }
        },

        // async getTrendingCryptoCurrentVolume() {
        //     try {
        //         const rippleVolumeHeat = await geckoService.getCurrentDayVolume("ripple");
        //         const bitcoinVolumeHeat = await geckoService.getCurrentDayVolume("bitcoin");
        //         const ethVolumeHeat = await geckoService.getCurrentDayVolume('ethereum');
        //         const maticVolumeHeat = await geckoService.getCurrentDayVolume("matic-network");
        //         const polkadotVolumeHeat = await geckoService.getCurrentDayVolume("polkadot");
        //         const solanaVolumeHeat = await geckoService.getCurrentDayVolume("solana");

        //         this.treeChartData = [
        //             { x: "Ripple", y: rippleVolumeHeat, },
        //             { x: "Bitcoin", y: bitcoinVolumeHeat, },
        //             { x: "Ethereum", y: ethVolumeHeat, },
        //             { x: "Polygon Matic", y: maticVolumeHeat, },
        //             { x: "Polkadot", y: polkadotVolumeHeat, },
        //             { x: "Solana", y: solanaVolumeHeat, },

        //         ]
        //     } catch (error) {
        //         console.error("Error", error);
        //     }
        // },

        async setupTreeMap(data) {
            let reqData = [];
            for (let item of data) {
                reqData.push({ x: item.id.toUpperCase(), y: item.market_cap })
            }
            this.treeChartData = reqData;
        },

        async getGivenCryptoListData() {
            try {
                const result = await geckoService.getGivenCryptoListData(this.reqCryptoIds);
                this.popularCryptos = result;

                this.setupTreeMap(result);
            } catch (error) {
                console.error("Error", error);
            }
        },

        async getBitcoin30DaysPredictions() {
            try {
                this.loading = true;
                const response = await lstmService.getBitcoin30DaysPredictions();
                this.predictedData = await response.data.output.map(item => item[0]);
                this.loading = false;
                this.showPredictionInsights = true;
            } catch (error) {
                console.error("Error", error)
            }
        },

        setSelectedCryptoId(id) {
            this.selectedCrypto = id;
            this.getCryptoLineChartData();
        },

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

.lstm-result-container {
    @include common-dflex-column;
    align-items: center;
}

.lstm-btn {
    @include common-dflex-center;
    margin: 1.5rem 5px;
}

.lstm-summary {
    @include common-dflex-center;
    margin-top: 2rem;
}

.note {
    @include common-dflex-center;
    margin-top: 10px;
    color: $c4;
    font-weight: 600;
}

.ring-loader {
    @include common-dflex-center;
    height: 40px;
    width: 100%;
}

.price-chart {
    @include common-dflex-column;
    align-items: center;

    .subhead {
        @include common-dflex-start;
        margin-bottom: 7px;
        color: $c4;
        font-weight: 600;
        width: 95%;
    }
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
    align-items: start;
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