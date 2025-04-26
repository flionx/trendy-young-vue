import { defineStore } from "pinia";
function getStorage() {
    const storage = localStorage.getItem('wishlist');
    return storage ? JSON.parse(storage) : [];
}

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        products: getStorage(),
    }),
    actions: {
        addToWishlist(product) {
            this.products.push(product);
        },
        deleteFromWishlist(id) {
            const deleteIndex = this.products.findIndex(card => card._id === id);
            if (deleteIndex !== -1) {
                this.products.splice(deleteIndex, 1);
            }
        },
    }
})