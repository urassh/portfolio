<script setup lang="ts">
import ConnectionJem from "~/components/ConnectionJem.vue";
import { onMounted } from "vue";
import { useConnectionFetch } from "~/composables/useConnectionFetch";

const { connections, fetchConnections } = useConnectionFetch();
onMounted(async () => {
    await fetchConnections();
});

</script>

<template>
    <div id="connection">
        <h2>Connection</h2>

        <ConnectionJem
            v-for="connection in connections"
            :key="connection.slug"
            v-bind="connection"
        />
    </div>
</template>

<style scoped>
#connection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 40px;
    margin-bottom: 80px;

    h2 {
        font-size: 40px;
    }
}
</style>
