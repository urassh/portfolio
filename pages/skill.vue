<script setup lang="ts">
import SkillJem from "~/components/SkillJem.vue";

const { skills, fetchSkills } = useSkillsFetch();

onMounted(async () => {
    await fetchSkills();
});
</script>

<template>
    <div id="skill">
        <img src="/public/skills.png" alt="" class="title">

        <div class="container">
            <SkillJem v-for="skill in skills" :key="skill.slug" v-bind="skill" />
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
}

@media (max-width: 600px) {
    #skill {
        .title {
            height: 60px;
            margin-bottom: 4vw;
        }
    }
}
</style>