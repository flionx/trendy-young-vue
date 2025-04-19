<template>
    <div class="input">
        <input type="text" placeholder="What are you looking for?">
    </div>
</template>

<style scopes>
.input {
    flex: 1 1;
    max-width: 600px;
    min-width: 300px;
    margin-right: 20px;
    position: relative;
    border: 1px solid var(--gray-light);
    border-radius: 8px;
}
input {
    width: 100%;
    padding: 10px 8px 8px 45px;
    font-weight: 400;
    font-size: 16px;
    border-radius: 8px;
}
.input::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 19px;
    height: 19px;
    background-image: url('/icons/search.svg');
    background-position: center;
    background-size: cover;
}
</style>