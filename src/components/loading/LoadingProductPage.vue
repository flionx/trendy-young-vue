<script setup>
import SkeletonButton from './SkeletonButton.vue';
import SkeletonLine from './skeletonLine.vue';
</script>

<template>
    <section class="card">
        <div class="card__img skeleton-pulse"></div>
        <div class="card__info">
            <div class="card__top">
                <SkeletonLine class="hmedium wlarge"/>
                <SkeletonLine class="hlarge"/>
            </div>
            <div class="card__btns">
                <SkeletonButton class="long"/>
                <SkeletonButton />
            </div>
            <div class="text">
                <SkeletonLine class="full"/> 
                <SkeletonLine class="full"/> 
                <SkeletonLine class="hmedium"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card {
    margin: var(--m20px) 0 var(--m70px) 0;
    display: flex;
    gap: clamp(20px, 5vw, 70px);
    min-height: 400px;
}

.card__img {
    width: clamp(300px, 27vw, 400px);
    background: var(--gray-light-text);
    border-radius: 16px;
}

.card__info {
    flex: 1 1 380px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.card__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
}

.card__btns {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 0.75rem; 
}

@media (max-width: 910px) {
    .card {
        flex-direction: column;
    }
    .card__img {
        width: 100%;
        aspect-ratio: 4/3;
    }
}
</style>