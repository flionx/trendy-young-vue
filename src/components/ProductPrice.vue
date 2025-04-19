<template>
    <div class="card__price">
        <div class="card__sale" :class="size" v-if="sale">${{ price }}</div>
        <div class="card__count-price" :class="[{red: sale}, size]">${{ sale ? sale : price }}</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        price: Number,
        sale: Number,
        size: String,
    })
</script>

<style scoped>

.card__price {
    display: flex;
    column-gap: 10px;
}
.card__sale {
    color: var(--gray-dark-text);
    font-weight: 400;
    font-size: 16px;
    text-decoration: line-through;
}
.card__count-price {
    font-weight: 500;
    font-size: 16px;
}
.red {
    font-weight: 600;
    color: var(--red);
}
.big {
    font-size: 24px !important;
}
</style>