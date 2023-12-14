<template>
    <div class="card-container" data-aos="zoom-in-up" data-aos-duration="1500">
        <div class="logo"><v-icon name="ai-coursera-square" /></div>
        <div class="heading">{{ heading }}</div>
        <div class="desc">{{ desc }}</div>
    </div>
</template>
<script>
import { onMounted } from "vue";
import AOS from "aos";
export default {
    name: "Card",
    props: {
        logo: String,
        heading: String,
        desc: String
    },
    setup() {
        onMounted(() => {
            AOS.init();
        });
    }
}
</script>
<style lang="scss" scoped>
.card-container {
    @include common-dflex-column;
    max-width: 300px;
    height: fit-content;

    .logo {
        margin-bottom: .8rem;

        svg {

            fill: $c1;
            width: 35px;
            height: 35px;
        }
    }

    .heading {
        font-size: 1.1rem;
        color: $c1;
        font-weight: 600;
    }

    .desc {
        font-size: 14px;
        color: $c4;
        line-height: 1.4rem;
        margin-top: .5rem;
    }
}
</style>