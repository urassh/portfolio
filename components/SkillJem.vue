<script setup lang="ts">
defineProps({
    imageName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    years: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <div class="skill-jem__container">
        <img :src="`/skills/${imageName}`" :alt="title" class="skill-image" />
        <div class="text">
            <h3 class="title">{{ title }}</h3>
            <p class="year">{{ years }} {{ years == 1 ? "year" : "years"}}</p>
        </div>
    </div>
</template>

<style scoped>
.skill-jem__container {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-bottom: 32px;
    width: 280px;

    .text {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .title {
            font-size: 20px;
            font-weight: bold;
        }

        .year {
            font-size: 12px;
            opacity: 0.6;
        }
    }
}

.skill-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}


</style>