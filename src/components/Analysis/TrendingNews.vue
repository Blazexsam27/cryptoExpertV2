<template>
    <div class="trending-news">
        <div class="filter-section"></div>
        <div class="body" v-for="item of this.trendingNewsList">
            <TrendingNewsCard :title="item.title" :body="item.body" :date="item.published_on" />
            <hr class="vert-line" />
        </div>
    </div>
</template>
<script>
import TrendingNewsCard from '../Widgets/TrendingNewsCard.vue';
import newsService from '../../services/news.service';
import { unixTimeStampToDate } from "../../utils/dateTimeConvertor";
export default {
    name: "TrendingNews",
    components: {
        TrendingNewsCard
    },
    data() {
        return {
            trendingNewsList: []
        }
    },
    mounted() {
        this.getTrendingNews();
        console.log("c", this.trendingNewsList)
    },
    methods: {
        async getTrendingNews() {
            try {
                const result = await newsService.getNewsFromCache();
                let newsList = [];
                for (let item of result) {
                    newsList.push({ title: item.title, body: item.body, published_on: unixTimeStampToDate(item.published_on) })
                }
                this.trendingNewsList = newsList.slice(0, 7);
            } catch (error) {
                this.$toast.open({
                    message: "Error occured",
                    type: "error",
                    duration: 3000
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.trending-news {
    @include common-dflex-column;
    width: 100%;
    border-radius: 10px;
    box-shadow: $box-shadow;
    height: fit-content;
    min-height: 55vh;

    .body {
        @include common-dflex-column;

        .vert-line {
            width: 96%;
            border: 1px solid $lightgray50;
        }
    }
}
</style>