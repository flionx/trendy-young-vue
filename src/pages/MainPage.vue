<script setup>
import BigTitle from '@/components/text/BigTitle.vue';
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
import FullWidthCard from '@/components/FullWidthCard.vue';
import CategoriesTypeSection from '@/components/CategoriesTypeSection.vue';

</script>

<template>
    <Header />
    <main>
        <h2><BigTitle>Find Your Style, Express Yourself</BigTitle></h2>
        <HeroSection />
        <CategoriesSection />
        <section id="fullCard">
            <FullWidthCard :card="{img: '/mainPage/sale-1.jpg'}" :isSmallSale="true"/>
        </section>
        <CategoriesTypeSection />
    </main>
</template>

<style scoped>
h2 {
    margin-bottom: clamp(25px, 2.5vw, 50px);
}
#fullCard {
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: var(--margin-bottom);
}
</style>