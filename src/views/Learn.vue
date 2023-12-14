<template>
    <div class="learn-container">
        <ArbitaryNav />
        <div class="bg"></div>
        <div class="content">
            <Solidity />
            <BlockChain />
            <Web3 />
        </div>
    </div>
</template>
<script>
import Solidity from '../components/Learn/Solidity.vue';
import BlockChain from '../components/Learn/BlockChain.vue';
import Web3 from '../components/Learn/Web3.vue';
import ArbitaryNav from '../components/Widgets/ArbitaryNav.vue';
export default {
    name: "Learn",
    components: {
        Solidity,
        BlockChain,
        Web3,
        ArbitaryNav
    }
}
</script>
<style lang="scss" scoped>
.learn-container::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: #F5F5F5;
}

.learn-container::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
}

.learn-container::-webkit-scrollbar-thumb {
    background-color: #000000;
}

.learn-container {
    width: -webkit-fill-available;
    position: relative;
    overflow-x: hidden;




    .bg {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: -webkit-fill-available;
        /* Cover at least the viewport */
        background: rgb(37, 204, 247);
        background: linear-gradient(-180deg, $c4 0%, $c1 100%);
    }

    .content {
        position: relative;
        z-index: 10;
    }
}
</style>

<style lang="scss">
/* Global styles including scrollbar customization */
.learn-container::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: #f5f5f5;
}

.learn-container::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
}

.learn-container::-webkit-scrollbar-thumb {
    background-color: #000000;
}
</style>