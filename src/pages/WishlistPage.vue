<script setup>
import { useWishlistStore } from '@/app/store/wishlist';
import UserProductCard from '@/components/UserProductCard.vue';
import EmptyList from '@/components/UserProductCard.vue';

const wishlistStore = useWishlistStore();
</script>

<template>
    <UserProductCard v-for="card in wishlistStore.products" 
        :card="card" 
        :key="card.id"
        />
    <EmptyList v-if="wishlistStore.products.length == 0" :title="'WishList'" />
</template>