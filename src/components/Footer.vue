<template>
    <footer>
        <nav class="links">
            <ExternalLink link='https://github.com/flionx' class="github" />
            <ExternalLink link='https://www.instagram.com/dn06sh' class="instagram" />
        </nav>
        <span class="copy">&copy; Trendy Young 2025</span>
        <div class="theme">
            <SwithCheck v-model:theme="theme"/>
        </div>
    </footer>
</template>

<script setup>
import ExternalLink from '@/components/ExternalLink.vue';
import SwithCheck from './SwithCheck.vue';
import { ref, watchEffect } from 'vue';

const theme = ref('light');
watchEffect(() => {
    if (theme.value === 'light') {
        document.documentElement.classList.remove('dark-theme');
    } else {
        document.documentElement.classList.add('dark-theme');
    }
})

</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 48px 0;
        color: var(--black);
        white-space: nowrap;
        row-gap: 20px;
    }
    .links {
        height: 24px;
        display: flex;
        align-items: center;
        column-gap: 35px;
    }
    a {
        width: 22px;
        height: 22px;
        background-position: center;
        background-size: cover;
    }
    .copy {
        flex: 1 1 ;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        color: var(--gray-dark-text);
        padding: 0 20px;
    }
    .github {
        background-image: var(--github-url);
    }
    .instagram {
        background-image: var(--instagram-url);
    }
    .theme {
        width: fit-content;
        position: relative;
        padding: 0 35px;
    }
    .theme::before, 
    .theme::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .theme::before {
        left: 0;
        background-image: var(--moon-url);
    }
    .theme::after {
        right: 0;
        background-image: var(--sun-url);
    }

</style>