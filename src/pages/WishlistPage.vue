<script setup>
import { useWishlistStore } from '@/app/store/wishlist';
import EmptyList from '@/components/EmptyList.vue';
import UserProductCard from '@/components/UserProductCard.vue';

const wishlistStore = useWishlistStore();
</script>

<template>
    <template v-if="wishlistStore.products.length !== 0">
        <UserProductCard v-for="card in wishlistStore.products" 
            :card="card" 
            :key="card.id"
            :isBasket="false"
            />
    </template>
    <EmptyList v-else :title="'WishList'" />
</template>