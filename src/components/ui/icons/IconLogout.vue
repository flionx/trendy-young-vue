<template>
    <span></span>
</template>

<style scoped>
span {
    position: relative;
    width: 15px;
    height: 13.5px;
}
span::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mask-image: var(--logout-url);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    background: var(--bg-color);
}
.light::after {
    background: white;
}
</style>