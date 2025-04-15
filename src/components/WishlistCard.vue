<script setup>
import { useWishlistStore } from '@/app/store/wishlist';
import ProductPrice from './ProductPrice.vue';
import ProductInfo from './productCard/ProductInfo.vue';
const props = defineProps({
    card: Object,
})
const wishlistStore = useWishlistStore();
</script>

<template>
    <section class="card">
        <router-link to="/" class="img" title="Visit product page">
            <img :src="card.img" alt="product image">
        </router-link>
        <div class="card__right">
            <div class="card__info">
                <ProductInfo :id="card.id" :type="card.type"/>
                <div class="card__price-wrapper">
                    <ProductPrice :price="card.price" :sale="card.sale" />
                </div>
            </div>
            <button class="btn-delete" 
                @click="wishlistStore.deleteFromWishlist(card.id)" 
                title="Delete product">
            </button>
        </div>
    </section>
</template>

<style scoped>
.card {
    width: 95%;
    display: flex;
    column-gap: 26px;
    align-items: center;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 12px;
    /* background: white; */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card a {
    width: 175px;
    height: 175px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
}

.img:hover img {
    transform: scale(1.03);
}

.card__right {
    padding: 20px 0;
    width: 100%;
    height: 100%;
    position: relative;
}

.card__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--bg-color);
}

.card__price-wrapper {
    margin-top: auto;
    padding-top: 12px;
}

.btn-delete {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--gray-main);
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.btn-delete:hover {
    transform: scale(1.05);
}

.btn-delete::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    mask-image: var(--close-url);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    background: var(--bg-color);
}
</style>