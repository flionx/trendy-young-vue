import { productApiUrl } from "@/constants/products";
import { getLocalStorage } from "./localStorageUtils";

const fetchDeleteProduct = async (id) => {
    const accessToken = getLocalStorage('accessToken');
    const updatedProduct = await fetch(`${productApiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    })
    return (updatedProduct.status === 200);
}

export default fetchDeleteProduct;