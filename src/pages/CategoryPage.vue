<script setup>
import { useProductsStore } from '@/app/store/products';
import ProductCard from '@/components/ProductCard.vue';
import RowCards from '@/components/RowCards.vue';
const productsStore = useProductsStore();
</script>

<template>
    <RowCards :products="productsStore.products" :loading="productsStore.loading"></RowCards>
</template>