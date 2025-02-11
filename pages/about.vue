<template>
    <div id="about">
        <img src="/public/about.png" alt="" class="title">

        <div class="container">
            <div class="picture-container">
                <div class="image-container">
                    <img src="/public/urassh.jpg" alt="">
                </div>
            </div>            

            <div class="profile-container">
                <h2>Shuto Urayama</h2>
                <p>
                    エンジニア学生 うらっしゅ(浦山秀斗)<br/>
                    モバイルアプリ開発やWeb開発を得意ととしており、これまで複数のアプリ開発を行い、
                    ハッカソンやインターンに参加してきた。
                    最近は、ドメイン駆動設計やリファクタリングに興味があり、そのアプリにとってより良い設計とは何かを日々考えている。
                    また、個人でもハッカソンの企画やUnityプログラミング講座の開講をするなど、プログラミングの教育活動も行っており、学生エンジニアがもっと活発にする活動に情熱を注いでいる。
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#about {
    padding: 90px;
    margin-bottom: 200px;

    .title {
        height: 80px;
        margin-bottom: 4vw;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 42px;
        
        .picture-container {
            width: 240px;
            position: relative;
            margin-top: 20px;

            .image-container {
                width: 200px;
                height: 200px;
                transform: rotate(-10deg);
                overflow: hidden;
                border-radius: 24px;
                position: relative;
                z-index: 1;

                img {
                    position: absolute;
                    top: -10%;
                    right: -28px;
                    width: 120%;
                    height: 120%;
                    
                    object-fit: cover;
                    transform: rotate(10deg);

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            &::before {
                position: absolute;
                top: 0;
                content: "";
                display: block;
                transform: rotate(-85deg);
                width: 200px;
                height: 200px;
                background: linear-gradient(45deg, rgba(255, 0, 255, 0.6), rgba(0, 255, 255, 0.6));
                border-radius: 24px;
                filter: blur(16px);
            }

            &::after {
                position: absolute;
                top: 0;
                content: "";
                display: block;
                transform: rotate(-70deg);
                width: 200px;
                height: 200px;
                background: linear-gradient(45deg, rgba(0, 255, 255, 0.6), rgba(255, 0, 255, 0.6));
                border-radius: 24px;
                filter: blur(16px);
            }
        }
        

        .profile-container {
            width: 500px;

            h2 {
                font-size: 40px;
                margin-bottom: 2vw;
                text-shadow: black;
            }

            p {
                font-size: 12px;
                font-weight: lighter;
                line-height: 24px;
                opacity: 0.8;
                text-wrap: balance;
                word-break: auto-phrase;
            }
        }
    }

    /* スマートフォンなどの小さな画面向け */
    @media (max-width: 900px) {
        .container {
            justify-content: flex-start;
        }        
    }
}
</style>