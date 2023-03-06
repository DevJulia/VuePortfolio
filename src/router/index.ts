import { createRouter, createWebHashHistory } from 'vue-router'
import MeView from '@/views/MeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MeView
    },
    {
      path: '/vue-use',
      name: 'VueUse',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VueUseView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
  ]
})

export default router
