<script setup>
import RowCards from '@/components/RowCards.vue';
import ProductPrice from '@/components/ProductPrice.vue';
import BoldText from '@/components/text/BoldText.vue';
import MiddleTitle from '@/components/text/MiddleTitle.vue';
import RegularText from '@/components/text/RegularText.vue';
import ButtonOrange from '@/components/ui/ButtonOrange.vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/app/store/product';
import { computed, onMounted, reactive, watch } from 'vue';
import { scrollToUp } from '@/utils/scrollToUp';
import { shareLink } from '@/utils/shareLink';
const productStore = useProductStore();
const route = useRoute();
const router = useRouter();
const product = reactive({});

onMounted(() => {
    Object.assign(product, productStore.product);
    scrollToUp();
})
// Temporary solution, later to be redesigned for a request to MongoDB 
watch(() => route.params.id, (newId, prevId) => {
    Object.assign(product, productStore.product);
    scrollToUp();
})

function goBack() {
    if (window.history.state.back) {
        router.back();
    } else {
        router.push('/');
    }
}
function shareOrCopy() {
    shareLink(window.location.href)
}
</script>

<template>
    <section class="card" v-if="product.name">
        <div class="card__img">
            <img :src="product.img" alt="product image">
            <button class="back" @click="goBack"></button>
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
                <ButtonOrange icon="like"></ButtonOrange>
                <ButtonOrange>Add to Cart</ButtonOrange>
            </div>
            <div class="card__description">
                <div class="circle-title">Description</div>
                <!-- from product -->
                <p><RegularText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere vero similique odit voluptates porro doloremque repudiandae aperiam eveniet rem?</RegularText></p>
            </div>
        </div>
    </section>
    <!-- loading and error components -->
     <template v-else>
        <h1 class="error">ERROR</h1>
        <router-link to="/"><---GO HOME ^^</router-link>
     </template>
    <RowCards title="Similar products"/>
</template>

<style scoped>
.card {
    margin: var(--m20px) 0 var(--m70px) 0;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
.card__img {
    width: 30%;
    min-width: 300px;
    height: 300px;
    position: relative;
    transition: .3s all;
}

.card__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    overflow: hidden;
    transition: .3s all;
}
.card__img img:hover {
    transform: scale(1.02);
}
.card__img button {
    position: absolute;
    top: 20px;
    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    width: 48px;
    height: 48px;
}
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
    flex: 1 1;
    min-width: 400px;
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
    justify-content: end;
    gap: 1rem;
    margin-bottom: 15px;
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