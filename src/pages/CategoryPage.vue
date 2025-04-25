<script setup>
import { useProductsStore } from '@/app/store/products';
import ProductCard from '@/components/ProductCard.vue';
const productsStore = useProductsStore();
</script>

<template>
    <div class="row">
        <ProductCard v-for="card in productsStore.products" :card="card" :key="card.id"></ProductCard>
    </div>
</template>

<style scoped>
.row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
    column-gap: var(--column-gap);
    justify-items: stretch;
}
@media (max-width: 767px) {
    .row {
        grid-template-columns: 1fr; 
    }
}
</style>