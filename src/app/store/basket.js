import { defineStore } from 'pinia';

function getStorage() {
    const storage = localStorage.getItem('basket');
    return storage ? JSON.parse(storage) : [];
}

function setStorage(products) {
    localStorage.setItem('basket', JSON.stringify(products));
}

const useBasketStore = defineStore('basket', {
    state: () => ({
        products: getStorage(),
    }),
    actions: {
        addToBasket(product) {
            const productIndex = this.products.findIndex(card => card.product.id === product.id);
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
            setStorage(this.products);
        },
        deleteFromBasket(id) {
            const deleteIndex = this.products.findIndex(card => card.product.id === id);
            if (deleteIndex !== -1) {
                this.products.splice(deleteIndex, 1);
                setStorage(this.products);
            }
        },
    }
});

export default useBasketStore;
