import { productApiUrl } from "@/constants/products";
import { getLocalStorage } from "./localStorageUtils";

const fetchUpdateProduct = async (id, newProduct) => {
    const accessToken = getLocalStorage('accessToken');
    const updatedProduct = await fetch(`${productApiUrl}/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
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