<template>
    <div class="card">
        <router-link :to="`/product/${card.id}`">
            <img :src="card.img" alt="product image">
        </router-link>
        <div class="card__info">
            <div class="card__left">
                <div class="card__brand">{{ card.brand }}</div>
                <div class="card__type"><RegularText>{{ card.type }}</RegularText></div>
                <div class="card__price">
                    <div class="card__sale" v-if="card.sale">{{ card.price }}</div>
                    <div class="card__count-price" :class="card.sale ? 'red' : ''">{{ card.sale ? card.sale : card.price }}</div>
                </div>
            </div>
            <button class="card__add" @click="addToBasket(card)"></button>
        </div>
    </div>
</template>

<script setup>
import RegularText from './text/RegularText.vue';

defineProps({
    card: {
        type: Object,
        required: true,
        default: () => ({
            id: 1,
            img: '/test/1.jpg',
            brand: 'Brand Name',
            type: 'Sweatshirt',
            price: '$19',
            sale: '$16',
        })
    }
})

function addToBasket(card) {
    console.log('Added to basket: ' + card.id);
}
</script>

<style scoped>
.card {
    flex: 1 1;
    min-width: 220px;
    border-radius: 16px;
    overflow: hidden;
}
.card a {
    display: block;
    width: 100%;
    height: 323px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    bottom: -15px;
    z-index: 1;
}
.card img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
}
.card__info {
    min-height: 101.5px;
    padding: 25px 24px 10px 24px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background: var(--gray-main);
}
.card__left {
    width: 60%;
}
.card__brand {
    font-weight: 600;
    font-size: 12px;
    color: var(--gray-dark-text);
}

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
.card__add {
    width: 48px;
    height: 48px;
    position: relative;
    border-radius: 8px;
    background: var(--orange-bg);
    transition: .4s all;
}
.card__add:hover {
    background: var(--orange-bg-hover);
}
.card__add::after {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: var(--plus-url);
    background-position: center;
    background-repeat: no-repeat;
}
</style>