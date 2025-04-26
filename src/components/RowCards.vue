<template>
    <div class="row">
        <ProductCard v-for="product in products" :product="product" :key="product._id"></ProductCard>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const props = defineProps({
    products: Array,
})
</script>

<style scoped>
.row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
    column-gap: var(--column-gap);
    justify-items: stretch;
}
@media (max-width: 767px) {
    .row {
        grid-template-columns: 1fr 1fr; 
    }
}
@media (max-width: 475px) {
    .row {
        grid-template-columns: 1fr; 
    }
}
</style>