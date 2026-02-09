<script setup>
import { ref, onMounted } from 'vue'

import newImg1 from '@/assets/image/img-new1.jpg'
import newImg2 from '@/assets/image/img-new2.jpg'
import newImg3 from '@/assets/image/img-new3.jpg'
import newImg4 from '@/assets/image/img-new4.jpg'
import newImg5 from '@/assets/image/img-new5.jpg'
import newImg6 from '@/assets/image/img-new6.jpg'
import newImg7 from '@/assets/image/img-new7.jpg'
import newImg8 from '@/assets/image/img-new8.jpg'
import newImg9 from '@/assets/image/img-new9.jpg'

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 100)
})

const newsList = [
  {
    id: 1,
    img: newImg1,
    title: 'The Role of High-Pressure Blocking in Prolonged Winter Weather',
    date: '2026-01-30',
    desc:
      'Why do some winter cold spells last for weeks instead of days? Learn how atmospheric patterns trap cold air.',
  },
  {
    id: 2,
    img: newImg2,
    title: 'meteoblue at the AMS Annual Meeting 2026 in Houston',
    date: '2026-01-24',
    desc:
      'Wind chill explains why cold weather can feel much colder than the thermometer shows.',
  },
  {
    id: 3,
    img: newImg3,
    title: 'Jet Stream and Winter Weather',
    date: '2026-01-24',
    desc:
      'The jet stream plays a major role in shaping winter weather patterns.',
  },
  {
    id: 4,
    img: newImg4,
    title: 'Understanding the Polar Vortex',
    date: '2026-01-24',
    desc:
      'The polar vortex strongly influences winter cold spells and snow events.',
  },
  {
    id: 5,
    img: newImg5,
    title: 'Climate Change and Wine Regions',
    date: '2026-01-24',
    desc:
      'Climate change is shifting wine-growing regions across the globe.',
  },
  {
    id: 6,
    img: newImg6,
    title: 'La Niña Returns',
    date: '2026-01-24',
    desc:
      'La Niña conditions are developing again this winter.',
  },
  {
    id: 7,
    img: newImg7,
    title: 'Weather Satellites and Extreme Events',
    date: '2026-01-24',
    desc:
      'Satellites help track hurricanes, floods, and wildfires in real time.',
  },
  {
    id: 8,
    img: newImg8,
    title: 'Europe’s Extreme Summer',
    date: '2026-01-24',
    desc:
      'Record heat and storms defined Europe’s summer season.',
  },
  {
    id: 9,
    img: newImg9,
    title: 'World Ocean Day',
    date: '2026-01-24',
    desc:
      'Celebrating oceans and calling for their protection.',
  },
]
</script>

<template>
  <transition-group
    tag="div"
    enter-active-class="transition-all duration-700"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
  >
    <section
      v-if="show"
      v-for="news in newsList"
      :key="news.id"
      class="flex items-center justify-center py-4"
    >
      <div
        class="max-w-7xl w-full bg-black
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex">
          <!-- Image -->
          <div class="w-[450px] flex items-center justify-center">
            <router-link :to="`/news/${news.id}`">
              <img
                :src="news.img"
                class="h-full object-contain cursor-pointer
                       transition-transform duration-300
                       hover:scale-105"
                alt="news image"
              />
            </router-link>
          </div>



          <!-- Content -->
          <div class="pl-5 pr-5 w-full">
            <h2
              class="text-[25px] font-extrabold text-white pl-4 pt-4 pb-3
                     transition-colors duration-300
                     hover:text-blue-400 hover:underline cursor-pointer"
            >
              {{ news.title }}
            </h2>

            <p class="pl-5 text-white text-[17px] font-bold">
              Posted on {{ news.date }} by meteoblue
            </p>

            <p class="pl-5 text-[15px] pr-20 text-gray-300">
              {{ news.desc }}
            </p>
          </div>
        </div>

        <hr class="border-t border-gray-600 mt-4" />
      </div>
    </section>
  </transition-group>
</template>
