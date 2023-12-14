<template>
    <div class="arbitary-nav">
        <router-link to="/">Crypto Expert</router-link>
    </div>
</template>
<script>
export default {
    name: "ArbitrayNav"
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    color: $c1;
}

.arbitary-nav {
    display: flex;
    justify-content: start;
    padding: 1.5rem;
    font-weight: 600;
    font-size: $text;
    transition: .5s;
    height: 40px;
    position: relative;
    z-index: 25;

    &:hover {
        transition: .5s;
        color: $c2;
        font-size: 1.2rem;
        transform: skewX(-20deg);
    }
}
</style>