import { productApiUrl } from "@/constants/products";

const fetchCreateProduct = async (currProduct) => {
    const createdProduct = await fetch(`${productApiUrl}/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(currProduct),
    })

    if (createdProduct.status === 201) {
        const result = await createdProduct.json();
        return result.product;
    } else {
        return false;
    }
}

export default fetchCreateProduct;