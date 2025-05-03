<script setup>
import { onMounted } from 'vue';
import { usePopProductsStore } from './app/store/popularProducts';
import { useModalStore } from './app/store/modal';
import ModalInfo from './components/ui/ModalInfo.vue';
const popProductsStore = usePopProductsStore();

const modalStore = useModalStore();
onMounted(async () => {
  if (popProductsStore.products.length < 4) {
    await popProductsStore.loadProducts();
  }
})
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
  <ModalInfo v-if="modalStore.show" 
      :className="modalStore.className">
      {{modalStore.text}}
  </ModalInfo>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 95%;
}
@media (min-width: 700px) {
  .container {
    width: 85%;
  }
}
@media (min-width: 850px) {
  .container {
    width: 80%;
  }
}
@media (min-width: 1000px) {
  .container {
    width: 75%;
  }
}
</style>
