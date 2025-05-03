<template>
    <div class="row" :class="{'row-fit': isPopular}">
        <ProductCard v-for="product in products" :product="product" :key="product._id"></ProductCard>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const props = defineProps({
    products: Array,
    isPopular: Boolean,
})
</script>

<style scoped>
.row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
    column-gap: var(--column-gap);
    justify-items: stretch;
}
.row-fit {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
}
@media (max-width: 767px) {
    .row {
        grid-template-columns: 1fr 1fr; 
    }
}
@media (max-width: 390px) {
    .row {
        grid-template-columns: 1fr; 
    }
}
</style>