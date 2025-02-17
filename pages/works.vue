<script setup>
import { ref } from "vue";

const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<template>
    <div id="works">
        <img src="/public/works.png" alt="" class="title">

        <div class="container">
            <div class="card" @click="openModal()">
                <img src="/public/works/Gitagram.png" alt="gitagram">
            </div>
            <div class="card" @click="openModal()">
                <img src="/public/works/WAGIRI.png" alt="gitagram">
            </div>
            <div class="card" @click="openModal()">
                <img src="/public/works/AIStrike.png" alt="gitagram">
            </div>
            <div class="card" @click="openModal()">
                <img src="/public/works/Zenn.png" alt="gitagram">
            </div>
            <div class="card" @click="openModal()">
                <img src="/public/works/Stampy.png" alt="gitagram">
            </div>
            <div class="card" @click="openModal()">
                <img src="/public/works/Game.png" alt="gitagram">
            </div>
        </div>

        <!-- モーダル -->
        <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal" @click.stop>
                <img src="/public/works/Gitagram.png" alt="gitagram">

                <div class="content">
                    <h3>Gitagram</h3>
                    <p>顧客を身近に感じられる社内チャット</p>
                    <p>ビジネスをしているなら、顧客がいるならチャネルトークで会話をしてみましょう</p>

                    <!-- <button @click="closeModal">閉じる</button> -->
                </div>
                
                
            </div>
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
        position: relative;
        width: 400px;
        aspect-ratio: 5 / 3.2;
        border-radius: 12px;
        overflow: hidden;
        transition:box-shadow 0.3s ease, transform 1.3s ease-in-out;
        transition-timing-function: ease;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
            box-shadow:0 0 12px rgb(0, 110, 255, 0.7), 0 2px 5px rgba(0, 0, 0, 0.6);
        }
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
}

/* モーダル関連 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
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

@media (max-width: 600px) {
    #works {
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
}
</style>
