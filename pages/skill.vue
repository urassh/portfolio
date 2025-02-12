<template>
    <div id="skill">
        <img src="/public/skills.png" alt="" class="title">

        <div class="container">
            <SkillJem imageName="swift.png" title="Swift" :years=3 />
            <SkillJem imageName="flutter.png" title="Flutter" :years=3 />
            <SkillJem imageName="unity.png" title="Unity" :years=2 />
            <SkillJem imageName="firebase.png" title="Firebase" :years=3 />
            <SkillJem imageName="nuxt.png" title="Nuxt" :years=1 />
            <SkillJem imageName="rails.png" title="Ruby on Rails" :years=1 />
        </div>
    </div>
</template>

<style scoped>
#skill {
    padding: 4vw 8vw;
    margin-bottom: 200px;

    .title {
        height: 80px;
        margin-bottom: 4vw;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 4vw;
    }


    @media (max-width: 768px) {
        
    }
}
</style>