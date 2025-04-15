<script setup>
import { useWishlistStore } from '@/app/store/wishlist';
import EmptyList from '@/components/EmptyList.vue';
import WishlistCard from '@/components/WishlistCard.vue';

const wishlistStore = useWishlistStore();
</script>

<template>
    <WishlistCard v-for="card in wishlistStore.products" 
        :card="card" 
        :key="card.id"
        />
    <EmptyList v-if="wishlistStore.products.length == 0" :title="'WishList'" />
</template>