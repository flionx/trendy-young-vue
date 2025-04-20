
<script setup>
import { ref } from 'vue';
const isAuthForm = defineModel('isAuthForm');
const isOpen = ref(false);

function openAuthModal(params) {
    isOpen.value = false;
    isAuthForm.value = true;
}
</script>

<template>
    <button class="burger" :class="{'burger-open': isOpen}" @click="isOpen = !isOpen">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <nav class="menu" :class="{'menu-open': isOpen}">
        <router-link class="like" to="/store/all">Catalog</router-link>
        <router-link class="like" to="/store/user/wishlist">Wishlist</router-link>
        <router-link class="basket" to="/store/user/basket">Cart</router-link>
        <button @click="openAuthModal">Log in/Sign up</button>
    </nav>
</template>

<style scoped>
.burger {
    display: none;
    position: relative;
    width: 30px;
    height: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    transition: transform .3s ease;
}
.burger-open {
    transform: rotate(-90deg);
}
.burger span {
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background: #000;
}
.menu {
    width: 400px;
    /* height: 250px; */
    display: none;
    transition: all .3s ease;
    top: -100%;
    left: 50%;
    transform: translate(-50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 12px;
    background: white;
    border: 1px solid var(--gray-light-text);
    border-radius: 8px;
    position: fixed;
    z-index: 999;
    overflow: hidden;
}
.menu-open {
    display: flex; 
    top: 50px;
}
.menu a {
    width: 100%;
    color: currentColor;
    position: relative;
    text-align: center;
    padding: 12px 0;
    text-decoration: none;
    transition: color .3s ease;
}
.menu a:hover {
    color: var(--orange-text);
}
.menu a::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
}
.menu button {
    font-family: var(--main-font);
    width: 100%;
    padding: 10px;
    color: white;    
    background: black;
    font-weight: 600;
    transition: .3s all;
}
.menu button:hover {
    background: #222222;
}
@media (min-width: 1101px) {
    .menu-open {
        display: none;
    }
}
@media (max-width: 1100px) {
    .burger {
        display: flex;
    }
}
</style>