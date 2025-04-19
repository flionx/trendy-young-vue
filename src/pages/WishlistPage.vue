<script setup>
import { useWishlistStore } from '@/app/store/wishlist';
import EmptyList from '@/components/EmptyList.vue';
import ModalInfo from '@/components/ui/ModalInfo.vue';
import UserProductCard from '@/components/UserProductCard.vue';
import { useModalInfo } from '@/hooks/useModalInfo';

const wishlistStore = useWishlistStore();
const {modalInfo, setModalInfo} = useModalInfo();
</script>

<template>
    <template v-if="wishlistStore.products.length !== 0">
        <UserProductCard v-for="card in wishlistStore.products" 
            :setModalInfo="setModalInfo"
            :card="card" 
            :key="card.id"
            :isBasket="false"
            />
    </template>
    <EmptyList v-else :title="'WishList'" />
    <ModalInfo :className="modalInfo.className" v-if="modalInfo.show" 
        v-model:isOpen="modalInfo.show">
        {{ modalInfo.text }}
    </ModalInfo>
</template>