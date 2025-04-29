import { getLocalStorage, setLocalStorage } from "@/utils/localStorageUtils";
import { defineStore } from "pinia";

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        products: getLocalStorage('wishlist') || [],
    }),
    actions: {
        addToWishlist(product) {
            this.products.push(product);
            setLocalStorage('wishlist', this.products);
        },
        deleteFromWishlist(id) {
            const deleteIndex = this.products.findIndex(card => card._id === id);
            if (deleteIndex !== -1) {
                this.products.splice(deleteIndex, 1);
                setLocalStorage('wishlist', this.products);
            }
        },
    }
})