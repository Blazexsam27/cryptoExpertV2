<template>
    <div class="about-container">
        <router-link to="/">

            <v-icon name="hi-solid-home" class="home-icon" />
        </router-link>
        <div class="left">
            ABOUT
        </div>
        <div class="right">
            <div>{{ this.aboutus1 }}</div>
            <div>{{ this.aboutus2 }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "About",
    data() {
        return {
            aboutus1: `Welcome to Crypto Expert, your hub for insightful analysis and visualization of the dynamic world of cryptocurrencies. 
                        Our platform is a culmination of expertise, powered by cutting-edge technology and a passion for the crypto realm.

                        At Crypto Expert, we offer a multifaceted experience tailored for both enthusiasts and learners. Our platform boasts 
                        an arsenal of tools, including a sophisticated LSTM model specifically trained for Bitcoin, capable of forecasting prices 
                        up to 30+ days into the future. Witness the power of predictive analytics and graphical representations that aid in 
                        understanding market trends and potential trajectories.
`
            ,
            aboutus2: `Dive into our learning section, meticulously crafted to unravel the intricate components of cryptocurrencies. Whether 
                        it's grasping the fundamentals of Web3, demystifying blockchain technology, or exploring other facets of this evolving 
                        landscape, our resources cater to your quest for knowledge.

                        However, a crucial note: While our insights are meticulously curated, we firmly advise against considering them as financial 
                        advice. The crypto market is famously volatile, and we urge all users to conduct their independent research and exercise caution
                        before making any investment decisions.
                        Crypto Expert stands as a portfolio project, a testament to our dedication to innovation and education within the crypto space. 
                        `
        }
    }

}
</script>
<style lang="scss" scoped>
.about-container {

    a {
        text-decoration: none;
        color: #fff;
    }

    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, rgba(19, 15, 64, 1) 0%, rgba(53, 31, 152, 1) 48%);
    color: #fff;
    position: relative;

    .home-icon {
        position: absolute;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        left: 50%;
        top: 2rem;
        transition: .5s;
        cursor: pointer;

        &:hover {
            transform: scale(1.3);
            transition: .5s;
        }
    }

    .left,
    .right {
        width: 50%;
        @include common-dflex-center;
    }

    .left {
        font-size: 10rem;
        letter-spacing: 2px;
        text-shadow: -9px 5px 1px #c2c2c2, 5px 0px 2px rgb(129, 0, 255);
    }

    .right {
        // white-space: pre;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0 2rem;

        div {
            line-height: 1.5rem;
        }
    }

    @media (max-width: 1001px) {
        flex-direction: column;
        align-items: center;

        .left,
        .right {
            align-items: center;
        }

        .right {
            width: 96%;
            margin: 1rem 2rem;
            padding: 0;
        }

        .left {
            width: 100%;
            padding: 3rem 0;
        }
    }

    @media (max-width: 660px) {
        .left {
            font-size: 7rem;
        }
    }
}
</style>