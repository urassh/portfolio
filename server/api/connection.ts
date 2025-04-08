import type { Connection } from "~/types/connection";

export default defineEventHandler(async (event) => {
    const connections: Connection[] = [
        {
            slug: "tokyocityuniversity",
            title: "東京都市大学",
            position: "Student",
            begin: new Date("2023-04-01"),
            end: undefined,
            features: [
                "メディア情報学部 情報システム学科",
                "デジタルコンテンツ研究会 プログラミング班 班長",
                "横浜祭実行委員会"
            ],
        },
        {
            slug: "lifeistech",
            title: "ライフイズテック株式会社",
            position: "Mentor",
            begin: new Date("2023-04-01"),
            end: undefined,
            features: [
                "Minecraftプログラミングコース",
                "Unityゲームプログラミングコース",
                "iPhoneアプリプログラミングコース"
            ],
        },
        {
            slug: "voiceutopia",
            title: "株式会社Voice Utopia",
            position: "Engineer Intern",
            begin: new Date("2023-04-01"),
            end: new Date("2023-06-01"),
            features: [
                "Flutterを用いたモバイルアプリ開発",
                "アカウントページのUI改善",
                "PayPay決済利用のモバイル対応",
            ],
        },
        {
            slug: "progate",
            title: "株式会社Progate",
            position: "Support",
            begin: new Date("2024-11-01"),
            end: undefined,
            features: [
                "Progateハッカソンのサポート",
                "都市大ハッカソンの協賛",
                "学生アンバサダー",
            ],
        },
        {
            slug: "lovegraph",
            title: "株式会社ラブグラフ",
            position: "Engineer Intern",
            begin: new Date("2024-11-01"),
            end: undefined,
            features: [
                "出張撮影サービス「ラブグラフ」のバックエンド開発",
                "二要素認証の実装",
                "カメラマンのメモ機能の実装",
            ],
        },
        {
            slug: "42tokyo",
            title: "42Tokyo",
            position: "Student",
            begin: new Date("2025-03-01"),
            end: undefined,
            features: [
                "24日間の入学試験 Piscine合格",
                "C言語を用いたプログラミング",
            ],
        },
    ];
    return connections;
});
