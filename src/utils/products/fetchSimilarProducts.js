import { productApiUrl } from "@/constants/products";

const fetchSimilarProducts = async (id) => {
    const products = await fetch(`${productApiUrl}/${id}/similar`);
    
    if (products.status === 200) {
        const result = await products.json();
        return result.products;
    } else {
        return [];
    }
}

export default fetchSimilarProducts