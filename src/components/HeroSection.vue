<template>
    <section>
        <FullWidthCard :card="cards[0]" :isSmallSale="false"/>
    </section>
</template>

<script setup>
import FullWidthCard from './FullWidthCard.vue';
import saleone from '/mainPage/sale-1.jpg'
const cards = [
    {
        id: 1,
        description: 'High quality sweatshirt',
        sale: '30% off',
        img: saleone,
    },
]
</script>

<style scoped>
section {
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: var(--margin-bottom);
}
</style>