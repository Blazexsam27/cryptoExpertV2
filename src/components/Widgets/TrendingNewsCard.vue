<template>
    <a :href="url" target="_blank">
        <div class="trending-news-card">
            <div class="left">
                <div class="header">{{ title.slice(0, 60) }}...</div>
                <div class="desc">{{ body.slice(0, 100) }}</div>
            </div>
            <div class="right">
                <div class="datetime">{{ date }}</div>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    name: "TrendingNewsCard",
    props: {
        title: String,
        body: String,
        date: String,
        url: String
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
}

.trending-news-card {
    width: 94%;
    padding: 1rem;
    @include common-dflex-space-between;
    cursor: pointer;

    &:hover {
        background: $lightgray;
    }

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