<script setup lang="ts">
import Header from './header.vue';
import Hero from './hero.vue';
import About from './about.vue';
import Skill from './skill.vue';
import ConnectionJem from '~/components/ConnectionJem.vue';

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

    <div class="black-boxes">
        <Hero />
        <About />
        <Skill />
    </div>

    <div class="white-boxes" id="connection">
        <h2>Connection</h2>

        <ConnectionJem
            connectionName="株式会社サンプル"
            position="エンジニア"
            startDate="2020-01-01"
            endDate="2023-12-31"
            :achivements="[
                'プロジェクトAの成功',
                '新製品Bの開発',
                'チームCのリーダーシップ'
            ]"
        />
    </div>
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
    animation: moveUV 10s linear infinite;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    h2 {
        font-size: 40px;
    }
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