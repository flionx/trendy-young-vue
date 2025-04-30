<script setup>
import { computed } from 'vue';
import useBasketStore from '@/app/store/basket';
import EmptyList from '@/components/EmptyList.vue';
import MiddleTitle from '@/components/text/MiddleTitle.vue';
import RegularText from '@/components/text/RegularText.vue';
import UserProductCard from '@/components/UserProductCard.vue';
const basketStore = useBasketStore();

const totalPrice = computed(() => 
  basketStore.products.reduce((sum, card) => 
    sum + ((card.product.sale ?? card.product.price) * card.count), 
  0)
);
const delivery = computed(() => totalPrice.value * 0.05);
</script>

<template>
    <template v-if="basketStore.products.length !== 0">
        <div class="container">
            <div class="list">
                <UserProductCard v-for="card in basketStore.products" :key="card.product._id"
                    :card="card.product"
                    :count="card.count"
                    :isBasket="true"
                    btns="basic"
                />
            </div>
            <div class="sidebar">
                <h2><MiddleTitle>Summary</MiddleTitle></h2>
                <div class="sidebar__line">
                    <RegularText>Products</RegularText>
                    <RegularText>${{ totalPrice }}</RegularText>
                </div>
                <div class="sidebar__line">
                    <RegularText>Delivery</RegularText>
                    <RegularText>${{ delivery.toFixed() }}</RegularText>
                </div>
                <div class="sidebar__line bold">
                    <RegularText>Total</RegularText>
                    <RegularText>${{ totalPrice + Number(delivery.toFixed()) }}</RegularText>
                </div>
                <div class="coupon">
                    <input type="text" placeholder="Coupon code">
                    <button>Apply</button>
                </div>
                <button class="pay">Checkout</button>
            </div>
        </div>
    </template>
    <EmptyList v-else title="Cart"/>
</template>

<style scoped>
.container {
    display: flex;
    gap: var(--m48px);
    flex-wrap: wrap;
}
.list {
    flex: 1 1 550px;
    min-width: 0;
}

.sidebar {
    flex: 0 0 350px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}
@media (max-width: 800px) {
    .list, .sidebar {
        flex: 1 1 100%;
    }
}
h2 {
    color: var(--bg-color)
}
.sidebar__line {
    display: flex;
    justify-content: space-between;
    color: var(--gray-dark-text);
}
.bold {
    color: var(--bg-color)
}
input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--gray-light);
    font-weight: 400;
    font-size: 16px;
}
.coupon {
    display: flex;
    justify-content: space-between;
    column-gap: 8px;
}
.coupon button {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-color);
    color: var(--text-color);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
}
.pay {
    padding: 12px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    border-radius: 8px;
    background: var(--orange-bg);
    color: var(--orange-text);
}
</style>