<template>
    <div class="trending-keyword-card">
        <div class="left">{{ this.text }}</div>
        <div class="right">
            <ProgressBar :progress="this.progress" />
        </div>
    </div>
</template>
<script>
import ProgressBar from './ProgressBar.vue';
export default {
    name: "TrendingKeywordCard",
    props: {
        text: String,
        progress: Number
    },
    components: {
        ProgressBar
    }
}
</script>
<style lang="scss">
.trending-keyword-card {
    width: 100%;
    height: 35px;
    box-shadow: $box-shadow;
    border-left: 5px solid $c5;
    padding: .5rem 2rem;
    @include common-dflex-space-between;
    color: $c4;

    .left {
        width: 20%;
    }

    .right {
        width: 80%;
    }
}
</style>