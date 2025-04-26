<script setup>
import BigTitle from '@/components/text/BigTitle.vue';
import Header from '@/components/Header.vue';
import AuthForm from '@/components/AuthForm.vue';
import HeroSection from '@/components/HeroSection.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
import FullWidthCard from '@/components/FullWidthCard.vue';
import ShopBySection from '@/components/ShopBySection.vue';
import PopularCards from '@/components/PopularCards.vue';
import { ref } from 'vue';

const isAuthForm = ref(false);
</script>

<template>
    <Header v-model:isAuthForm="isAuthForm"/>
    <AuthForm v-if="isAuthForm"
        v-model:isAuthForm="isAuthForm" 
    />
    <main>
        <h2><BigTitle>Find Your Style, Express Yourself</BigTitle></h2>
        <HeroSection />
        <CategoriesSection />
        <section id="fullCard">
            <FullWidthCard :card="{img: '/mainPage/sale-1.png'}" :isSmallSale="true"/>
        </section>
        <PopularCards/>
        <ShopBySection />
    </main>
</template>

<style scoped>
h2 {
    margin-bottom: clamp(25px, 2.5vw, 50px);
    color: var(--bg-color);
}
#fullCard {
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: var(--m48px);
}
</style>