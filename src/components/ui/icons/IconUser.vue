<template>
    <span></span>
</template>

<style scoped>
span {
    width: 30px;
    height: 30px;
    position: relative;
}
span::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mask-image: var(--avatar-url);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    background: var(--text-color);
}
</style>