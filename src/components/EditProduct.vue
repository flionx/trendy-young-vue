<script setup>
import { productTargets, productTypes } from '@/constants/products';
import { reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import CustomSelect from './CustomSelect.vue';
import ButtonOption from './ui/ButtonOption.vue';
import useChangeImage from '@/hooks/useChangeImage';
import ModalInfo from './ui/ModalInfo.vue';
import { useModalInfo } from '@/hooks/useModalInfo';
import fetchProductById from '@/utils/fetchProductById';

const props = defineProps({
    card: Object,
    isCreate: Boolean,
})
const isAdminEdit = defineModel('isAdminEdit')
const router = useRouter();

const currProduct = reactive({
    img: '',
    brand: '',
    name: '',
    type: '',
    target: '',
    description: '',
    price: 0,
})
watchEffect(() => {
    if (!props.isCreate.value) {
        Object.assign(currProduct, props.card);
    }
})
const inputFile = ref(null);
const {modalInfo, setModalInfo} = useModalInfo();
const {changeImage, uploading} = useChangeImage();
watchEffect(() => {
    if (uploading.value) {
        setModalInfo('Please wait. Uploading an image', '')
    }
})
function isCorrectInputs() {
    if (!currProduct.img.trim() ||
        !currProduct.brand.trim() ||
        !currProduct.name.trim() ||
        !currProduct.type.trim() ||
        !currProduct.target.trim() ||
        !currProduct.description.trim() || 
        currProduct.price <= 0 || 
        currProduct.sale < 0
    ) {
       return false; 
    } else {
        return true;
    }
}

async function addNewProduct() {
    if (!isCorrectInputs()) {
        setModalInfo('Please fill in the fields correctly' , '')
        return;
    }
    try {
        const newProduct = await fetch('http://localhost:5000/api/product/create', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(currProduct),
        }) // the path is temporary, it'll be hosted later.

        if (newProduct.status === 201) {
            const result = await newProduct.json();
            result.product;
            
            setModalInfo('The product has been successfully created', '')
            isAdminEdit.value = false;
        }

    } catch (error) {
        setModalInfo('Error during product creation', '')
        console.log('Error during product creation', error);
    }
}

</script>

<template>
    <div class="item">
        <div class="img" title="Visit product page" :class="{noimg: !currProduct.img}">
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
                    <label for="price">Product price $</label>
                    <input type="number" min="1" id="price" placeholder="Enter product price" v-model="currProduct.price">
                </div>
                <div class="column">
                    <label for="sale">Product sale $(not required)</label>
                    <input type="number" min="0" id="sale" placeholder="Enter product sale" v-model="currProduct.sale">
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="description">Product description</label>
                    <textarea id="description" placeholder="Enter product description" v-model="currProduct.description"></textarea>
                </div>
            </div>
            <div class="row-btns">
                <button class="nobg" @click="isAdminEdit = false">Cancel</button>
                <button v-if="!isCreate">Delete</button>
                <button @click="isCreate ? addNewProduct() : 'Save'">{{isCreate ? 'Add product' : 'Save'}}</button>
            </div>
        </form>
    </div>
    <ModalInfo v-if="modalInfo.show" 
        v-model:isOpen="modalInfo.show"
        :className="modalInfo.className">
        {{modalInfo.text}}
    </ModalInfo>
</template>

<style scoped>
.item {
    margin: 0 auto;
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
.noimg {
    height: fit-content;
    background: transparent;
    min-height: 400px;
    position: relative;
    background: var(--gray-main);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.noimg img {
    display: none;
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
textarea,
input:not(.select) {
    padding: 10px 12px;
    background: transparent;
    color: var(--bg-color);
    border: 1px solid var(--gray-light-text);
    border-radius: 8px;
}
textarea {
  resize: none;
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
    color: var(--bg-color);
    transition: .3s all;
}
.row-btns button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.row-btns button:active {
    transform: translateY(0);
    box-shadow: none;
}
.row-btns button.nobg{
    background: transparent;
    border: 2px solid var(--gray-main);
}

</style>