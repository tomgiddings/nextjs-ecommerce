// Interfaces for application

export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    price?: number
    createdAt?: string;
}