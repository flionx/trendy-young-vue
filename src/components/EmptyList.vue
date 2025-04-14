<script setup lang="ts">
import MiddleTitle from './text/MiddleTitle.vue';
import RegularText from './text/RegularText.vue';
const props = defineProps({
    title: String,
})
</script>

<template>
    <section class="empty">
        <div class="empty__icon" :class="(title === 'WishList' ? 'like' : 'basket')"></div>
        <h2><MiddleTitle>{{ title }} is Empty</MiddleTitle></h2>
        <p><RegularText>Looks like you haven’t added anything to your {{ title }} yet</RegularText></p>
        <router-link to="/">Back to Homepage</router-link>
    </section>
</template>

<style scoped>
.empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.empty__icon {
    width: 48px;
    height: 48px;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    background: var(--bg-color);
    margin-bottom: var(--m20px);
}
.like {
    mask-image: var(--like-url);
}
.basket {
    mask-image: var(--basket-url);
}
p {
    color: var(--gray-dark-text);
}
</style>