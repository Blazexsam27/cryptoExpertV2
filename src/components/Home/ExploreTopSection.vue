<template>
    <div class="explore-top-section">
        <div class="header">Explore Crypto Expert</div>
        <section class="visual-analysis">
            <div class="img" data-aos="flip-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2500">
                <img :src="this.graphImg" alt="Graph Image">
            </div>
            <div class="text" data-aos="fade-left" data-aos-duration="2000">
                <div class="subheader">
                    <span>Visual Analysis</span>
                    <div class="side-strip"></div>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit cupiditate
                    accusamus at. Adipisci asperiores sed repudiandae, iusto laudantium eos aliquid beatae? Impedit,
                    repudiandae. Voluptatum repudiandae vel id excepturi porro eum qui.</div>
            </div>
        </section>
        <section class="lstm-section">
            <div class="text" data-aos="fade-right" data-aos-duration="2000">
                <div class="subheader">
                    <span>LSTM AI Model</span>
                    <div class="side-strip"></div>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit cupiditate
                    accusamus at. Adipisci asperiores sed repudiandae, iusto laudantium eos aliquid beatae? Impedit,
                    repudiandae. Voluptatum repudiandae vel id excepturi porro eum qui.</div>
            </div>
            <div class="img" data-aos="flip-right" data-aos-anchor-placement="bottom-right" data-aos-duration="2500">
                <img :src="this.barChartImg" alt="Graph Image">
            </div>
        </section>
        <section class="learning-section">
            <div class="img" data-aos="flip-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2500">
                <img :src="this.blockchainImg" alt="Graph Image">
            </div>
            <div class="text" data-aos="fade-left" data-aos-duration="2000">
                <div class="subheader">
                    <span>Learn Concepts</span>
                    <div class="side-strip"></div>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit cupiditate
                    accusamus at. Adipisci asperiores sed repudiandae, iusto laudantium eos aliquid beatae? Impedit,
                    repudiandae. Voluptatum repudiandae vel id excepturi porro eum qui.</div>
            </div>
        </section>
    </div>
</template>
<script>
import graphImg from "../../assets/polar_area_test1.png";
import blockchainImg from "../../assets/blockchain_test.png";
import barChartImg from "../../assets/bar_chart_test.png";
import { onMounted } from "vue";
import AOS from "aos";
export default {
    name: "ExploreTopSection",
    data() {
        return {
            graphImg,
            blockchainImg,
            barChartImg
        }
    },
    setup() {
        onMounted(() => {
            AOS.init();
        });
    }
}
</script>
<style lang="scss" scoped>
.explore-top-section {
    width: 100%;
    @include common-dflex-column;
    align-items: center;

    .header {
        font-weight: 600;
        font-size: $heading;
        text-align: center;
        margin: 4rem 0;
        color: $c4;
    }

    .subheader {
        font-size: $subheader;
        font-weight: 600;
        color: $c4;
        margin: 1.5rem 0;

        padding: 10px;
        background-color: $lightgray50;
        -webkit-clip-path: polygon(0 0, 100% 0, 89% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 89% 100%, 0% 100%);
        position: relative;

        .side-strip {
            position: absolute;
            width: 20px;
            height: 100%;
            background-color: $c4;
            top: 0;
            right: 2rem;
            transform: skewX(-55deg);

        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    .text {
        font-weight: 500;
        font-size: $text;
        color: $c2;
        @include common-dflex-column;
    }

    .visual-analysis,
    .lstm-section,
    .learning-section {
        width: 85%;
        gap: 2rem;
        margin: 2rem 0;
        @include common-dflex-space-between;

        .img {
            width: 40%;
        }

        .text {
            width: 60%;
        }
    }

    .visual-analysis {}

    .lstm-section {}

    .learning-section {}
}
</style>