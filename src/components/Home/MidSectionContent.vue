<template >
    <div class="mid-section-content">
        <div class="container" v-wave="{ color: 'blue', duration: 5, }">
            <div class="subcontainer">
                <div>Analytics</div>
                <div>Get to use multiple visual statistics charts and graphs.</div>
            </div>
            <div class="subcontainer">
                <div>LSTM</div>
                <div>Get to use custom LSTM AI model to predict the future prices.</div>
            </div>
            <div class="subcontainer">
                <div>Realtime</div>
                <div>Get the realtime data and news for most popular crypto currencies</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MidSectionContent"
}
</script>
<style lang="scss" scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.mid-section-content {
    @include common-dflex-center;
    width: 100%;
    height: 200px;
    position: relative;
    z-index: 10;
    animation: fadeIn 1.5s ease-in-out forwards;
    opacity: 0;

    .container {
        @include common-dflex-space-between;
        width: 75%;
        height: 200px;
        border-radius: 20px;
        background: $white80;
        backdrop-filter: blur(0px) saturate(200%);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        padding: 1rem 2rem;
        position: absolute;
        top: -2rem;
        box-shadow: $box-shadow;

        .subcontainer {
            @include common-dflex-column;
            width: 25%;
            text-transform: capitalize;
            font-weight: bold;
            font-size: 2rem;
            color: $c4;
            text-align: center;
            gap: 1rem;

        }

        .subcontainer div:nth-child(2) {
            font-size: 13px;
            color: $c1;
            line-height: 1rem;
            font-weight: 400;
            text-shadow: 0 0 7px -2px $shadow;
        }
    }

    @media (max-width: 600px) {
        .container {
            width: 85%;
            flex-direction: column;
            height: fit-content;

            .subcontainer {
                width: 100%;
                height: 110px;
            }
        }
    }

}
</style>