<template>
    <div class="row" :class="{'row-fit': isRowFit}">
        <template v-if="loading">
            <LoadingProductCard v-for="i in 4"/>
        </template>
        <template v-else>
            <ProductCard v-for="product in products" :product="product" :key="product._id"></ProductCard>
        </template>
    </div>
</template>

<script setup>
import LoadingProductCard from './loading/LoadingProductCard.vue';
import ProductCard from './ProductCard.vue';
const props = defineProps({
    products: Array,
    isRowFit: Boolean,
    loading: Boolean,
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