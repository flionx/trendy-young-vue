import { defineStore } from "pinia";

function getStorage() {
    const storage = localStorage.getItem('basket');
    return storage ? JSON.parse(storage) : [];
}

const useBasketStore = defineStore('basket', {
    state: () => ({
        products: getStorage(),
    }),
    actions: {
        addToBasket(product) {
            this.products.push(product);
        },
        deleteFromBasket(id) {
            const deleteIndex = this.products.findIndex(card => card.id === id);
            if (deleteIndex !== -1) {
                this.products.splice(deleteIndex, 1);
            }
        },
    }
})