<script setup lang="ts">
import Header from './header.vue';
import Hero from './hero.vue';
import About from './about.vue';

const SITE_TITLE = "urassh@developer";

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

    <main id="back-pattern" class="boxes">
        <Hero />
        <About />
    </main>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: "Dela Gothic One", sans-serif;
}

#back-pattern {
    width: 100%;
    background-color: #000;
    padding: 64px 0;
}

.boxes {
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