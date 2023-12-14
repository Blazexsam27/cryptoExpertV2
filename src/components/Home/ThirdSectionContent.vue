<template>
    <div class="third-section-content">
        <div class="container">
            <div class="left">
                <Card heading="Crypto Analysis Dashboard" logo="logo" :desc="desc1" />
                <Card heading="Real-time Crypto News Feed" logo="logo" :desc="desc2" />
                <Card heading="Bitcoin LSTM Model" logo="logo" :desc="desc3" />
                <Card heading="Trending Cryptocurrencies" logo="logo" :desc="desc4" />
            </div>
            <div class="right" data-aos="flip-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500">
                <v-icon name="co-bitcoin" />
            </div>
        </div>
    </div>
</template>
<script>
import Card from "../Widgets/Card.vue";
import { onMounted } from "vue";
import AOS from "aos";

export default {
    name: "ThirdSectionContent",
    components: {
        Card
    },
    setup() {
        onMounted(() => {
            AOS.init();
        });
    },
    data() {
        return {
            desc1: `Explore and visualize cryptocurrency trends with interactive graphs including treemaps, scatter charts, and line graphs. Get insights into selected cryptocurrencies' performance.`,
            desc2: `Stay updated with the latest news and updates about the crypto world. Access relevant and up-to-date information impacting the market.`,
            desc3: `Uncover predictive insights with our LSTM model trained specifically for Bitcoin. Gain valuable forecasts and trends based on historical data.`,
            desc4: `Explore the hottest cryptocurrencies in the market. Stay informed about the most actively discussed and traded digital assets. Track the top-performing coins driving the current market trends.`
        }
    }
}
</script>
<style lang="scss">
.third-section-content {
    @include common-dflex-center;
    width: 100%;
    height: fit-content;
    margin-top: 5rem;

    .container {
        width: 100%;
        display: flex;
        height: fit-content;

        .left {
            width: 60%;
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            height: fit-content;
            justify-content: center;
        }

        .right {
            width: 40%;
            height: fit-content;

            svg {
                fill: $c3;
                width: 70%;
                height: 70%;
            }
        }
    }
}
</style>