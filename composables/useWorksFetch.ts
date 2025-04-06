import type { Work } from '@/types/work';

export const useWorksFetch = () => {
    const works = ref<Work[]>([]);

    const fetchWorks = async () => {
        try {
            const response = await fetch('/api/works');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            works.value = await response.json();
        } catch (error) {
            console.error('Error fetching works:', error);
        }
    };

    return {
        works,
        fetchWorks,
    };
}