<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import ButtonBack from './ButtonBack.vue';
import BigTitle from './text/BigTitle.vue';
import RegularText from './text/RegularText.vue';

const route = useRoute();

const categoryParam = computed(() => route.params.category || 'all');
const currentPath = computed(() => route.path);

const titleText = computed(() => {
  if (route.path.includes('basket')) return 'Cart';
  if (route.path.includes('wishlist')) return 'Wishlist';
  return 'Catalog';
});

const isCatalog = computed(() => titleText.value === 'Catalog');

const categories = ['Women', 'Men', 'Children', 'All'];
const subCategories = ['Casual', 'Formal', 'Sport', 'Sleep'];

const isActiveCategory = (category) => category === categoryParam.value;

const activeCategory = computed(() => {
  if (categoryParam.value === 'all') return 'All';
  return categoryParam.value.charAt(0).toUpperCase() + categoryParam.value.slice(1); 
});
</script>

<template>
  <header :class="isCatalog ? 'small-m' : ''">
    <div class="header__row">
      <ButtonBack />
      <h1><BigTitle>{{ titleText }}</BigTitle></h1>
    </div>
    <div class="row-btns" v-if="isCatalog">
        <button v-for="category in categories"
            :class="{'active': isActiveCategory(category.toLowerCase())}"
            :key="category">
            <RegularText>{{ category }}</RegularText>
        </button>
    </div>
  </header>
  <div class="categories" v-if="isCatalog">
    <button v-for="subCategory in subCategories"
        :class="{'active': categoryParam === subCategory.toLowerCase()}"
        :key="subCategory">
        <RegularText>{{ subCategory }}</RegularText>
    </button>
  </div>
</template>


<style scoped>
h1 {
    color: var(--bg-color);
}
header {
    margin: var(--m20px) 0;
    padding: 48px;
    border-radius: 16px;
    background: var(--gray-main);
}
.small-m {
    padding: 30px 48px 20px 48px;
    border-radius: 16px 16px 0 0;
    margin-bottom: 0;
}
.header__row {
    display: flex;
    align-items: center;
    column-gap: 24px;
}
.row-btns {
    margin-top: 24px;
    width: fit-content;
    display: flex;
    column-gap: 20px;
    padding: 10px 12px;
    border-radius: 8px;
    background: var(--text-color);
}
.row-btns button{
    padding: 5px 12px;
    background: transparent;
    border-radius: 8px;
    color: var(--bg-color);
    transition: .4s;
}
.active {
    background: rgba(63, 63, 63, 0.15) !important;
}
.row-btns button:hover{
    background: rgba(63, 63, 63, 0.1);
}
.categories {
    display: flex;
    align-items: center;
    column-gap: 30px;
    padding: 22px 48px;
    border-radius: 0 0 16px 16px;
    border: 2px solid var(--gray-main);
    border-top: none;
    margin-bottom: var(--m20px);
}
.categories button {
    background: transparent;
    color: var(--bg-color);
    padding: 5px 12px;
    border-radius: 8px;
    transition: .4s;
}

</style>