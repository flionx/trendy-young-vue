<template>
    <div class="card" :class="{ 'small-card': isSmallSale }">
        <div class="card__info">
            <template v-if="isSmallSale">
                <BigTitle>Sale</BigTitle>
                <RegularText>Modern clothing up to</RegularText>
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
.small-card {
    max-height: 252px;
}
.card__info {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    color: var(--bg-color);
}
.card__info a {
    width: fit-content;
    position: relative;
    padding-right: 20px;
    color: var(--bg-color);

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
    mask-image: var(--arrow-right-url);
    mask-position: center;
    mask-size: cover;
    background: var(--bg-color);

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