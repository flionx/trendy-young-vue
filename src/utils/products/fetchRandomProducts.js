import { productApiUrl } from "@/constants/products";

export async function fetchRandomProducts() {
    const products = await fetch(`${productApiUrl}/random`);
    
    if (products.status === 200) {
        const result = await products.json();
        return result.products;
    } else {
        return [];
    }
}