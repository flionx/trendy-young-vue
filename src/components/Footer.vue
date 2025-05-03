<template>
    <footer>
        <div class="block half">
            <nav class="links">
                <ExternalLink href='https://github.com/flionx' class="github" />
                <ExternalLink href='https://www.instagram.com/dn06sh' class="instagram" />
            </nav>
        </div>
        <div class="block full">
            <span class="copy">&copy; Trendy Young 2025</span>
        </div>
        <div class="block half">
            <div class="theme">
                <SwithCheck v-model:theme="theme"/>
            </div>
        </div>
    </footer>
</template>

<script setup>
import ExternalLink from '@/components/ExternalLink.vue';
import SwithCheck from './SwithCheck.vue';
import { ref, watchEffect } from 'vue';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorageUtils';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const preferUsersTheme = prefersDark ? 'dark' : 'light';

const theme = ref(getLocalStorage('theme') || preferUsersTheme);
watchEffect(() => {
    setLocalStorage('theme', (theme.value))
    document.documentElement.classList.toggle('dark-theme', theme.value !== 'light');
})
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 48px 0;
    color: var(--bg-color);
    white-space: nowrap;
    row-gap: 20px;
}
.block {

}
.links {
    width: fit-content;
    display: flex;
    align-items: center;
    column-gap: clamp(20px, 2.4vw, 35px);
}
a {
    width: 22px;
    height: 22px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.copy {
    flex: 1 1;
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

@media (max-width: 450px) {
    .block {
        width: 100%;
        text-align: center;
        order: 2;
    }
    .half {
        padding: 0 10px;
        width: fit-content;
        text-align: center;
    }
    .full {
        order: 1;
    }
    .links {
        margin: 0 auto;
    }
    footer {
        padding-bottom: 100px;
    }
}
</style>