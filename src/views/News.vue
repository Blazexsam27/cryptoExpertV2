<template>
    <div class="news">
        <ArbitaryNav />
    </div>
    <div class="top-section">
        <CustomParticles backgroundColor="#fff" />
        <div class="intro-container">
            <div class="head" data-aos="fade-right" data-aos-duration="1500"><span>Analyse</span> Trending
                <span>keywords</span> in news
            </div>
            <div class="keyword-summary">
                <div class="container" v-for="item of this.topNouns">
                    <TrendingKeywordCard :text="item.text" :progress="this.calculateStrength(item.count)" />
                </div>

            </div>
        </div>
    </div>
    <div class="news-card-section">
        <NewsCard v-for="item of this.cryptoNewsList" :newsTitle="item.title" :imgUrl="item.imageurl" :source="item.url"
            :newsDesc="item.body" />
    </div>
</template>
<script>
import ArbitaryNav from '../components/Widgets/ArbitaryNav.vue';
import CustomParticles from "../components/ParticleJs/ParticleJs.vue";
import TrendingKeywordCard from '../components/Widgets/TrendingKeywordCard.vue';
import NewsCard from '../components/Widgets/NewsCard.vue';
import { onMounted } from "vue";
import AOS from "aos";
import nlpService from '../services/nlp.service';
import newsService from '../services/news.service';
export default {
    name: "News",
    components: {
        ArbitaryNav,
        CustomParticles,
        TrendingKeywordCard,
        NewsCard,
    },
    data() {
        return {
            cryptoNewsList: [],
            apiKey: import.meta.env.VITE_CRYPTO_API_KEY,
            topNouns: [],
            totalOccurences: 100
        }
    },
    mounted() {
        this.initializeComponent();
    },
    methods: {
        async initializeComponent() {
            this.cryptoNewsList = await newsService.getNewsFromCache();
            // get appeared nouns from service.
            [this.topNouns, this.totalOccurences] = await this.getFrequentNouns();
        },
        async getArticlesList() {
            const newsData = await newsService.getNewsFromCache();
            let articlesList = [];
            for (let item of newsData) {
                articlesList.push(item.body)
            }
            return articlesList;
        },
        async getFrequentNouns() {
            const articlesList = await this.getArticlesList();
            const nouns = nlpService.getMostFrequentNounsInArticles(articlesList);
            let total = 0;
            for (let item of nouns) {
                total += item.count;
            }
            return [nouns, total];
        },
        calculateStrength(count) {
            return Math.ceil((count * 100) / this.totalOccurences)
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

.top-section {
    width: 100%;
    height: 400px;

    .intro-container {
        position: absolute;
        z-index: 20;
        @include common-dflex-center;
        top: 4rem;
        width: 100%;
        padding: 5rem 0;

        .head {
            width: 45%;
            font-size: 5rem;
            font-weight: bold;

            span {
                color: $c4;
            }
        }

        .keyword-summary {
            width: 45%;
            @include common-dflex-column;
            align-items: center;
            gap: 1rem;

            .container {
                width: 70%;
            }
        }
    }
}

.news-card-section {
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    gap: 1.2rem 5rem;
    padding: 4rem 2rem;
    justify-content: center;
}
</style>