<template>
    <div class="card__product-info">
        <div class="card__type"><RegularText>{{ name }}</RegularText></div>
        <div class="card__art">Art: {{ id }}</div>
    </div>
</template>

<script setup>
import RegularText from '../text/RegularText.vue'
const props = defineProps({
    name: String,
    id: Number, //change to string
})
</script>

<style scoped>

.card__product-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.card__type {
    width: calc(100% - 35px);
}
.card__art {
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-dark-text);
    opacity: 0.7;
}

</style>