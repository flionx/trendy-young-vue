import { getLocalStorage, setLocalStorage } from '@/utils/localStorageUtils';
import { defineStore } from 'pinia';

const useBasketStore = defineStore('basket', {
    state: () => ({
        products: getLocalStorage('basket') || [],
    }),
    actions: {
        addToBasket(product) {
            const productIndex = this.products.findIndex(card => card.product._id === product._id);
            if (productIndex === -1) {
                this.products.push({
                    product,
                    count: 1,
                });
            } else {
                const currProduct = this.products[productIndex];
                this.products[productIndex] = {
                    ...currProduct,
                    count: currProduct.count + 1,
                };
            }
            setLocalStorage('basket', this.products);
        },
        minusBasket(id) {
            const productIndex = this.products.findIndex(card => card.product._id === id);
            if (productIndex !== -1) {
                const currProduct = this.products[productIndex];
                if (currProduct.count >= 2) {
                    this.products[productIndex] = {
                        ...currProduct,
                        count: currProduct.count - 1,
                    };
                } else {
                    this.products.splice(productIndex, 1);
                }
                setLocalStorage('basket', this.products);
            }
        },
        deleteFromBasket(id) {
            const deleteIndex = this.products.findIndex(card => card.product._id === id);
            if (deleteIndex !== -1) {
                this.products.splice(deleteIndex, 1);
                setLocalStorage('basket', this.products);
            }
        },
    }
});

export default useBasketStore;
