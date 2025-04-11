<template>
    <div class="card">
        <div class="card__info">
            <template v-if="isSmallSale">
                <BigTitle>Sale</BigTitle>
                <RegularText>All clothes up to </RegularText>
                <MiddleTitle>10% off</MiddleTitle>
            </template>
            <template v-else-if="!isSmallSale">
                <MiddleTitle>{{ card.description }}</MiddleTitle>
                <BigTitle>{{ card.sale }}</BigTitle>
            </template>
            <router-link to='/'>
                <RegularText>Learn more</RegularText>
            </router-link>
        </div>
        <img :src='card.img' alt="sale image" class="card__image">
    </div>
</template>

<script setup>
import BigTitle from './text/BigTitle.vue';
import MiddleTitle from './text/MiddleTitle.vue';
import RegularText from './text/RegularText.vue';

defineProps({
    card: Object,
    isSmallSale: Boolean,
})
</script>

<style scoped>
.card {
    overflow: hidden;
    max-height: 352px;
    padding-left: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    background: var(--gray-main);
}
.card__info {
    flex: 1 1;
    display: flex;
    flex-direction: column;

}
.card__info a {
    width: fit-content;
    position: relative;
    padding-right: 20px;
}
.card__info a::after {
    content: '';
    width: fit-content;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-position: center;
    background-size: cover;
    background-image: var(--arrow-right-url);

}
.card__info a:hover {
    text-decoration: underline;
}

.card img {
    width: 40%;
    object-fit: cover;
    object-position: center;
}
</style>