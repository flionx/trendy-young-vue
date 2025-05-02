<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, ref, watch, watchEffect } from 'vue';
import ProductPrice from '@/components/ProductPrice.vue';
import BoldText from '@/components/text/BoldText.vue';
import MiddleTitle from '@/components/text/MiddleTitle.vue';
import RegularText from '@/components/text/RegularText.vue';
import ButtonOrange from '@/components/ui/ButtonOrange.vue';
import { scrollToUp } from '@/utils/scrollToUp';
import fetchProductById from '@/utils/products/fetchProductById';
import SectionCards from '@/components/SectionCards.vue';
import { useAddToStore } from '@/hooks/useAddToStore';
import { useWishlistStore } from '@/app/store/wishlist';
import useClipboard from '@/hooks/useClipboard';
const wishlistStore = useWishlistStore();
const router = useRouter();
const route = useRoute();

const product = ref({});
const productId = computed(() => route.params.id);
const isLike = computed(() => 
    wishlistStore.products.some(prod => prod._id === route.params.id)
);

watch(productId, async (newId) => {
    scrollToUp();
    isLike.value = wishlistStore.products.some(p => p._id === newId);
    const currProduct = await fetchProductById(productId.value) 
    product.value = currProduct;
}, { immediate: true })

const {addToBasket, toggleWishlist} = useAddToStore();
const {shareLink} = useClipboard();

function shareOrCopy() {
    shareLink(window.location.href)
}
</script>

<template>
    <section class="card" v-if="product.name">
        <div class="card__img">
            <img :src="product.img" alt="product image">
            <router-link to="/" class="back"></router-link>
            <button class="share" @click="shareOrCopy"></button>
        </div>
        <div class="card__info">
            <div class="card__top">
                <div class="card__top-left">
                    <BoldText>{{product.brand}}</BoldText>
                    <MiddleTitle class="card__type">{{product.name}}</MiddleTitle>
                </div>
                <ProductPrice size="big" :price="product.price" :sale="product.sale"></ProductPrice>
            </div>
            <div class="card__btns">
                <div class="row">
                    <div class="teg">#{{ product.target }}</div>
                    <div class="teg">#{{ product.type }}</div>
                </div>
                <div class="row right">
                    <ButtonOrange :class="isLike ? 'like-done' : 'like'"
                        @click="toggleWishlist(product, isLike)" 
                        title="add to wishlist">
                    </ButtonOrange>
                    <ButtonOrange title="add to basket" 
                        @click="addToBasket(product)">Add to Cart
                    </ButtonOrange>
                </div>
            </div>
            <div class="card__description">
                <div class="circle-title">Description</div>
                <p><RegularText>{{ product.description }}</RegularText></p>
            </div>
        </div>
    </section>
    <!-- loading and error components -->
     <template v-else>
        <h1 class="error">ERROR</h1>
        <router-link to="/">{{ '<---GO HOME ^^' }}</router-link>
     </template>
    <SectionCards title="Similar products"/>
</template>

<style scoped>
.card {
    margin: var(--m20px) 0 var(--m70px) 0;
    display: flex;
    flex-wrap: wrap;
    gap: clamp(20px, 5vw, 70px);
    min-height: 400px;
    justify-content: space-between;
    align-items: stretch;
}
.card__img {
    width: clamp(300px, 27vw, 400px);
    position: relative;
    overflow: hidden;
    transition: .3s all;
    border-radius: 16px;
}

.card__img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    transition: .3s all;
}
.card__img img:hover {
    transform: scale(1.02);
}
.card__img a,
.card__img button {
    position: absolute;
    top: 20px;
    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    width: 48px;
    height: 48px;
}
.card__img a::after,
.card__img button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    mask-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
    background: white;
}
.back {
    left: 20px;
}
.back::after {
    mask-image: var(--arrow-right-url);
    transform: translate(-50%, -50%) rotate(180deg) !important;
}
.share {
    right: 20px;
}
.share::after {
    mask-image: var(--share-url);
}
.card__info {
    flex: 1 1 380px;
}
@media (max-width: 910px) {
    .card__img {
        width: auto;
        flex: 1 1 100%;
        padding-bottom: 75%;
    }

    .card__info {
        width: auto;
        flex: 1 1 100%;
        margin-top: 16px;
    }
}

.card__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.card__top-left {
    display: flex;
    flex-direction: column;
}
.card__brand {
}
.card__type {
    color: var(--bg-color)
}
.card__btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    gap: 1rem;
    flex-wrap: wrap;
}
.card__btns .row{
    flex: 1;
    display: flex;
    gap: 1rem;
}
.card__btns .row.right{
    justify-content: end;
}
.teg {
    border-radius: 8px;
    padding: 5px 10px;
    background: var(--gray-main);
    color: var(--orange-text);
}
.card__description {
}
.card__description p {
    color: var(--bg-color);
}
.circle-title {
    width: fit-content;
    padding: 8px 16px;
    background: var(--orange-bg);
    color: var(--orange-text);
    border-radius: 32px;
    margin-bottom: 10px;
}
</style>