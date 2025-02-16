<script setup lang="ts">
import Header from './header.vue';
import Hero from './hero.vue';
import About from './about.vue';
import Skill from './skill.vue';
import Connection from './connection.vue';
import Works from './works.vue';
import Footer from './footer.vue';

const SITE_TITLE = "うらっしゅのポートフォリオサイト";

useHead(
    () => ({
        title: SITE_TITLE,
        meta: [
            {
                name: "description",
                content: "urassh portfolio"
            }
        ]
    })
);
</script>

<template>
    <Header />

    <div class="black-boxes">
        <Hero />
        <About />
        <Skill />
        <Works />
    </div>

    <div class="white-boxes">
        <Connection />
    </div>

    <Footer />
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: "Dela Gothic One", sans-serif;
    list-style: none;
}

.white-boxes {
    width: 100%;
    padding: 64px;
    background-color: #fff;
    background-image: 
        linear-gradient(#8888882b 1px, transparent 1px),
        linear-gradient(to right, #8888882b 1px, #fff 1px);
    background-size: 16px 16px;
    animation: moveUV 50s linear infinite;
}

.white-boxes :is(h1, h2, h3, h4, h5, h6, p, span, a, li, div) {
    color: #333;
}

.black-boxes {
    width: 100%;
    padding: 64px 0;
    background-color: #000;
    background-image: 
        linear-gradient(#ffffff2b 1px, transparent 1px),
        linear-gradient(to right, #ffffff2b 1px, #000 1px);
    background-size: 16px 16px;
    animation: moveUV 50s linear infinite;
}

@keyframes moveUV {
    from {
        background-position: 100% 100%;
    }
    to {
        background-position: 100% 0%;
    }
}
</style>