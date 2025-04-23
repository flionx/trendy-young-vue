<script setup>
import { productTargets, productTypes } from '@/constants/products';
import { useRouter } from 'vue-router';
import CustomSelect from './CustomSelect.vue';
import { reactive, ref, watchEffect } from 'vue';
import ButtonOption from './ui/ButtonOption.vue';
import useChangeImage from '@/hooks/useChangeImage';

const props = defineProps({
    card: Object,
})
const isAdminEdit = defineModel('isAdminEdit')
const router = useRouter();

const currProduct = reactive({
    id: -1,
    img: '',
    brand: '',
    name: '',
    type: '',
    target: '',
    price: 0,
})
watchEffect(() => {
    Object.assign(currProduct, props.card);
})
const inputFile = ref(null);
const {changeImage, uploading} = useChangeImage();

</script>

<template>
    <div class="item">
        <div class="img" title="Visit product page">
            <img :src="currProduct.img" alt="product image">
            <input type="file" ref="inputFile" class="input-file" @change="changeImage($event, currProduct)">
            <ButtonOption class="edit" 
                @click="inputFile.click()"
                title="Edit image">
            </ButtonOption>
        </div>
        <form @submit.prevent>
            <div class="row">
                <div class="column">
                    <label for="name">Product name</label>
                    <input type="text" id="name" placeholder="Enter product name" v-model="currProduct.name">
                </div>
                <div class="column">
                    <label for="brand">Product brand</label>
                    <input type="text" id="brand" placeholder="Enter product brand" v-model="currProduct.brand">
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="type">Product type</label>
                    <CustomSelect 
                        :hasBorder="true" 
                        v-model="currProduct.type" 
                        :options="productTypes" 
                        default="Product type"
                    />
                </div>
                <div class="column">
                    <label for="target">Product target</label>
                    <CustomSelect 
                        :hasBorder="true" 
                        v-model="currProduct.target" 
                        :options="productTargets" 
                        default="Product target"
                    />
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="price">Product price</label>
                    <input type="number" min="1" id="price" placeholder="Enter product price" v-model="currProduct.price">
                </div>
                <div class="column">
                    <label for="sale">Product sale</label>
                    <input type="number" min="1" id="sale" placeholder="Enter product sale" v-model="currProduct.sale">
                </div>
            </div>
            <div class="row-btns">
                <button class="nobg" @click="isAdminEdit = false">Cancel</button>
                <button>Delete</button>
                <button>Save</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.item {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    margin-bottom: var(--m48px);
}
@media (max-width: 800px) {
    .item {
        width: 100%;
    }
}
.img {
    height: fit-content;
    background: transparent;
    min-width: 250px;
    max-width: 400px;
    position: relative;
}
.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
}
.input-file {
    display: none;
}
.img button {
    position: absolute;
    top: 14px;
    right: 14px;
    background: var(--text-color);
}

form {
    flex: 1 1 300px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-wrap: wrap;
}
.column {
    display: flex;
    flex-direction: column;
    max-height: 80px;
}
label {
    margin-bottom: 5px;
    color: var(--bg-color)
}
input:not(.select) {
    padding: 10px 12px;
    background: transparent;
    color: var(--bg-color);
    border: 1px solid var(--gray-light-text);
    border-radius: 8px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.row .column {
    flex: 1 1 150px;
}
input[type='number'] {
    width: fit-content;
}
.row-btns {
    margin-top: 15px;
    display: flex;
    align-items: center;
    column-gap: 25px;
}

.row-btns button{
    font-family: var(--main-font);
    padding: 8px 12px;
    background: var(--gray-main);
    font-size: 17px;
    border-radius: 8px;
    color: var(--bg-color)
}
.row-btns button.nobg{
    background: transparent;
    border: 2px solid var(--gray-main);
}

</style>