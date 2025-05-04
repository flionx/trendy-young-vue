import { getLocalStorage, setLocalStorage } from "@/utils/localStorageUtils";
import fetchSimilarProducts from "@/utils/products/fetchSimilarProducts";
import { defineStore } from "pinia";

const useSimilarStore = defineStore('simProducts', {
    state: () => ({
        products: [],
        loading: false,
    }),
    actions: {
        async loadProducts(id) {
            try {                
                this.loading = true;                
                const products = await fetchSimilarProducts(id);
                this.products = products;
            } catch (error) {
                console.log('Error when fetching similar products from the DB: ', error);
            } finally {
                this.loading = false;
            }
        },
    }
})
export default useSimilarStore;