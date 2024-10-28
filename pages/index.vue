<script setup lang="ts">
import Header from './header.vue';

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
        <div id="hero">
            <h1>urassh</h1>
            <h1>Code Portfolio</h1>
            <p>iOS / Flutter</p>
            <p>Web Development</p>
            <p>Unity</p>
        </div>
    </main>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#back-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: -1;
}

.boxes {
    background-image: 
        linear-gradient(#ffffff2b 1px, transparent 1px),
        linear-gradient(to right, #ffffff2b 1px, #000 1px);
    background-size: 16px 16px;
    animation: moveUV 60s linear infinite;
}

@keyframes moveUV {
    from {
        background-position: 100% 100%;
    }
    to {
        background-position: 100% 0%;
    }
}

header {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 12px 32px;
    position: fixed;
    top: 0;
    width: 100%;
    .header-title {
        display: inline-block;
        font-weight: 600;
        font-size: 42px;
        background: linear-gradient(90deg, #8A17FC 24%, #5CFFFF 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

#hero {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 64px;
    h1 {
        font-size: 84px;
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-bottom: 16px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
        margin-top: 16px;
        opacity: 0.6;
        font-weight: lighter;
        letter-spacing: 0.08em;
    }
}



</style>