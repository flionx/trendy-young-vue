<script setup>
import ButtonBack from './ButtonBack.vue';
import BigTitle from './text/BigTitle.vue';
import RegularText from './text/RegularText.vue';
import CustomSelect from './CustomSelect.vue';
import { productTargets, productTypes } from '@/constants/products';
import useCategoriesHeader from '@/hooks/useCategoriesHeader';

const { isCatalog, headerTitle, linkToPage, isActiveTarget, activeType } = useCategoriesHeader();
</script>

<template>
  <header :class="{'small-m': isCatalog}">
    <div class="header__row">
      <ButtonBack />
      <h1><BigTitle>{{ headerTitle }}</BigTitle></h1>
    </div>
    <div class="header__row" v-if="isCatalog">
        <div class="row-btns">
            <router-link v-for="target in productTargets" :to="linkToPage(target)"
                :class="{'active': isActiveTarget(target)}"
                :key="target">
                <RegularText>{{ target }}</RegularText>
            </router-link>
        </div>
        <CustomSelect v-model="activeType" :options="productTypes" default="Clothing type" />
    </div>
  </header>
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
    padding: 30px var(--m48px) 20px var(--m48px);
}
.small-m .header__row:first-child {
    margin-bottom: 24px;
}
.small-m .header__row:last-child {
    row-gap: 20px;
    flex-wrap: wrap;
}
.header__row {
    display: flex;
    align-items: center;
    column-gap: 24px;
}
.row-btns {
    width: fit-content;
    display: flex;
    column-gap: var(--m20px);
    padding: 10px 12px;
    border-radius: 8px;
    background: var(--text-color);
}
.row-btns a {
    padding: 5px 12px;
    background: transparent;
    border-radius: 8px;
    color: var(--bg-color);
    transition: .4s;
}
.active {
    background: var(--bg-active-hover) !important;
}
.row-btns a:hover{
    background: var(--bg-hover);
}
.select {
  position: relative;
  display: inline-block;
  background: var(--text-color);
  border-radius: 8px;
  padding: 5px 10px;
}

.select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: transparent;
  border: none;
  padding: 10px 30px 10px 10px;
  font-size: 16px;
  color: var(--bg-color);
  cursor: pointer;
  outline: none;
}

.arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(90deg);
  pointer-events: none;
  font-weight: 600;
  font-size: 16px;
  color: var(--bg-color);
}


</style>