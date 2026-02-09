<script setup>
import { useRouter } from 'vue-router';
import newImg1 from '@/assets/image/img-new2.jpg'
import imgDetailNews1 from '@/assets/image/img-detailnews-3.jpg'
import imgDetailNews2 from '@/assets/image/img-detailnews-4.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'

const router = useRouter();

const goBack = () => {
  router.back(); // Or router.go(-1)
};
</script>
<template>
  <div class="p-1 pl-29">
    <router-link
      to="/forecast"
      class="inline-flex items-center gap-2
             bg-[#162135] border border-white/10
             text-[#33BECC] px-4 py-2 rounded-xl
             hover:bg-[#33BECC] hover:text-[#0B121E]
             transition-all duration-300 shadow-lg"
    >
      <i class="fa-solid fa-arrow-left"></i>
      <span>Back to New</span>
    </router-link>
  </div>



<!-- Animated content -->
  <Transition name="fade-slide">
    <div
      v-if="show"
      class="pl-26 pr-25 bg-black w-full"
    >
      <h2 class="text-[25px] font-extrabold text-white pl-2 pt-4 pb-3 hover:underline cursor-pointer">
        The Role of High-Pressure Blocking in Prolonged Winter Weather
      </h2>

      <p class="pl-5 text-white text-[15px]">
        Posted on 24/01/2026 by Oleksandra (meteoblue) (Comments: 1).
      </p>

      <p class="pl-5 pt-2 text-white text-[17px] font-google-sans">
        Winter weather in the mid-latitudes is usually dynamic. Low-pressure systems move from west to east, bringing alternating periods of mild, wet weather and colder, clearer conditions. This constant progression is driven by the jet stream, which acts as a fast-moving conveyor belt for weather systems. However, some winters depart sharply from this familiar pattern. Instead of frequent changes, cold, dry or snowy conditions can persist for weeks. One of the key drivers behind such prolonged winter spells is high-pressure blocking.
      </p>

      <img
        :src="newImg2"
        class="w-[500px] pt-4 pl-5 transition-transform duration-300 hover:scale-105"
        alt="news image"
      />

      <p class="pl-5 text-white text-[17px] pt-4 pb-4 pr-20">
        The
        <RouterLink class="text-blue-400 underline" to="/forecast">
          AMS Annual Meeting
        </RouterLink>
        Winter weather in the mid-latitudes is usually dynamic. Low-pressure systems move from west to east, bringing alternating periods of mild, wet weather and colder, clearer conditions. This constant progression is driven by the jet stream, which acts as a fast-moving conveyor belt for weather systems. However, some winters depart sharply from this familiar pattern. Instead of frequent changes, cold, dry or snowy conditions can persist for weeks. One of the key drivers behind such prolonged winter spells is high-pressure blocking.


      </p>

      <h2 class="text-[25px] font-extrabold text-white pl-4 pt-4 pb-3 hover:underline cursor-pointer">
        A long-standing tradition of exchange
      </h2>

      <p class="pl-5 text-white text-[17px] pr-20 pb-5">
        Blocking highs also influence the direction of air flow. On their eastern flank, they often draw cold air southwards from polar or Arctic regions. In Europe, this can mean bitter easterly or northeasterly winds, transporting very cold continental air from Russia or Scandinavia towards western and central parts of the continent. Similar processes affect North America, where blocking patterns can allow Arctic air to plunge deep into the United States. These cold air outbreaks are rarely brief when a blocking high is present, as the atmospheric circulation that would normally replace the cold air is effectively shut down.
      </p>

      <h2 class="text-[25px] font-extrabold text-white pl-4 pt-4 pb-3 hover:underline cursor-pointer">
        Scientific contribution: Wind power forecasting
      </h2>

      <p class="pl-5 text-white text-[17px] pr-20">
        Not all winter blocking brings clear skies. In many cases, especially across central and eastern Europe, cold air becomes trapped near the surface beneath the high-pressure system. This can lead to persistent low cloud, fog or freezing fog, sometimes lasting for days. These so-called temperature inversions prevent daytime warming and can keep temperatures well below seasonal averages even during daylight hours. Such conditions are also associated with poor air quality, as pollutants accumulate near the surface in the absence of wind and vertical mixing.
      </p>

      <img
        :src="imgDetailNews3"
        class="w-[900px] pt-4 pl-5 transition-transform duration-300 hover:scale-105"
        alt="detail image"
      />

      <p class="pl-5 text-white text-[17px] pr-20 pt-4">
        Blocking highs influence air flow, drawing cold Arctic air into Europe and North
        America, leading to prolonged cold outbreaks. High-pressure blocking can persist for remarkably long periods. While a typical weather system moves through in a few days, blocking patterns can remain in place for several weeks. Certain configurations, such as Omega blocks, where a high-pressure system is sandwiched between two low-pressure systems, are particularly resistant to change. In winter, these patterns can lock in cold conditions and delay the arrival of milder maritime air. Historic European winters, such as 1962–63 or 2009–10, were strongly influenced by prolonged blocking, leading to widespread disruption, heavy snowfall in some regions, and sustained sub-zero temperatures.
      </p>

      <img
        :src="imgDetailNews4"
        class="w-[900px] pt-6 pl-5 transition-transform duration-300 hover:scale-105"
        alt="detail image"
      />
        
      <p class="pl-5 text-white text-[17px] pr-20 pt-20 pb-6">
        High-pressure blocking acts as the atmosphere’s pause button, locking winter
        conditions in place for weeks. In essence, high-pressure blocking acts as the atmosphere's pause button in winter. By disrupting the usual west-to-east flow, it allows cold air to settle in, temperatures to drop well below normal, and winter impacts to build over time rather than pass quickly. For those following how the atmosphere "locks in" these conditions, meteoblue Sea Level Pressure and upper-air maps offer direct insight into the large-scale dynamics behind prolonged winter weather across Europe and beyond.
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
