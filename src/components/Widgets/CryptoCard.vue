<!-- Component for showing treding crpyto currencies -->
<template>
    <div class="crypto-card">
        <div class="upper">
            <div class="left">
                <!-- Icon -->
                <v-icon name="co-bitcoin" />
            </div>
            <div class="right">
                <div class="head">Bitcoin</div>
                <div class="subhead">$35000</div>
            </div>
        </div>
        <hr class="vert-line" />
        <div class="lower">
            <v-icon class="icon" name="md-datasaveroff" />Learn More
        </div>
    </div>
</template>
<script>
export default {
    name: "CryptoCard"
}
</script>
<style lang="scss" scoped>
.crypto-card {
    @include common-dflex-column;
    width: 280px;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 0 0 7px -3px $c4;
    padding: 2px 1rem 0.6rem 1rem;

    .upper {
        @include common-dflex-space-between-no-align;
        margin-top: 1rem;

        .left {
            svg {
                width: 50px;
                height: 50px;
            }
        }

        .right {
            @include common-dflex-column;

            .head {
                font-size: 1.2rem;
                font-weight: bold;
            }

            .subhead {
                font-size: 14px;
                font-weight: 600;
            }
        }
    }

    .vert-line {
        width: 100%;
        margin-bottom: 2px;
        margin-top: 2.5rem;
    }

    .lower {
        display: flex;
        justify-content: start;
        margin: 5px 0 5px 2px;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        transition: 0.6s;

        .icon {
            transform: rotate(0deg);
            transition: .5s;
        }

        &:hover {
            color: $c4;

            .icon {

                transform: rotate(50deg) scale(1.3);
                transition: 0.6s;
                fill: $c2;
            }
        }
    }
}
</style>