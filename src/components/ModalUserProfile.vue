<script setup>
import { setLocalStorage } from '@/utils/localStorageUtils';
import RegularText from './text/RegularText.vue';
import { useUserStore } from '@/app/store/user';
import IconLogout from './ui/icons/IconLogout.vue';
import logOut from '@/utils/auth/logOut';
const isModalProfile = defineModel('isModalProfile');
const userStore = useUserStore();

async function logout() {
    isModalProfile.value = false;
    await logOut();
    userStore.resetUser();
    localStorage.clear();
    // location.reload();
}
</script>

<template>
  <dialog open>
    <button class="logout" @click="logout">
        <RegularText>Log out</RegularText>
        <IconLogout />
    </button>
  </dialog>
</template>

<style scoped>
dialog {
    width: 150px;
    position: absolute;
    z-index: 5;
    top: calc(100% + 8px);
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 5px;
    background: var(--text-color);
    border: 1px solid var(--gray-light);
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
}

dialog[open] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

button {
    background: transparent;
    color: var(--gray-dark-text);
    padding: 8px;
    border-radius: 4px;
    font-family: var(--main-font);
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease;
}

button:hover {
    color: var(--orange-text);
    border-color: var(--orange-text);
}

button:focus {
    outline: none;
    border-color: var(--orange-text);
}
.logout {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
}
</style>
