import type { Work } from "~/types/work";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.imageBaseUrl;
    const imageUrl = `${baseUrl}works/`;

    const works: Work[] = [
        {
            slug: "zenn",
            title: "作って学ぼう WEBアプリ開発入門",
            image: `${imageUrl}_zenn.png`,
            subtitle: "「大学の最終課題が鬼すぎる」から生まれたWEB開発入門書",
            description: "PythonのFlaskというライブラリやDockerを用いて本格的なWEB開発を基礎概念から学び、WEB開発をハンズオン形式で実践できます。",
        },
        {
            slug: "stampy",
            title: "Stampy",
            image: `${imageUrl}_stampy.png`,
            subtitle: "褒め合いで続く、新しいTodo管理アプリ",
            description: "LINEヤフーが主催しているOpenHackU2024で開発したアプリです。",
        },
        {
            slug: "aistrike",
            title: "AI Strike",
            image: `${imageUrl}_ai_strike.png`,
            subtitle: "AIを使った新しいストライクゲーム",
            description: "Google Developer Student Clubのハッカソンで開発したアプリです。Googleの社員さんが選出する技術賞を受賞しました。",
        },
        {
            slug: "wagiri",
            title: "WAGIRI!!",
            image: `${imageUrl}_wagiri.png`,
            subtitle: "寿司打をスマホフリック入力で楽しめるアプリ。",
            description: "寿司打をスマホフリック入力で楽しめるアプリです。第二回Progateハッカソンにて最優秀賞を受賞しました。",
        },
        {
            slug: "gitagram",
            title: "Gitagram",
            image: `${imageUrl}_gitagram.png`,
            subtitle: "GitHubをインスタ感覚で交換できるアプリ",
            description: "GitHubをインスタ感覚で交換できるアプリです。",
        },
        {
            slug: "game",
            title: "宇宙から落下して生身で生き残れ!!",
            image: `${imageUrl}_game.png`,
            subtitle: "Unityで開発した2Dのアクションゲーム",
            description: "制限時間やプレイヤーの状態を気にしながら障害物を交わしながら、地上に到達するのがあなたのミッションです。",
        },
    ];

    return works;
});
