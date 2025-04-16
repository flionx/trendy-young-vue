<script setup>
import useBasketStore from '@/app/store/basket';
import MiddleTitle from '@/components/text/MiddleTitle.vue';
import RegularText from '@/components/text/RegularText.vue';
import UserProductCard from '@/components/UserProductCard.vue';
import { computed } from 'vue';
const basketStore = useBasketStore();
const totalPrice = computed(() => 
  basketStore.products.reduce((sum, card) => 
    sum + ((card.product.sale ?? card.product.price) * card.count), 
  0)
);
const delivery = totalPrice.value * 0.05;

</script>

<template>
    <div class="container">
        <div class="list">
            <UserProductCard v-for="card in basketStore.products" :key="card.product.id"
                :card="card.product"
                :count="card.count"
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

<style scoped>
.container {
    display: flex;
    gap: var(--m48px);
    flex-wrap: wrap;
}
.list {
    flex: 1;
}
.sidebar {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
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