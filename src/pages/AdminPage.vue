<script setup>
import { reactive, ref } from 'vue';
import { useProductsStore } from '@/app/store/products';
import EditProduct from '@/components/EditProduct.vue';
import UserProductCard from '@/components/UserProductCard.vue';

const productsStore = useProductsStore();
const showCreateProduct = ref(false);
</script>

<template>
    <div class="container-btn">
        <button class="add-btn" @click="showCreateProduct = true" v-if="!showCreateProduct">
            <span class="plus-icon">+</span>
            <span class="btn-text">Add new product</span>
        </button>
    </div>
    <EditProduct v-if="showCreateProduct" 
        v-model:isAdminEdit="showCreateProduct" 
        :isCreate="true"
    />

    <UserProductCard v-for="product in productsStore.products" :key="product._id"
        :card="product"
        :isBasket="false"
        btns="admin"
    />
</template>

<style scoped>
.container-btn {
    width: 100%;
    margin-bottom: var(--m20px);
    display: flex;
    justify-content: center;
}

.add-btn {
    padding: 16px 48px;
    border-radius: 12px;
    background: transparent;
    color: var(--bg-color);
    border: 2px solid var(--gray-main);
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    position: relative;
    overflow: hidden;
}

.add-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-btn:active {
    transform: translateY(0);
    box-shadow: none;
}

.plus-icon {
    font-size: 24px;
    font-weight: 300;
    transition: transform 0.3s ease;
}

.add-btn:hover .plus-icon {
    transform: scale(1.2);
}

.btn-text {
    font-family: var(--main-font);
    letter-spacing: 0.5px;
}
</style>