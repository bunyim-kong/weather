import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Location from '../views/Location.vue'
import Travel from '../views/Travel.vue'
import Forecast from '../views/Forecast.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/location',
      name: 'loaction',
      component: Location,
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: Forecast,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    


    // another way to connect the router
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
