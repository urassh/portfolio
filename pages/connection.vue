<template>
    <div id="connection">
        <h2>Connection</h2>

        <ConnectionJem
            connectionName="ライフイズテック株式会社"
            position="Mentor"
            startDate="2023.4"
            :achivements="[
                'Minecraftプログラミングコース',
                'Unityゲームプログラミングコース',
                'iPhoneプログラミングコース'
            ]"
        />

        <ConnectionJem
            connectionName="株式会社VoiceUtopia"
            position="Flutter Engineer"
            startDate="2024.1"
            endDate="2024.6"
            :achivements="[
                'アプリUIの作成',
                'テスト実装',
                'API通信の実装'
            ]"
        />

        <ConnectionJem
            connectionName="株式会社Progate"
            position="Support"
            startDate="2024.6"
            :achivements="[
                'Progateハッカソン 学生メンター',
                '都市大ハッカソン協賛',
                '学生アンバサダー'
            ]"
        />

        <ConnectionJem
            connectionName="株式会社ラブグラフ"
            position="Engineer"
            startDate="2024.11"
            :achivements="[
                'メモ機能の開発',
                '2要素認証の実装',
                ''
            ]"
        />
    </div>
</template>

<style scoped>
#connection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    h2 {
        font-size: 40px;
    }
}
</style>