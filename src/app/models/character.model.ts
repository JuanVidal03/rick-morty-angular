export interface Character{ 
    id: number;
    name: string;
    image: string;
    gender: string;
    species: string;
    status: string;
    location: {
        name: string;
    };
    origin: {
        name: string;
    };
}