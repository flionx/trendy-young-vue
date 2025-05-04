import { defineStore } from "pinia";
import { fetchRandomProducts } from "@/utils/products/fetchRandomProducts";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorageUtils";

export const usePopProductsStore = defineStore('popProduct', {
    state: () => ({
        products: getLocalStorage('popular-products', 10) || [],
        loading: false,
    }),
    actions: {
        async loadProducts() {
            this.loading = true;
            try {
                const cashedProducts = getLocalStorage('popular-products', 5);
                if (cashedProducts) {
                    this.products = cashedProducts;
                    return;
                }                
                const products = await fetchRandomProducts();   
                this.products = products;
                setLocalStorage('popular-products', this.products)
            } catch (error) {
                console.log('Error when fetching items from the DB: ', error);
            } finally {
                this.loading = false;
            }
        }
    }
})