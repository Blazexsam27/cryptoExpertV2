<template>
    <div class="explore-top-section">
        <div class="header">Explore Crypto Expert</div>
        <section class="visual-analysis">
            <div class="img" data-aos="flip-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2500">
                <img :src="this.graphImg" alt="Graph Image">
            </div>
            <div class="text" data-aos="fade-left" data-aos-duration="2000">
                <div class="subheader">
                    <router-link to="/analysis">
                        <span>
                            Visual Analysis
                        </span>
                    </router-link>
                    <div class="side-strip"></div>
                </div>
                <div>Dive into the world of cryptocurrencies through intuitive visualizations. Our comprehensive suite of
                    graphs—treemaps, scatter charts, and dynamic line graphs—empowers you to interpret and analyze market
                    trends effortlessly. Visualize historical and real-time data, enabling informed decision-making and a
                    deeper understanding of cryptocurrency performance over time.</div>
            </div>
        </section>
        <section class="lstm-section">
            <div class="text" data-aos="fade-right" data-aos-duration="2000">
                <div class="subheader">
                    <router-link to="/analysis">
                        <span>LSTM AI Model</span>
                    </router-link>
                    <div class="side-strip"></div>
                </div>
                <div>Gain valuable insights into Bitcoin's future trends with our LSTM (Long Short-Term Memory) model.
                    Leveraging historical Bitcoin data, this sophisticated machine learning algorithm predicts potential
                    price movements and market trends. Unlock actionable forecasts and informed analysis to navigate the
                    dynamic landscape of cryptocurrency trading and investment.</div>
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
                    <router-link to="/learn">
                        <span>Learn Concepts</span>
                    </router-link>
                    <div class="side-strip"></div>
                </div>
                <div>Delve into the core of decentralized technologies with our comprehensive learning resources. Explore
                    Solidity, the language behind smart contracts, empowering you to build decentralized applications on
                    blockchain networks. Understand the fundamentals of blockchain technology, its architecture, and its
                    disruptive potential across industries. Dive into Web3, the decentralized web, and discover how it
                    revolutionizes data ownership, privacy, and internet interactions. Embark on a learning journey that
                    unravels the future of decentralized innovation.</div>
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

        transition: .7s;

        &:hover {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            transition: .7s;
        }

        .side-strip {
            position: absolute;
            width: 20px;
            height: 100%;
            background-color: $c4;
            top: 0;
            right: 2rem;
            transform: skewX(-55deg);
            transition: .7s;

            &:hover {
                transition: .7s;
                transform: skewX(0deg);
            }
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