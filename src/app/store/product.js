import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
    state: () => ({
        product: {},
    }),
    actions: {
        setProduct(product) {
            this.product = product;
        },
        clearProduct() {
            this.product = {};
        }
    }
})