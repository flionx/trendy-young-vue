<template>
    <button class="burger">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <nav class="menu">
        
    </nav>
</template>

<style scope>
    .burger {
        display: none;
        position: relative;
        width: 30px;
        height: 30px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: transparent;
    }
    .burger span {
        width: 100%;
        height: 3px;
        border-radius: 5px;
        background: #000;
    }
    .menu {
        display: none;
    }

    @media (max-width: 1100px) {
        .burger {
            display: flex;
        }
    }
</style>