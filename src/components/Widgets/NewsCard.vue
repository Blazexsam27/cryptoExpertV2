<template>
    <a class="news-card" :href="this.source" target="_blank">
        <div class="left">
            <div class="news-text">
                <div class="header">{{ this.newsTitle }}</div>
                <div class="desc">{{ this.newsDesc.slice(0, 100) }}...</div>
            </div>

            <div class="date">23/11/2023</div>
        </div>
        <div class="right">
            <img :src="this.imgUrl" :alt="this.newsTitle">
        </div>
    </a>
</template>
<script>
export default {
    name: "NewsCard",
    props: {
        imgUrl: String,
        newsTitle: String,
        newsDesc: String,
        source: String
    },
    data() {
        return {
            temp: import.meta.env.VITE_CRYPTO_API_KEY
        }
    },

}
</script>
<style lang="scss" scoped>
.news-card {
    display: flex;
    width: 550px;
    height: fit-content;
    border-left: 4px solid $c5;
    padding: 1rem;
    box-shadow: $box-shadow;

    .left {
        @include common-dflex-column-space-between;
        width: 60%;

        .news-text {
            @include common-dflex-column;
            gap: 10px;
        }

        .header {
            font-size: calc($subheader - 7px);
            font-weight: 600;
            color: $c4;

        }

        .desc {
            font-size: 1rem;
            color: $c480;
        }

        .date {
            display: flex;
            justify-content: start;
            opacity: .8;
            font-size: 14px;
        }
    }

    .right {
        width: 40%;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &:hover {
        background: $c480;
        color: $white;
        border-left: 4px solid $c1;
        transition: .5s;

        .left {

            transition: .5s;

            .header,
            .desc {
                color: $white;
            }
        }
    }
}
</style>