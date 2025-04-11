<template>
    <h2>
        <slot></slot>
    </h2>
</template>

<style scoped>
h2 {
    font-weight: 700;
    font-size: clamp(30px, 3.3vw, 48px);
    line-height: 150%;
    color: var(--black);
}
</style>