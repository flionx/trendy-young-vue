<script setup lang="ts">
import ProductPrice from './ProductPrice.vue';
import RegularText from './text/RegularText.vue';
const props = defineProps({
    card: Object,
    deleteProduct: Function,
})
</script>

<template>
    <section class="card">
        <router-link to="/" class="img">
            <img :src="card.img" alt="product image">
        </router-link>
        <div class="card__right">
            <div class="card__info">
                <div class="card__top">
                    <div class="card__type"><RegularText>{{ card.type }}</RegularText></div>
                    <div class="card__art">Art: {{ card.id }}</div>
                </div>
                <ProductPrice :price="card.price" :sale="card.sale" />
            </div>
            <button class="btn-delete" @click="deleteProduct(card.id)"></button>
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
}
.card a {
    width: 175px;
    height: 175px;
    border-radius: 8px;
    overflow: hidden;
}
.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    justify-content: space-between;
    color: var(--bg-color);
}
.card__art {
    margin-top: auto;
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-dark-text);
}

.btn-delete {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--gray-main);
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