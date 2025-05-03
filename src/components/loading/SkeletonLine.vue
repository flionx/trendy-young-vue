<template>
    <p class="skeleton-line"></p>
</template>

<style scoped>
.skeleton-line {
    height: 12px;
    width: 68px;
    background: var(--gray-dark-text);
    border-radius: 4px;
    opacity: 0.3;  
    position: relative;
    overflow: hidden;
    animation: subtlePulse 2s infinite ease-in-out;
}
.hmedium {
    height: 20px;
}
.hlarge {
    height: 25px;
}
.hverylarge {
    height: 35px;
}
.wmedium {
    width: 90px;
}
.wlarge {
    width: 130px;
}
.full {
    height: 20px;
    width: 100%;
}
.full::after {
    animation-duration: 2.5s !important;
}
.brad20 {
    border-radius: clamp(10px, 1.3vw, 20px);
}

.skeleton-line::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient( 90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
    animation: shimmer 1.5s infinite;
}

</style>