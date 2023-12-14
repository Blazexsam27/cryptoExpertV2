<template>
    <div class="home-container">
        <section class="section-1">
            <Navbar @scroll-to-explore="handleScrollToExplore" />
            <CustomParticles backgroundColor="#130f40" />
            <MidSectionContent />
            <ThirdSectionContent />
            <ExploreTopSection ref="exploreSection" />
        </section>
    </div>
</template>
<script>
import CustomParticles from "../components/ParticleJs/ParticleJs.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import MidSectionContent from "../components/Home/MidSectionContent.vue";
import ThirdSectionContent from "../components/Home/ThirdSectionContent.vue";
import ExploreTopSection from "../components/Home/ExploreTopSection.vue";
export default {
    name: "Home",
    components: {
        CustomParticles,
        Navbar,
        MidSectionContent,
        ThirdSectionContent,
        ExploreTopSection
    },
    methods: {
        handleScrollToExplore() {
            const exploreComponent = this.$refs.exploreSection;
            if (exploreComponent) {
                exploreComponent.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

}
</script>
<style lang="scss" scoped>
.home-container {
    width: 100%;
    height: 100vh;
    position: relative;

    .section-1 {
        width: 100%;
        height: 60vh;
    }
}
</style>