<template>
    <div id="works">
        <img src="/public/works.png" alt="" class="title">

        <div class="container">
            <img src="/public/works/Gitagram.png" alt="gitagram" class="card">
            <img src="/public/works/WAGIRI.png" alt="gitagram" class="card">
            <img src="/public/works/AIStrike.png" alt="gitagram" class="card">
            <img src="/public/works/Stampy.png" alt="gitagram" class="card">
            <img src="/public/works/Zenn.png" alt="gitagram" class="card">
            <img src="/public/works/Game.png" alt="gitagram" class="card">
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

    .card {
        width: 400px;
    }
}

@media (max-width: 600px) {
    #works {
        .title {
            height: 60px;
            margin-bottom: 4vw;
        }

        .card {
            width: 80%;
        }
    }
}
</style>