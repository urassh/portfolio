import type { Connection } from '@/types/connection';

export const useConnectionFetch = () => {
    const connections = ref<Connection[]>([]);

    const fetchConnections = async () => {
        try {
            const response = await fetch('/api/connection');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            connections.value = await response.json();
        } catch (error) {
            console.error('Error fetching works:', error);
        }
    };

    return {
        connections,
        fetchConnections,
    };
}
