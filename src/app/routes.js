import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import MainLayout from "./layouts/MainLayout.vue";
import SecondLayout from "./layouts/SecondLayout.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import WishlistPage from "@/pages/WishlistPage.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                component: MainPage,
            },
            {
                path: '/store',
                component: SecondLayout,
                children: [
                    {
                        path: ':category',
                        component: CategoryPage,
                    },
                    {
                        path: 'user/basket',
                        component: BasketPage,
                    },
                    {
                        path: 'user/wishlist',
                        component: WishlistPage,
                    }
                ]
            },
            {
                path: '/product/:id',
                component: SecondLayout //change
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;