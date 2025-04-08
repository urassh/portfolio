import type { Skill } from '~/types/skill';

export const useSkillsFetch = () => {
    const skills = ref<Skill[]>([]);

    const fetchSkills = async () => {
        try {
            const response = await fetch('/api/skills');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            skills.value = await response.json();
        } catch (error) {
            console.error('Error fetching works:', error);
        }
    };

    return {
        skills,
        fetchSkills,
    };
}