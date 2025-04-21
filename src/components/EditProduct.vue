<template>
    <div class="item">
        {{ card.name }}
    </div>
</template>

<script setup>
const props = defineProps({
    card: Object,
})
</script>