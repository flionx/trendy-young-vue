<template>
    <div class="card__product-info">
        <div class="card__type"><RegularText>{{ name }}</RegularText></div>
        <button @click="copyToClipboard(id)" class="card__art">
            <span class="art">Art: {{ id }}</span> 
            <IconCopy />
        </button>
    </div>
</template>

<script setup>
import useClipboard from '@/hooks/useClipboard';
import RegularText from '../text/RegularText.vue'
import IconCopy from '../ui/icons/IconCopy.vue';
const props = defineProps({
    name: String,
    id: String,
})
const {copyToClipboard} = useClipboard();
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
    display: flex;
    align-items: center;
    column-gap: 5px;
    background: transparent;
    opacity: 0.7;
}
.card__art .art{
    max-width: 100px;
    text-overflow: ellipsis;    
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-dark-text);
    background: transparent;
    opacity: 0.7;
}

</style>