<template>
    <div id="contact">
        <h2>Contact</h2>

        <div class="sns">
            <a href="https://x.com/urassh_engineer", target="_blank">X (Twitter)@urassh_engineer</a>
            <a href="https://www.instagram.com/urassh_engineer", target="_blank">Instagram@urassh_engineer</a>
            <a href="https://www.facebook.com/shuto.1011", target="_blank">Facebook@shuto.1011</a>
            <a href="https://github.com/urassh", target="_blank">GitHub@urassh</a>
            <a href="https://www.wantedly.com/id/urassh", target="_blank">Wantedly@urassh</a>
        </div>
    </div>
</template>


<style scoped>
#contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border: 1px solid #888;
    background-color: #f3f3f3a1;
    padding-top: 32px;
    padding-bottom: 32px;
    border-radius: 16px;
    margin: 40px auto 80px;
    max-width: 1000px;

    h2 {
        text-align: center;
        font-size: 40px;
        width: 80%;
        border-bottom: 1px solid #333;
        padding-bottom: 8px;
    }

    .sns {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 16px;
        width: 80%;
        

        a {
            text-decoration: none;
            font-size: 24px;
            font-weight: bold;
            transition: transform 0.2s ease, font-weight 0.2s ease-in-out, border-bottom 0.2s ease;
        }

        a:hover {
            transform: scale(1.1);
            border-bottom: 1px solid #333;
        }
    }
}

@media (max-width: 600px) {
    #contact {
        padding-top: 16px;
        padding-bottom: 16px;

        h2 {
            font-size: 20px;
        }

        .sns {
            width: 90%;

            a {
                font-size: 16px;
            }
        }
    }
}
</style>