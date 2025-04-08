<script setup lang="ts">
import type { Connection } from '~/types/connection';

defineProps<Connection>();
</script>

<template>
    <div id="connection-jem">
        <h3 class="connection-title">{{ title }}</h3>

        <p class="connection-date">
            <span>{{ begin }}</span>
            <span>~</span>
            <span>{{ end }}</span>
        </p>

        <h4 class="connection-position">{{ position }}</h4>

        <ul>
            <li v-for="(feature, index) in features" :key="index">
                {{ feature }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
#connection-jem {
    width: 95%;
    max-width: 800px;
    padding: 32px;
    border: 1px solid #888;
    border-radius: 16px;
    background-color: #f3f3f3a1;

    .connection-title {
        font-size: 42px;
    }

    .connection-position {
        margin-bottom: 12px;
        font-size: 42px;
        opacity: 0.4;
    }

    .connection-date {
        font-size: 12px;
        opacity: 0.4;
    }

    p {
        font-weight: bold;
    }

    li {
        font-weight: bold;
        margin-bottom: 12px;
    }   
}

@media (max-width: 600px) {
    #connection-jem {
        padding: 16px;

        .connection-title {
            font-size: 20px;
        }

        .connection-date {
            font-size: 8px;
        }

        .connection-position {
            font-size: 18px;
        }

        li {
            font-size: 12px;
        }
    }
}
</style>
