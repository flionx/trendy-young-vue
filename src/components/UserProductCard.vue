<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWishlistStore } from '@/app/store/wishlist';
import ProductPrice from './ProductPrice.vue';
import ProductInfo from './productCard/ProductInfo.vue';
import useBasketStore from '@/app/store/basket';
import EditProduct from './EditProduct.vue';
import ButtonOption from './ui/ButtonOption.vue';
import fetchDeleteProduct from '@/utils/products/fetchDeleteProduct';
import { useModalStore } from '@/app/store/modal';
const props = defineProps({
    card: Object,
    count: Number,
    isBasket: Boolean,
    btns: String,
})
const isAdminEdit = ref(false)
const wishlistStore = useWishlistStore();
const basketStore = useBasketStore();
const router = useRouter();
const modalStore = useModalStore();

const deleteFromUserList = computed(() => props.isBasket ? basketStore.deleteFromBasket : wishlistStore.deleteFromWishlist );

function deleteProduct(id) {
    modalStore.setModal(`Removed from ${props.isBasket ? 'Cart' : 'Wishlist'}`, `${props.isBasket ? 'basket' : 'like'}`)
    deleteFromUserList.value(id);
}
async function deleteFromAdmin(id) {
    try {
        const isDelete = await fetchDeleteProduct(id);
        if (isDelete) {       
            modalStore.setModal('The product was removed', 'basket');
        }
    } catch (error) {
        modalStore.setModal('Error during product remove', '');
    }
}
function goToProductPage(card) {    
    router.push(`/product/${card._id}`)
}
</script>

<template>
    <section class="card" v-if="card">
        <button class="img" title="Visit product page" @click="goToProductPage(card)">
            <img :src="card.img" alt="product image">
        </button>
        <div class="card__right">
            <div class="card__info">
                <ProductInfo :id="card._id" :name="card.name"/>
                <div class="card__price-wrapper">
                    <div class="card__count" v-if="isBasket">
                        <button class="minus" 
                            @click="basketStore.minusBasket(card._id)">
                            <span></span>
                        </button>
                        <div class="count">{{ count ?? 1 }}</div>
                        <button class="plus"
                            @click="basketStore.addToBasket(card)">
                            <span></span>
                            <span class="vertical"></span>
                        </button>
                    </div>
                    <ProductPrice :price="card.price" :sale="card.sale" />
                </div>
            </div>
            <template v-if="btns === 'basic'">
                <ButtonOption class="delete"
                    @click="deleteProduct(card._id)" 
                    title="Delete product">
                </ButtonOption>
            </template>
            <template v-if="btns === 'admin'">
                <div class="btns__container">
                    <ButtonOption class="edit"
                    @click="isAdminEdit = !isAdminEdit" 
                    title="Edit product">
                    </ButtonOption>
                    <ButtonOption class="trash"
                        @click="deleteFromAdmin(card._id)"
                        title="Delete product">
                    </ButtonOption>
                </div>
            </template>
        </div>
    </section>
    <EditProduct v-if="isAdminEdit" 
        v-model:isAdminEdit="isAdminEdit" 
        :card="card" 
    />
</template>

<style scoped>
.card {
    margin: 0 auto;
    width: 95%;
    display: flex;
    column-gap: 26px;
    align-items: center;
    margin-bottom: 16px;
    padding: 12px var(--m20px) 12px 12px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
@media (max-width: 800px) {
    .card {
        width: 100%;
    }
}
.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card .img {
    width: 175px;
    height: 175px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
}

.img:hover img {
    transform: scale(1.03);
}

.card__right {
    padding: 20px 0;
    width: 100%;
    height: 100%;
    position: relative;
}

.card__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--bg-color);
}

.card__price-wrapper {
    margin-top: auto;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card__count {
    display: flex;
    column-gap: 8px;
}
.card__count .count{
    min-width: var(--clamp48px);
    height: var(--clamp48px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px solid var(--gray-light)
}
.card__count button {
    width: var(--clamp48px);
    height: var(--clamp48px);
    padding: clamp(10px, 1vw, 15px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray-main);
    border-radius: 8px;
    position: relative;
}
.card__count button span {
    width: 100%;
    height: 2.5px;
    background: var(--bg-color);
    border-radius: 5px;
}
.plus {
    position: relative;
}
.plus span {
    width: 18px !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.vertical {
    transform: translate(-50%, -50%) rotate(90deg) !important;
}
.btns__container {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}
.btns__container, 
.delete {
    position: absolute;
    top: 12px;
    right: 0;
}

</style>