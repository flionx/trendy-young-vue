<template>
    <div class="card">
        <button class="card__like" 
            :class="isLike ? 'like-done' : ''" 
            @click="addToWishList(card)" 
            title="add to wishlist">
        </button>
        <router-link :to="`/product/${card.id}`">
            <img :src="card.img" alt="product image">
        </router-link>
        <div class="card__info">
            <div class="card__left">
                <div class="card__brand">{{ card.brand }}</div>
                <div class="card__type"><RegularText>{{ card.type }}</RegularText></div>
                <ProductPrice :price="card.price" :sale="card.sale" />
            </div>
            <button class="card__add" 
                @click="addToBasket(card)" 
                title="add to basket">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RegularText from './text/RegularText.vue';
import ProductPrice from './ProductPrice.vue';
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
const isLike = ref(false);

function addToBasket(card) {
    console.log('Added to basket: ' + card.id);
}
function addToWishList(card) {
    if (isLike.value) {
        isLike.value = false;
        console.log('Deleted from WishList: ' + card.id);
    } else {
        isLike.value = true;
        console.log('Added to WishList: ' + card.id);
    }
}
</script>

<style scoped>
.card {
    flex: 1 1;
    min-width: 220px;
    position: relative;
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
    transition: .4s all;
}
.card a:hover {
    transform: scale(1.02);
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
    color: var(--bg-color);
    background: var(--gray-main);
    border-radius: 0 0 16px 16px;

}
.card__left {
    width: 60%;
}
.card__brand {
    font-weight: 600;
    font-size: 12px;
    color: var(--gray-dark-text);
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
.card__like {
    position: absolute;
    z-index: 2;
    top: 25px;
    right: 10px;
    width: 24px;
    height: 20px;
    background: transparent;
    background-image: var(--like-url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.like-done {
    background-image: var(--likeDone-url);
}
.card__like::before {
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: -1;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: .3s all;
}
.card__like:hover::before {
    background: rgba(0, 0, 0, 0.1);
}
</style>