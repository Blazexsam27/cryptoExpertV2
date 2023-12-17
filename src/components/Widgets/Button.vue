<template>
    <div class="custom-button">
        {{ this.text }}
    </div>
</template>
<script>
export default {
    name: "Button",
    props: {
        text: String
    }
}
</script>
<style lang="scss" scoped>
.custom-button {
    width: fit-content;
    height: fit-content;
    padding: .5rem 2rem;
    background: $c1;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 7px -3px $shadow;
    transition: .4s;
    cursor: pointer;
    color: $white;

    &:hover {
        transition: .4s;
        transform: scale(.98);
        opacity: .8;
    }

    @media(max-width: 600px) {
        padding: .5rem 1rem;
    }
}
</style>