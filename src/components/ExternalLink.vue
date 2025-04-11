<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <slot />
    </a>
</template>

<script setup>
defineProps({
    link: String
})
</script>