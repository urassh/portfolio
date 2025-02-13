<template>
    <div id="hero">
        <h1>urassh</h1>
        <h1>Code Portfolio</h1>
        <p>iOS / Flutter</p>
        <p>Web Development</p>
        <p>Unity</p>
    </div>
</template>

<style scoped>
#hero {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 64px;
    h1 {
        font-size: 84px;
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-bottom: 16px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
        margin-top: 16px;
        opacity: 0.6;
        font-weight: lighter;
        letter-spacing: 0.08em;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 48px;
        }

        p {
            font-size: 24px;
        }
    }
}
</style>