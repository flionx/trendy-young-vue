import { productApiUrl } from "@/constants/products";

const fetchUpdateProduct = async (id, newProduct) => {
    const updatedProduct = await fetch(`${productApiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(newProduct),
    })

    if (updatedProduct.status === 200) {
        const result = await updatedProduct.json();
        return result.product;
    } else {
        return false;
    }
}

export default fetchUpdateProduct;