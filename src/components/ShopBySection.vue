<script setup lang="ts">
import MiddleTitle from './text/MiddleTitle.vue';
import RegularText from './text/RegularText.vue';
import SmallTitle from './text/SmallTitle.vue';

</script>

<template>
    <section>
        <h3><MiddleTitle>Shop by Style</MiddleTitle></h3>
        <p><RegularText>Your style for every day</RegularText></p>
        <div class="row">
            <router-link to="/store/casual" class="card" id="casual">
                <SmallTitle>Casual</SmallTitle>
            </router-link>
            <router-link to="/store/formal" class="card" id="formal">
                <SmallTitle>Formal</SmallTitle>
            </router-link>
            <router-link to="/store/sport" class="card" id="sport">
                <SmallTitle>Sport</SmallTitle>
            </router-link>
            <router-link to="/store/sleep" class="card" id="sleep">
                <SmallTitle>Sleep</SmallTitle>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
h3 {
    color: var(--bg-color);
}
p {
    margin-bottom: 20px;
    color: var(--gray-dark-text);
}
.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: var(--column-gap);
}
.row a {
    display: flex;
    min-width: 220px;
    height: 385px;
    flex: 1 1;
    padding: 24px;
    color: black;
    border-radius: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s all;
}
.row a:hover {
    transform: translateY(-2px);
}

#casual {
    background-image: var(--casual-url);
}
#formal {
    background-image: var(--formal-url);
}
#sport {
    background-image: var(--sport-url);
}
#sleep {
    background-image: var(--sleep-url);
}
</style>