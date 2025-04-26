import { fetchProducts } from "@/utils/fetchProducts";
import { getLocalStorage } from "@/utils/localStorageUtils";
import { defineStore } from "pinia";

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
                const products = await fetchProducts();   
                const fourProducts = products.length > 4 ? products.slice(0, 4) : products;            
                this.products = fourProducts;
            } catch (error) {
                console.log('Error when fetching items from the DB: ', error);
            } finally {
                this.loading = false;
            }
        }
    }
})