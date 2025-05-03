<script setup>
import SkeletonButton from './SkeletonButton.vue';
import SkeletonLine from './skeletonLine.vue';

</script>

<template>
    <div class="card">
        <div class="card__image skeleton-pulse"></div>
        <div class="card__info">
            <div class="card__left">
                <SkeletonLine />
                <SkeletonLine />
                <SkeletonLine />
            </div>
            <SkeletonButton />
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

.skeleton-line:first-child {
    width: 98px;
    opacity: 0.4;
}
@media (max-width: 545px) {
    .card__image {
        height: 250px;
    }
}
</style>