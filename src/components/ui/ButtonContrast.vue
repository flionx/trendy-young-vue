<template>
    <button @click="handleClick">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    handleClick: Function
})
</script>

<style scoped>
button {
    background: var(--bg-color) !important;
    color: var(--text-color) !important;
}
button:hover {
    background: var(--bg-color-hover) !important;
}
</style>