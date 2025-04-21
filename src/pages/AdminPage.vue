<script setup>
import useBasketStore from '@/app/store/basket';
import ModalInfo from '@/components/ui/ModalInfo.vue';
import UserProductCard from '@/components/UserProductCard.vue';
import { useModalInfo } from '@/hooks/useModalInfo';
import { ref } from 'vue';
const basketStore = useBasketStore(); // Test
const {modalInfo, setModalInfo} = useModalInfo();
</script>

<template>
    <UserProductCard v-for="card in basketStore.products" :key="card.product.id"
        :setModalInfo="setModalInfo"
        :card="card.product"
        :count="card.count"
        :isBasket="false"
        btns="admin"
    />
    <ModalInfo v-if="modalInfo.show" 
        v-model:isOpen="modalInfo.show"
        :className="modalInfo.className">
        {{modalInfo.text}}
    </ModalInfo>
</template>