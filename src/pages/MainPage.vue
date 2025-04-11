<script setup>
import BigTitle from '@/components/BigTitle.vue';
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';

</script>

<template>
    <Header />
    <main>
        <h2><BigTitle>Find Your Style, Express Yourself</BigTitle></h2>
        <HeroSection />
    </main>
</template>

<style scoped>
h2 {
    margin-bottom: clamp(25px, 2.5vw, 70px);
}
</style>