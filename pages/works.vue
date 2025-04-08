<script setup lang="ts">
import { ref } from "vue";
import type { Work } from "~/types/work";

const selectedWork = ref<Work | null>(null);
const { works, fetchWorks } = useWorksFetch();
const isModalOpen = ref(false);
const openModal = (work: Work) => {
    selectedWork.value = work;
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
};

onMounted(async () => {
    await fetchWorks();
});
</script>

<template>
    <div id="works">
        <img src="/public/works.png" alt="" class="title">
        <div class="container">
            <div v-for="work in works" :key="work.slug" class="card" @click="openModal(work)">
                <img :src="work.image" :alt="work.slug">
            </div>
        </div>

        <div class="modal-overlay" :class="{ active: isModalOpen }" @click="closeModal">
            <transition name="fade">
                <div v-if="isModalOpen" class="modal" @click.stop>
                    <img :src="selectedWork!.image" :alt="selectedWork!.slug">
                    <div class="content">
                        <h3>{{ selectedWork!.title }}</h3>
                        <p>{{ selectedWork!.subtitle }}</p>
                        <p>{{ selectedWork!.description }}</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
#works {
    padding: 4vw 8vw;
}

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
    position: relative;
    width: 400px;
    aspect-ratio: 5 / 3.2;
    border-radius: 12px;
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 1.3s ease-in-out;
    transition-timing-function: ease;
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(0, 110, 255, 0.7), 0 2px 5px rgba(0, 0, 0, 0.6);
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card::after {
    position: absolute;
    display: block;
    box-sizing: content-box;
    content: "";
    opacity: 0;
    left: 0;
    top: 50%;
    width: 100%;
    height: 0;
    background: linear-gradient(100deg, #C717FC 0%, #A817FC 50.25%, #8A17FC 68.5%, #5CFFFF 99.99%) no-repeat;
    background-size: 5px 100%;
    background-position: left, right;
    transition: top 0.6s, height 0.6s, opacity 0.6s;
    transition-timing-function: ease;
}

.card:hover::after {
    top: 0;
    height: 100%;
    opacity: 1;
}

/* モーダル関連 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0); /* 初期状態は透明 */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;
    pointer-events: none;
}
.modal-overlay.active {
    background: rgba(0, 0, 0, 0.7);
    pointer-events: auto;
}

.modal {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(12px);
    color: black;
    border: 1px solid #ffffff24;
    border-radius: 12px;
    max-width: 400px;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.modal h3 {
    margin-bottom: 10px;
}

.modal p {
    font-size: 12px;
}

.content {
    padding: 24px;
}

button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

/* トランジション */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: scale(1);
}

@media (max-width: 600px) {
    .title {
        height: 60px;
        margin-bottom: 4vw;
    }
    .card {
        width: 80%;
        aspect-ratio: 5 / 3.2;
    }
    .modal {
        max-width: 80%;
    }
}
</style>