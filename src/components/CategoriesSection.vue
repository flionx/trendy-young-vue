<script setup>
import MiddleTitle from './text/MiddleTitle.vue';
import SmallTitle from './text/SmallTitle.vue';
</script>

<template>
    <section>
        <h3><MiddleTitle>Clothing for Everyone</MiddleTitle></h3>
        <div class="row">
            <router-link to="/store/women" id="women"><SmallTitle>Women's clothing</SmallTitle></router-link>
            <router-link to="/store/men" id="men"><SmallTitle>Men's clothing</SmallTitle></router-link>
            <router-link to="/store/children" id="children"><SmallTitle>Children's clothing</SmallTitle></router-link>
        </div>
    </section>
</template>

<style scoped>
h3 {
    margin-bottom: var(--m20px);
    color: var(--bg-color)
}
section {
    margin-bottom: var(--m48px);
}
.row {
    width: 100%;
    display: flex;
    gap: var(--column-gap);
    flex-wrap: wrap;
}
.row a {
    flex: 1 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    padding: 24px;
    height: 185px;
    background-position: center;
    background-size: cover;
    transition: .5s all;
    color: white;
}
.row a:hover {
    transform: translateY(-2px);
}
#women {
    background-image: var(--women-url);
}
#men {
    background-image: var(--men-url);
}
#children {
    background-image: var(--children-url);
}
</style>