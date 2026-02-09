import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import ForecastView from '../views/NewsView.vue'
import TravelView from '../views/TravelView.vue'
import DetailNewView from '../views/detail-newView.vue'
import detailNew1View from '../views/detail-new-1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/profile' // Start the app at the Register/Login page
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
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
      path: '/news/:id',
      name: 'detail-new',
      component: DetailNewView
    },
    {
      path: '/detail-new-1',
      name: 'detail-new-1',
      component: detailNew1View
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
  ],
})

export default router