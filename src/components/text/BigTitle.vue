<template>
    <span>
        <slot></slot>
    </span>
</template>

<style scoped>
span {
    display: inline-block;
    font-weight: 700;
    font-size: clamp(30px, 3.3vw, 48px);
    line-height: 150%;
    color: var(--black);
}
</style>