import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Location from '../views/LocationView.vue'
import Travel from '../views/TravelView.vue'
import Forecast from '../views/ForecastView.vue'
import About from '../views/AboutView.vue'
import Profile from '../views/RegisterView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import ForecastView from '../views/ForecastView.vue'
import TravelView from '../views/TravelView.vue'
import LocationView from '../views/LocationView.vue'

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
      component: LocationView,
    },
    {
      path: '/travel',
      name: 'travel',
      component: TravelView,
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: ForecastView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: RegisterView,
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
