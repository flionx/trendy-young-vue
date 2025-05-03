<template>
    <div class="card">
        <div class="card__image skeleton-pulse"></div>
        <div class="card__info">
            <div class="card__left">
                <p class="skeleton-line"></p>
                <p class="skeleton-line"></p>
                <p class="skeleton-line"></p>
            </div>
            <button class="skeleton-button"></button>
        </div>
    </div>
</template>

<style scoped>
.card {
    flex: 1 1;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
}

.card__image {
    width: 100%;
    height: 323px;
    background: var(--gray-light-text);
    border-radius: 16px 16px 0 0;
    position: relative;
    bottom: -15px;
    z-index: 1;
}

.card__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 101.5px;
    padding: var(--clamp24px) var(--clamp24px) var(--clamp12px) var(--clamp24px);
    background: var(--gray-main);
    border-radius: 0 0 16px 16px;
}

.card__left {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
/* anim */
.skeleton-pulse {
    position: relative;
    overflow: hidden;
    background: var(--gray-light-text);
    animation: subtlePulse 2s infinite ease-in-out;
}

.skeleton-pulse::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
    );
    animation: shimmer 1.5s infinite;
    animation-timing-function: linear;
}

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

.skeleton-line:first-child {
    width: 98px;
    opacity: 0.4;
}

.skeleton-line::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.5) 50%,
        transparent 100%
    );
    animation: shimmer 1.5s infinite;
}

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

@keyframes subtlePulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; } 
}

@keyframes shimmer {
    0% { transform: translateX(-150%); }
    100% { transform: translateX(150%); }
}
@media (max-width: 545px) {
    .card__image {
        height: 250px;
    }
}
</style>