<template>
    <div id="skill">
        <img src="/public/skills.png" alt="" class="title">

        <div class="container">
            <SkillJem imageName="swift.png" title="Swift" :years="3" />
            <SkillJem imageName="flutter.png" title="Flutter" :years="3" />
            <SkillJem imageName="unity.png" title="Unity" :years="3" />
            <SkillJem imageName="firebase.png" title="Firebase" :years="3" />
            <SkillJem imageName="nuxt.png" title="Nuxt" :years="1" />
            <SkillJem imageName="rails.png" title="Ruby on Rails" :years="1" />
        </div>
    </div>
</template>

<style scoped>
#skill {
    padding: 4vw 8vw;
    

    .title {
        width: 30%;
        margin-bottom: 4vw;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }


    @media (max-width: 768px) {
        
    }
}
</style>