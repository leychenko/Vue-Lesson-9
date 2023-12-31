import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopCategory from '../views/ShopCategory.vue'
import PaymentRules from '@/views/PaymentRules.vue'
import ContactsView from '@/views/ContactsView.vue'
import ProductPage from '@/views/ProductPage.vue'



const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopCategory,
    },
    {
        path: '/products/:prodName',
        name: 'products',
        component: ProductPage,
    },
    {
        path: '/payment_rules',
        name: 'payment_rules',
        component: PaymentRules,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
    },
    //   {
    //     path: "/about",
    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    //   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
