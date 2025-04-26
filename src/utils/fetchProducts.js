import { productApiUrl } from "@/constants/products";

export async function fetchProducts(filters) {
    const query = new URLSearchParams(filters);    
    const products = await fetch(`${productApiUrl}/?${query.toString()}`);
    
    if (products.status === 200) {
        const result = await products.json();
        return result.products;
    } else {
        return [];
    }
}