<template>
    <div id="about">
        <h1>About</h1>
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
    padding: 4vw 8vw;

    h1 {
        font-size: 8vw;
        color: transparent;
        -webkit-text-stroke: 0.1vw #FFF;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
        .picture-container {
            width: 20%;
            position: relative;
            margin-top: 20px;

            .image-container {
                width: 240px;
                height: 240px;
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
                width: 240px;
                height: 240px;
                border:#ffffffac solid 0.2vw;
                border-radius: 24px;
            }

            &::after {
                position: absolute;
                top: 0;
                content: "";
                display: block;
                transform: rotate(-70deg);
                width: 240px;
                height: 240px;
                border:#ffffffac solid 0.2vw;
                border-radius: 24px;
            }
        }
        

        .profile-container {
            width: 50%;
            h2 {
                font-size: 4vw;
                margin-bottom: 2vw;
                text-shadow: black;
            }

            p {
                font-size: 1vw;
                font-weight: thin;
                line-height: 2vw;
                opacity: 0.8;
            }
        }
    }

    /* スマートフォンなどの小さな画面向け */
    @media (max-width: 768px) {
        padding: 8vw 4vw;

        h1 {
            font-size: 15vw;
            -webkit-text-stroke: 0.2vw #FFF;
        }

        .profile-container {
            h2 {
                font-size: 8vw;
                margin-bottom: 4vw;
            }

            p {
                font-size: 4vw;
                line-height: 5vw;
                opacity: 0.8;
            }
        }
    }
}
</style>