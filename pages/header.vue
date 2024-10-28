<!-- Header.vue -->
<template>
    <header>
        <h1 class="header-title">urassh@developer</h1>
    </header>
</template>

<style scoped>
header {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 12px 32px;
    position: fixed;
    top: 0;
    width: 100%;
}

.header-title {
    display: inline-block;
    font-weight: 600;
    font-size: 42px;
    background: linear-gradient(90deg, #8A17FC 24%, #5CFFFF 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>