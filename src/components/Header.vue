<script setup>
import { ref } from 'vue';
import { getLocalStorage } from '@/utils/localStorageUtils';
import BurgerNav from '../components/BurgerNav.vue'
import ButtonContrast from '../components/ui/ButtonContrast.vue'
import InputSearch from './InputSearch.vue';
import ButtonOrange from './ui/ButtonOrange.vue';
import RegularText from './text/RegularText.vue';
import AdminHeader from './AdminHeader.vue';
import ModalUserProfile from './ModalUserProfile.vue';
import { useUserStore } from '@/app/store/user';
import IconUser from './ui/icons/IconUser.vue';
const isAuthForm = defineModel('isAuthForm');
const isModalProfile = ref(false);
const userStore = useUserStore();
</script>

<template>
    <AdminHeader />
    <header>
        <h1>Trendy Young</h1>
        <div class="desktop">
            <InputSearch />
            <nav>
                <router-link to="/store/user/wishlist">
                    <ButtonOrange class="like"/>
                </router-link>
                <router-link to="/store/user/basket">
                    <ButtonOrange class="cart">Cart</ButtonOrange>
                </router-link>
                <template v-if="!userStore.user">
                    <ButtonContrast @click="() => isAuthForm = true">Log in/Sign up</ButtonContrast>
                </template>
                <template v-if="userStore.user">
                    <div class="user-container">
                        <button class="user" @click="isModalProfile = !isModalProfile">
                            <IconUser />{{ userStore.user.role }}
                        </button>
                        <ModalUserProfile v-if="isModalProfile"
                            v-model:isModalProfile="isModalProfile" 
                        />
                    </div>
                </template>
            </nav>
        </div>
        <BurgerNav v-model:isAuthForm="isAuthForm" />
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
nav {
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
.user-container {
    position: relative;
}
.user {
    display: flex;
    column-gap: 12px;
    align-items: center;
    min-width: 48px;
    height: 48px;
    padding: 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    background: var(--bg-color) !important;
    color: var(--text-color) !important;
    transition: .3s all;
}
.user:hover {
    background: var(--bg-color-hover) !important;
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