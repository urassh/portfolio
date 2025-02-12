<template>
    <div id="works">
        <img src="/public/works.png" alt="" class="title">

        <div class="container">
            <img src="/public/works/Gitagram.png" alt="gitagram" class="card" width="400">
            <img src="/public/works/WAGIRI.png" alt="gitagram" class="card" width="400">
            <img src="/public/works/AIStrike.png" alt="gitagram" class="card" width="400">
            <img src="/public/works/Stampy.png" alt="gitagram" class="card" width="400">
            <img src="/public/works/Zenn.png" alt="gitagram" class="card" width="400">
            <img src="/public/works/Game.png" alt="gitagram" class="card" width="400">
        </div>
    </div>
</template>

<style scoped>
#works {
    padding: 4vw 8vw;

    .title {
        height: 80px;
        margin-bottom: 4vw;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

}
</style>