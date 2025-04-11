<script setup>
import BigTitle from '@/components/text/BigTitle.vue';
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
import FullWidthCard from '@/components/FullWidthCard.vue';

</script>

<template>
    <Header />
    <main>
        <h2><BigTitle>Find Your Style, Express Yourself</BigTitle></h2>
        <HeroSection />
        <CategoriesSection />
        <!-- <FullWidthCard :card="{img: '/mainPage/sale-1.jpg'}" :isSmallSale="true"/> -->
    </main>
</template>

<style scoped>
h2 {
    margin-bottom: clamp(25px, 2.5vw, 70px);
}
</style>