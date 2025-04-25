<template>
    <div class="card">
        <button class="card__like" 
            :class="isLike ? 'like-done' : ''" 
            @click="toggleWishlist(card)" 
            title="add to wishlist">
        </button>
        <button class="card__image" @click="goToProductPage(card)">
            <img :src="card.img" alt="product image">
        </button>
        <div class="card__info">
            <div class="card__left">
                <BoldText class="card__brand">{{ card.brand }}</BoldText>
                <div class="card__type"><RegularText>{{ card.name }}</RegularText></div>
                <ProductPrice :price="card.price" :sale="card.sale" />
            </div>
            <button class="card__add" 
                @click="addToBasket(card)" 
                title="add to basket">
            </button>
        </div>
    </div>
    <ModalInfo v-if="modalInfo.show" 
        v-model:isOpen="modalInfo.show"
        :className="modalInfo.className">
        {{modalInfo.text}}
    </ModalInfo>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import ProductPrice from './ProductPrice.vue';
import ModalInfo from './ui/ModalInfo.vue';
import RegularText from './text/RegularText.vue';
import BoldText from './text/BoldText.vue';
import { useWishlistStore } from '@/app/store/wishlist';
import useBasketStore from '@/app/store/basket';
import { useModalInfo } from '@/hooks/useModalInfo';
const props = defineProps({
    card: Object,
})
const wishlistStore = useWishlistStore();
const basketStore = useBasketStore();
const router = useRouter();
const {modalInfo, setModalInfo} = useModalInfo();

const isLike = computed(() => 
    wishlistStore.products.some(product => product.id === props.card.id)
);
function addToBasket(card) {
    basketStore.addToBasket(card)
    setModalInfo('Added to Cart', 'basket')
}
function toggleWishlist(card) {    
    if (isLike.value) { 
        wishlistStore.deleteFromWishlist(card.id);
        setModalInfo('Removed from Wishlist', 'like');
    } else {
        wishlistStore.addToWishlist(card);
        setModalInfo('Added to Wishlist', 'like');
    }
}
function goToProductPage(card) {
    router.push(`/product/${card._id}`)
}

</script>

<style scoped>
.card {
    flex: 1 1;
    min-width: 220px;
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
    font-size: 12px;
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