<template>
    <header>
        <router-link to="/" class="btn-home"></router-link>
        <h1><BigTitle>{{ text }}</BigTitle></h1>
    </header>
</template>

<script setup>
import BigTitle from "./text/BigTitle.vue";
defineProps({
    text: {
        type: String,
        default: "Women's clothing",
    },
})

</script>

<style scoped>
header {
    margin: var(--m20px) 0;
    display: flex;
    align-items: center;
    padding: 48px;
    border-radius: 16px;
    background: var(--gray-main);
    column-gap: 24px;
}
.btn-home {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: #B8B8B8;
    border-radius: 8px;
    position: relative;
    transition: .4s all;
}
.btn-home:hover {
    background: #ababab;
}
.btn-home:hover::before {
    transform: translate(-60%, -50%) rotate(180deg);
}
.btn-home::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%) rotate(180deg);
    mask-image: var(--arrow-right-url);
    mask-size: cover;
    mask-position: center;
    mask-repeat: no-repeat;
    background: white;
    transition: .4s all;
}
</style>