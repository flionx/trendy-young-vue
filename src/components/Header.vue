<script setup>
import BurgerNav from '../components/BurgerNav.vue'
import ButtonContrast from '../components/ui/ButtonContrast.vue'
import InputSearch from './InputSearch.vue';
import ButtonOrange from './ui/ButtonOrange.vue';
const isAuthForm = defineModel('isAuthForm');
</script>

<template>
    <header>
        <h1>Trendy Young</h1>
        <div class="desktop">
            <InputSearch />
            <nav class="header__nav">
                <router-link to="/store/user/wishlist">
                    <ButtonOrange icon="like"/>
                </router-link>
                <router-link to="/store/user/basket" class="cart">
                    <ButtonOrange icon="cart">Cart</ButtonOrange>
                </router-link>
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