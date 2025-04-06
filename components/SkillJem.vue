<script setup lang="ts">
import type { Skill } from '~/types/skill';

defineProps<Skill>();
</script>

<template>
  <div class="skill-jem__container">
    <img :src="image" :alt="slug" class="skill-image" />
    <div class="text">
      <h3 class="title">{{ title }}</h3>
      <p class="year">{{ year }} {{ year === 1 ? 'year' : 'years' }}</p>
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
}

.text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.year {
  font-size: 12px;
  opacity: 0.6;
}

.skill-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
</style>