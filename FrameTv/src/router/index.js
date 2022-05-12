import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import device from '../views/device.vue'
import frame from '../views/frame.vue'
import newdevice from '../views/newdeviceregister.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: frame
        },

        {
            path: '/device',
            name: 'device',
            component: device
        },
        {
            path: '/newdevice',
            name: 'newdevice',
            component: newdevice
        },

        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        }
    ]
})

export default router