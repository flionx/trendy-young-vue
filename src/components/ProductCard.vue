<script setup>
import { useRouter } from 'vue-router';
import ProductPrice from './ProductPrice.vue';
import RegularText from './text/RegularText.vue';
import BoldText from './text/BoldText.vue';
import { useAddToStore } from '@/hooks/useAddToStore';
import { computed } from 'vue';
import { useWishlistStore } from '@/app/store/wishlist';
const props = defineProps({
    product: Object,
})
const router = useRouter();
const wishlistStore = useWishlistStore();
const isLike = computed(() => 
    wishlistStore.products.some(product => product._id === props.product._id)
);

const {addToBasket, toggleWishlist} = useAddToStore()

function goToProductPage(product) {
    router.push(`/product/${product._id}`)
}
</script>

<template>
    <div class="card">
        <button class="card__like" 
            :class="isLike ? 'like-done' : ''" 
            @click="toggleWishlist(product, isLike)" 
            title="add to wishlist">
        </button>
        <button class="card__image" @click="goToProductPage(product)">
            <img :src="product.img" alt="product image">
        </button>
        <div class="card__info">
            <div class="card__left">
                <BoldText class="card__brand">{{ product.brand }}</BoldText>
                <div class="card__type"><RegularText>{{ product.name }}</RegularText></div>
                <ProductPrice :price="product.price" :sale="product.sale" />
            </div>
            <button class="card__add" 
                @click="addToBasket(product)" 
                title="add to basket">
            </button>
        </div>
    </div>
</template>

<style scoped>
.card {
    flex: 1 1;
    position: relative;
}
.card__image {
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
@media (max-width: 545px) {
    .card__image {
        height: 250px;
    }
}
.card__image:hover {
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
    padding: var(--clamp24px) var(--clamp24px) var(--clamp12px) var(--clamp24px);
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
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden; 
}
.card__type {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden; 
}

.card__add {
    width: var(--clamp48px);
    height: var(--clamp48px);
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