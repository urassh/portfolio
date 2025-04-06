import type { Skill } from "~/types/skill";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.imageBaseUrl;
    const imageUrl = `${baseUrl}skills/`;

    const skills: Skill[] = [
        {
            slug: "swift",
            title: "Swift",
            year: 4,
            image: `${imageUrl}swift.png`,
        },
        {
            slug: "flutter",
            title: "Flutter",
            year: 2,
            image: `${imageUrl}flutter.png`,
        },
        {
            slug: "java",
            title: "Java",
            year: 3,
            image: `${imageUrl}java.png`,
        },
        {
            slug: "unity",
            title: "Unity",
            year: 2,
            image: `${imageUrl}unity.png`,
        },
        {
            slug: "nuxt",
            title: "Nuxt",
            year: 1,
            image: `${imageUrl}nuxt.png`,
        },
        {
            slug: "firebase",
            title: "Firebase",
            year: 3,
            image: `${imageUrl}firebase.png`,
        },
        {
            slug: "aws",
            title: "AWS",
            year: 1,
            image: `${imageUrl}aws.png`,
        },
        {
            slug: "docker",
            title: "Docker",
            year: 1,
            image: `${imageUrl}docker.png`,
        },
        {
            slug: "rails",
            title: "Ruby on Rails",
            year: 1,
            image: `${imageUrl}rails.png`,
        },
    ];
    return skills;
});