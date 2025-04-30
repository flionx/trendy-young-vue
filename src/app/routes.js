import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import MainLayout from "./layouts/MainLayout.vue";
import SecondLayout from "./layouts/SecondLayout.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import WishlistPage from "@/pages/WishlistPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import AdminPage from "@/pages/AdminPage.vue";
import { getLocalStorage } from "@/utils/localStorageUtils";
import { authApiUrl } from "@/constants/auth";
import refreshAccessToken from "@/utils/auth/refreshAccessToken";

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
                    },
                    {
                        path: 'admin/:category',
                        component: AdminPage,
                        meta: { isAdmin: true }
                    },
                    {
                        path: '', 
                        redirect: '/store/all'
                    },
                ]
            },
            {
                path: '/product/:id',
                component: ProductPage
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.isAdmin) {
        try {
            const response = await fetch(`${authApiUrl}/verify`, {
                credentials: 'include'
            })
            
            if (!response.ok) {
                if (response.status === 403) {
                    const accessToken = await refreshAccessToken();
                    if (!accessToken) throw Error('Access denied');
                } else {
                    throw Error('Access denied');
                }
            }
            next();
        } catch (error) {
            localStorage.clear();
            location.reload();
            console.log('Admin verification failed:', error);
            next('/');
        }

    } else {
        next();
    }
});

export default router;