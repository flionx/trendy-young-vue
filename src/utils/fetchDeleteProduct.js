import { productApiUrl } from "@/constants/products";

const fetchDeleteProduct = async (id) => {
    const updatedProduct = await fetch(`${productApiUrl}/${id}`, {
        method: 'DELETE',
        // headers: { 'Content-type': 'application/json'},
    })
    return (updatedProduct.status === 200);
}

export default fetchDeleteProduct;