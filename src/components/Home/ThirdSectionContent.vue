<template>
    <div class="third-section-content">
        <div class="container">
            <div class="left">
                <Card heading="Head1" logo="logo" desc="desc1" />
                <Card heading="Head1" logo="logo" desc="desc1" />
                <Card heading="Head1" logo="logo" desc="desc1" />
                <Card heading="Head1" logo="logo" desc="desc1" />
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