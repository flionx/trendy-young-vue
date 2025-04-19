<template>
    <router-link to="/" class="btn-home"></router-link>
</template>

<style scoped>
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