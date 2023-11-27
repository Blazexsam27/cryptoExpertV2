<template>
    <div class="trending-news-card">
        <div class="left">
            <div class="header">{{ title.slice(0, 60) }}...</div>
            <div class="desc">{{ body.slice(0, 100) }}</div>
        </div>
        <div class="right">
            <div class="datetime">{{ date }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TrendingNewsCard",
    props: {
        title: String,
        body: String,
        date: String
    },
    mounted() {
        console.log("dffd", this.title)
    }
}
</script>
<style lang="scss" scoped>
.trending-news-card {
    width: 100%;
    padding: 1rem;
    @include common-dflex-space-between;

    .left {
        width: 75%;

        .header {
            font-weight: 600;
            color: $c480;
            font-weight: 14.5px;
        }

        .desc {
            font-size: 13.5px;
            color: $c2;
            margin-top: 5px;
        }
    }

    .right {
        width: 20%;
        color: $c2;
        font-size: 13px;
    }
}
</style>