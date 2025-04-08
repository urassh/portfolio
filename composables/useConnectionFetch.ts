import type { Connection } from '@/types/connection';

export const useConnectionFetch = () => {
    const connection = ref<Connection[]>([]);

    const fetchConnection = async () => {
        try {
            const response = await fetch('/api/connection');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            connection.value = await response.json();
        } catch (error) {
            console.error('Error fetching works:', error);
        }
    };

    return {
        connection,
        fetchConnection,
    };
}
