<template>
    <button class="skeleton-button"></button>
</template>

<style scoped>
.skeleton-button {
    width: var(--clamp48px);
    height: var(--clamp48px);
    border-radius: 8px;
    background: var(--gray-dark-text);
    position: relative;
    overflow: hidden;
    animation: subtlePulse 2s infinite ease-in-out;
}

.skeleton-button::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(207, 207, 207, 0.7) 50%,
        transparent 100%
    );
    animation: shimmer 1.5s infinite;
}
</style>