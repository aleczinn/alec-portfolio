import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: "/one",
        name: "Portfolio 1",
        component: () => import('../views/PortfolioOne.vue'),
    },
    {
        path: "/two",
        name: "Portfolio 2",
        component: () => import('../views/PortfolioTwo.vue'),
    },
    {
        path: "/three",
        name: "Portfolio 3",
        component: () => import('../views/PortfolioFour.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('../views/PageNotFoundView.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
