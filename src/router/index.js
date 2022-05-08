import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/HomeView.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        component: () =>
            import ('../views/SigninView.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ('../views/SignupView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/course/:id',
        name: 'course-details',
        component: () =>
            import ('../views/CourseDetailsView.vue')
    },
    {
        path: '/courses',
        name: 'courses',
        component: () =>
            import ('../views/CoursesView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () =>
            import ('../views/ErrorView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router