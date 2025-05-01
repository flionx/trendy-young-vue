import { fetchProducts } from "@/utils/products/fetchProducts";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorageUtils";
import { defineStore } from "pinia";

function areFiltersEqual(f1, f2) {
    if (!f1 && !f2) return true;
    if (!f1 || !f2) return false;
    const normalize = (value) => (value === undefined || value === null ? '' : String(value))
    return normalize(f1.type) === normalize(f2.type) && 
        normalize(f1.target) === normalize(f2.target);
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: getLocalStorage('products', 5) || [],
        lastFilters: getLocalStorage('lastFilters', 5) || null,
        loading: false,
    }),
    actions: {
        async loadProducts(filters = null) {
            try {                
                this.loading = true;
                const normalizedFilters = filters || { type: '', target: '' };
                
                const cachedProducts = getLocalStorage('products', 5);
                const lastFilters = getLocalStorage('lastFilters', 5);
                
                if (cachedProducts && areFiltersEqual(lastFilters, normalizedFilters)) {
                    this.products = cachedProducts;
                    return;
                }
                
                const products = await fetchProducts(normalizedFilters);
                this.products = products;
                this.lastFilters = normalizedFilters;
                
                setLocalStorage('products', products);
                setLocalStorage('lastFilters', normalizedFilters);
            } catch (error) {
                console.log('Error when fetching items from the DB: ', error);
            } finally {
                this.loading = false;
            }
        },
    }
})