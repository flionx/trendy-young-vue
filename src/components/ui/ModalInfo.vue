<template>
    <div :class="[className, { 'anim-hide': modalStore.isHiding }]">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { useModalStore } from '@/app/store/modal';
  
  const props = defineProps({
    className: String,
  });
  const modalStore = useModalStore();
  </script>

<style scoped>
div {
    position: fixed;
    z-index: 999;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    max-width: 300px;
    padding: 12px;
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    font-family: var(--main-font);
    border: 1px solid var(--gray-light-text);
    background: var(--text-color);
    color: var(--bg-color);
    opacity: 0;
    animation: show 0.5s forwards;
}
div::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.like::after {
    background-image: var(--like-url);
}
.basket::after {
    background-image: var(--basket-url);
}

@keyframes show {
    0% {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}
@keyframes hide {
    0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
    }
}

.anim-hide {
    animation: hide 0.5s forwards ease-in-out;
}
</style>