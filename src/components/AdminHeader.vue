<script setup>
import { useUserStore } from '@/app/store/user';
import { getLocalStorage } from '@/utils/localStorageUtils';
const userStore = useUserStore();
</script>

<template>
    <div class="admin" v-if="userStore.user && userStore.user.role === 'admin'">
        <router-link to="/store/admin/all">Admin panel</router-link>
    </div>
</template>

<style scoped>
.admin {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    text-align: center;
    background: var(--orange-bg);
    font-size: 14px;
}
.admin a {
    color: var(--orange-text);
}
.admin a:hover {
    text-decoration: underline;
}
</style>