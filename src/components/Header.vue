<script setup>
import BurgerNav from '../components/BurgerNav.vue'
const isAuthForm = defineModel('isAuthForm');
</script>

<template>
    <header>
        <h1>Trendy Young</h1>
        <div class="desktop">
            <div class="input">
                <input type="text" placeholder="What are you looking for?">
            </div>
            <nav class="header__nav">
                <router-link to="/store/user/wishlist" class="wishlist"></router-link>
                <router-link to="store/user/basket" class="cart">Cart</router-link>
                <button class="login" @click="isAuthForm = true">Log in/Sign up</button>
            </nav>
        </div>
        <BurgerNav />
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
        color: var(--black);
        margin-right: 25px;
    }

    .input {
        flex: 1 1;
        max-width: 600px;
        min-width: 300px;
        margin-right: 20px;
        position: relative;
    }
    input {
        width: 100%;
        padding: 10px 8px 8px 45px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        border-radius: 8px;
        border: 1px solid var(--gray-light);
    }
    .input::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        width: 19px;
        height: 19px;
        background-image: url('/icons/search.svg');
        background-position: center;
        background-size: cover;
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
    .login {
        background: var(--black) !important;
        color: var(--white) !important;
    }
    .login:hover {
        background: #222222 !important;
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