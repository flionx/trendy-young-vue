<template>
    <section>
        <div class="card">
            <div class="card__info">
                <SmallTitle>{{ cards[0].description }}</SmallTitle>
                <BigTitle>{{ cards[0].sale }}</BigTitle>
                <router-link to='/'>Learn more</router-link>
            </div>
            <img :src='cards[0].img' alt="sale image" class="card__image">
        </div>
    </section>
</template>

<script setup>
import BigTitle from './BigTitle.vue';
import SmallTitle from './SmallTitle.vue';
import saleone from '/mainPage/sale-1.jpg'
const cards = [
    {
        id: 1,
        description: 'High quality sweatshirt',
        sale: '30% off',
        img: saleone,
    },
]
</script>

<style scoped>
section {
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: clamp(20px, 2.5vw, 48px);
}
.card {
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
    font-weight: 400;
    font-size: 16px;
    color: var(--black);
    text-decoration: none;
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