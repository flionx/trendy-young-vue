<script setup>
import BurgerNav from '../components/BurgerNav.vue'
import ButtonContrast from '../components/ui/ButtonContrast.vue'
import InputSearch from './InputSearch.vue';
const isAuthForm = defineModel('isAuthForm');
</script>

<template>
    <header>
        <h1>Trendy Young</h1>
        <div class="desktop">
            <InputSearch />
            <nav class="header__nav">
                <router-link to="/store/user/wishlist" class="wishlist"></router-link>
                <router-link to="/store/user/basket" class="cart">Cart</router-link>
                <ButtonContrast :handleClick="() => isAuthForm = true">Log in/Sign up</ButtonContrast>
            </nav>
        </div>
        <BurgerNav v-model:isAuthForm="isAuthForm"/>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    white-space: nowrap;
}
h1 {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: var(--bg-color);
    margin-right: 25px;
}
.header__nav {
    display: flex;
    align-items: center;
    column-gap: 8px;
}
.header__nav button, 
.header__nav a {
    min-width: 48px;
    height: 48px;
    padding: 14px;
    border-radius: 8px;
    background: var(--orange-bg);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: var(--orange-text);
    position: relative;
    border: none;
    cursor: pointer;
    transition: .3s all;
    text-decoration: none;
}
.wishlist::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 18px;
    background-image: var(--like-url);
    background-size: cover;
    background-position: center;
}
.cart {
    padding-left: 44px !important;
}
.cart:hover,
.wishlist:hover {
    background: var(--orange-bg-hover);
}
.cart::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    width: 22px;
    height: 18px;
    background-image: var(--basket-url);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.desktop {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 1100px) {
    .desktop {
        display: none;
    }
    header {
        width: 100%;
        justify-content: space-between !important; 
    }
}
</style>