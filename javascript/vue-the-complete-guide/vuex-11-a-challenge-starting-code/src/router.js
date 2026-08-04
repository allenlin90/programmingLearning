import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/products-list.vue';
import UserCart from './pages/user-cart.vue';
import ShopAdmin from './pages/shop-admin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
  ]
});

export default router;