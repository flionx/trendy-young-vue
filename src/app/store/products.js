import { fetchProducts } from "@/utils/fetchProducts";
import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        loading: false,
    }),
    actions: {
        async fetchProducts(filters) {
            try {
                this.loading = true;
                const response = await fetchProducts(filters);                
                this.products = response;
            } catch (error) {
                console.log('Error when fetching items from the DB: ', error);
            } finally {
                this.loading = false;
            }
        },

    }
})