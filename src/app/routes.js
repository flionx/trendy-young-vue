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
            const verify = await fetch(`${authApiUrl}/verify`, {
                credentials: 'include',
            });

            if (verify.ok) return next();

            if (verify.status === 401) {
                try {
                    await refreshAccessToken(); 
                    const retryVerify = await fetch(`${authApiUrl}/verify`, {
                        credentials: 'include',
                    });

                    if (retryVerify.ok) {
                        return next();
                    } else {
                        throw new Error('Access denied');
                    }
                } catch (refreshError) {
                    console.error('Token refresh failed:', refreshError.message);
                    throw new Error('Failed to refresh token');
                }
            }
            
            throw new Error('Access denied');
        } catch (error) {
            console.error('Admin verification failed:', error.message);
            localStorage.clear();
            return next('/'); 
        }
    } else {
        next(); // other path
    }
});

export default router;