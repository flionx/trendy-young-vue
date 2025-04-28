<script setup>
import { productTypes } from '@/constants/products';
import MiddleTitle from './text/MiddleTitle.vue';
import RegularText from './text/RegularText.vue';
import SmallTitle from './text/SmallTitle.vue';
</script>

<template>
    <section>
        <h3><MiddleTitle>Shop by Style</MiddleTitle></h3>
        <p><RegularText>Your style for every day</RegularText></p>
        <div class="row">
            <template v-for="type in productTypes" :key="type">
                <router-link :to="`/store/all/?type=${type}`" class="card" :id="type">
                    <SmallTitle>{{ type[0].toUpperCase() + type.slice(1) }}</SmallTitle>
                </router-link>
            </template>
        </div>
    </section>
</template>

<style scoped>
h3 {
    color: var(--bg-color);
}
p {
    margin-bottom: 20px;
    color: var(--gray-dark-text);
}
.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: var(--column-gap);
}
.row a {
    display: flex;
    min-width: 220px;
    height: 385px;
    flex: 1 1;
    padding: 24px;
    color: black;
    border-radius: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s all;
}
.row a:hover {
    transform: translateY(-2px);
}

#casual {
    background-image: var(--casual-url);
}
#formal {
    background-image: var(--formal-url);
}
#sport {
    background-image: var(--sport-url);
}
#sleep {
    background-image: var(--sleep-url);
}
</style>