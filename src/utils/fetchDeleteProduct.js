import { productApiUrl } from "@/constants/products";

const fetchDeleteProduct = async (id) => {
    const updatedProduct = await fetch(`${productApiUrl}/${id}`, {
        method: 'DELETE',
        // headers: { Authorization: `Bearer ${token}` }
    })
    return (updatedProduct.status === 200);
}

export default fetchDeleteProduct;