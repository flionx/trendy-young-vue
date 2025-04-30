<template>
    <div class="container-grid">
        <div class="main">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.container-grid {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr 100px;
}
</style>
