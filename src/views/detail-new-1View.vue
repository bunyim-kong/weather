<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Images
import newImg2 from '@/assets/image/img-new2.jpg'
import imgDetailNews3 from '@/assets/image/img-detailnews-3.jpg'
import imgDetailNews4 from '@/assets/image/img-detailnews-4.jpg'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

const router = useRouter()

// Control transition animation
const show = ref(false)

onMounted(() => {
  show.value = true
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <!-- Back button -->
  <div class="p-1 pl-6">
    <router-link
      to="/forecast"
      class="inline-flex items-center gap-2
             bg-[#162135] border border-white/10
             text-[#33BECC] px-4 py-2 rounded-xl
             hover:bg-[#33BECC] hover:text-[#0B121E]
             transition-all duration-300 shadow-lg"
    >
      <i class="fa-solid fa-arrow-left"></i>
      <span>Back to News</span>
    </router-link>
  </div>

  <!-- Animated content -->
  <Transition name="fade-slide">
    <div
      v-if="show"
      class="bg-black w-full px-6 md:px-20 pb-10"
    >
      <h2 class="text-[25px] font-extrabold text-white pt-4 pb-3 hover:underline cursor-pointer">
        The Role of High-Pressure Blocking in Prolonged Winter Weather
      </h2>

      <p class="text-white text-[15px] opacity-80">
        Posted on 24/01/2026 by Oleksandra (meteoblue) (Comments: 1)
      </p>

      <p class="text-white text-[17px] pt-4 leading-relaxed">
        Winter weather in the mid-latitudes is usually dynamic. Low-pressure systems move
        from west to east, bringing alternating periods of mild, wet weather and colder,
        clearer conditions. This constant progression is driven by the jet stream, which
        acts as a fast-moving conveyor belt for weather systems.
      </p>

      <img
        :src="newImg2"
        class="w-full max-w-[500px] pt-6 transition-transform duration-300 hover:scale-105"
        alt="news image"
      />

      <p class="text-white text-[17px] pt-6 leading-relaxed">
        The
        <router-link class="text-blue-400 underline" to="/forecast">
          AMS Annual Meeting
        </router-link>
        highlights how high-pressure blocking can disrupt the normal west-to-east flow,
        allowing cold conditions to persist for weeks.
      </p>

      <h2 class="text-[25px] font-extrabold text-white pt-10 pb-3 hover:underline cursor-pointer">
        A long-standing tradition of exchange
      </h2>

      <p class="text-white text-[17px] leading-relaxed">
        Blocking highs influence the direction of air flow. On their eastern flank,
        they often draw cold air southwards from polar or Arctic regions, resulting in
        prolonged cold outbreaks.
      </p>

      <h2 class="text-[25px] font-extrabold text-white pt-10 pb-3 hover:underline cursor-pointer">
        Scientific contribution: Wind power forecasting
      </h2>

      <p class="text-white text-[17px] leading-relaxed">
        In many cases, cold air becomes trapped near the surface beneath the high-pressure
        system. This leads to persistent low cloud, fog, or freezing fog and often
        deteriorates air quality.
      </p>

      <img
        :src="imgDetailNews3"
        class="w-full max-w-[900px] pt-6 transition-transform duration-300 hover:scale-105"
        alt="detail image"
      />

      <p class="text-white text-[17px] pt-6 leading-relaxed">
        High-pressure blocking can persist for weeks. Certain configurations such as
        Omega blocks are especially resistant to change, locking in winter conditions.
      </p>

      <img
        :src="imgDetailNews4"
        class="w-full max-w-[900px] pt-8 transition-transform duration-300 hover:scale-105"
        alt="detail image"
      />

      <p class="text-white text-[17px] pt-10 leading-relaxed">
        High-pressure blocking acts as the atmosphere’s pause button, delaying the return
        of milder air and allowing winter impacts to build over time.
      </p>
    </div>
  </Transition>
</template>

<style>
.fade-slide-enter-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>