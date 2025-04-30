<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    min-width: 48px;
    height: 48px;
    padding: 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    background: var(--bg-color) !important;
    color: var(--text-color) !important;
    transition: .3s all;
    position: relative;
}
button:hover {
    background: var(--bg-color-hover) !important;
}

</style>