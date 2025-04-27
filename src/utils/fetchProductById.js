import { productApiUrl } from "@/constants/products";

const fetchProductById = async (id) => {
    const product = await fetch(`${productApiUrl}/find/${id}`)
    
    if (product.status === 200) {
        const result = await product.json();
        return result.product;
    }
}

export default fetchProductById