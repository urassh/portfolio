export interface Connection {
    slug: string;
    title: string;
    position: string;
    begin: Date;
    end: Date | undefined;
    features: string[];
}
