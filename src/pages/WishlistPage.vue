<script setup lang="ts">
import EmptyList from '@/components/EmptyList.vue';
import WishlistCard from '@/components/WishlistCard.vue';
import { reactive } from 'vue';
const testCards = reactive([
    {
        id: 1,
        img: '/test/1.jpg',
        brand: 'Gucci',
        type: 'Sweatshirt',
        price: '$29',
        sale: '$26',
    },
    {
        id: 2,
        img: '/test/2.jpg',
        brand: 'Puma',
        type: 'T-Shirt',
        price: '$12',
    },
    {
        id: 3,
        img: '/test/3.jpg',
        brand: 'CR7',
        type: 'Sweatshirt',
        price: '$107',
    },
    {
        id: 4,
        img: '/test/4.jpg',
        brand: 'Adidas',
        type: 'Sweatshirt',
        price: '$19',
        sale: '$16',
    },
]
)

function deleteProduct(id : number) {
    const deleteIndex = testCards.findIndex(card => card.id === id);
    if (deleteIndex !== -1) {
        testCards.splice(deleteIndex, 1)
    }
}
</script>

<template>
    <WishlistCard v-for="card in testCards" 
        :card="card" 
        :key="card.id"
        :deleteProduct="deleteProduct"
        />
    <EmptyList v-if="testCards.length == 0" :title="'WishList'" />
</template>