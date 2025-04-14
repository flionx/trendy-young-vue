<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import MiddleTitle from './text/MiddleTitle.vue';
const testCards = [
    {
        id: 1,
        img: '/test/1.jpg',
        brand: 'Gucci',
        type: 'Sweatshirt',
        price: '$29',
        sale: '$26',
    },
    {
        id: 2,
        img: '/test/2.jpg',
        brand: 'Puma',
        type: 'T-Shirt',
        price: '$12',
    },
    {
        id: 3,
        img: '/test/3.jpg',
        brand: 'CR7',
        type: 'Sweatshirt',
        price: '$107',
    },
    {
        id: 4,
        img: '/test/4.jpg',
        brand: 'Adidas',
        type: 'Sweatshirt',
        price: '$19',
        sale: '$16',
    },
]

</script>

<template>
    <section>
        <div class="see-more">
            <h3><MiddleTitle>Popular</MiddleTitle></h3>
            <router-link to="store/all">See all</router-link>
        </div>
        <div class="row">
            <ProductCard v-for="card in testCards" :card="card" :key="card.id"></ProductCard>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-bottom: var(--m48px);
}
h3 {
    color: var(--bg-color);
}
.see-more {
    display: flex;
    align-items: center;
    column-gap: 32px;
    margin-bottom: calc(var(--m20px) - 15px);
}
.see-more a {
    color: var(--orange-text);
    padding-right: 18px;
    position: relative;
}
.see-more a:hover {
    text-decoration: underline;
}
.see-more a::after {
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-position: center;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-image: var(--arrow-right-url);
    background: var(--orange-text);
}
.row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    column-gap: var(--column-gap);
}

</style>