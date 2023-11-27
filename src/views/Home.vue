<template>
    <div class="home-container">
        <section class="section-1">
            <Navbar />
            <CustomParticles backgroundColor="#130f40" />
            <MidSectionContent />
            <ThirdSectionContent />
            <ExploreTopSection />
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