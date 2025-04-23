<template>
    <button>
    </button>
</template>

<style scoped>

button {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--gray-main);
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
    position: relative;
}

button:hover {
    transform: scale(1.05);
}

button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    background: var(--bg-color);
}

.delete::after {
    mask-image: var(--close-url);
}
.edit::after {
    mask-image: var(--edit-url);
}
.trash::after {
    mask-image: var(--trash-url);
}
</style>