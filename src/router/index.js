import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('../views/ProfileView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router