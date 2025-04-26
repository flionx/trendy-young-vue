<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    min-width: 48px;
    height: 48px;
    padding: var(--clamp12px);
    border-radius: 8px;
    background: var(--orange-bg);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: var(--orange-text);
    position: relative;
    border: none;
    cursor: pointer;
    transition: .3s all;
    text-decoration: none;
    white-space: nowrap;
}
button::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 18px;
}

.like::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: var(--like-url);
    background-size: cover;
    background-position: center;
}
.cart {
    padding-left: 44px !important;
}
.cart::after {
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    background-image: var(--basket-url);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
button:hover {
    background: var(--orange-bg-hover);
}

</style>