
export type ProductType = "digital" | "coaching" | "workshop";

export type Product = {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    type: ProductType;
    isActive: boolean;
};
