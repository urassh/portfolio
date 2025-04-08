import type { Work } from "~/types/work";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.imageBaseUrl;
    const imageUrl = `${baseUrl}works/`;

    const works: Work[] = [
        {
            slug: "gitagram",
            title: "Gitagram",
            image: `${imageUrl}Gitagram.png`,
            subtitle: "GitHubをインスタ感覚で交換できるアプリ",
            description: "GitHubをインスタ感覚で交換できるアプリです。",
        },
        {
            slug: "stampy",
            title: "Stampy",
            image: `${imageUrl}Stampy.png`,
            subtitle: "褒め合いで続く、新しいTodo管理アプリ",
            description: "LINEヤフーが主催しているOpenHackU2024で開発したアプリです。",
        },
    ];

    return works;
});
