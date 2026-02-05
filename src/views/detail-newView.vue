<script setup>
import { useRouter } from 'vue-router';
import newImg1 from '@/assets/image/img-new1.jpg'
import imgDetailNews1 from '@/assets/image/img-detailnews-1.jpg'
import imgDetailNews2 from '@/assets/image/img-detailnews-1-1.jpg'
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


    <div class="pl-5 pr-5 bg-black w-full pl-15 ">
          <h2 class="text-[25px] font-extrabold text-white pl-4 pt-4 pb-3 hover:underline cursor-pointer">
            The Role of High-Pressure Blocking in Prolonged Winter Weather
          </h2>
          <p class="pl-5 text-white text-[15px]">
            Posted on 24/01/2026 by Oleksandra (meteoblue) (Comments: 1).
          </p>
          <p class="pl-5 pt-2 text-white text-[17px] font-google-sans">
            The meteoblue team will participate in the American Meteorological Society (AMS) Annual Meeting 2026,
            taking place <br> from 25 to 29 January in Houston, Texas.
          </p>

          <img :src="newImg1" class="w-[500px] pt-2 pl-5" alt="news image" />


          <p class="pl-5 text-white text-[17px] pt-4 pb-4 pr-20">
            The <RouterLink class="text-blue-400 underline"
            to="/forecast" >AMS Annual Meeting</RouterLink> is a cornerstone event for the global meteorological community. It serves as a premier forum for sharing the latest scientific advancements in atmospheric science, hydrology, and oceanography. By bringing together researchers, technology providers, and policy makers, the conference fosters the collaboration necessary to address complex climate challenges.
          </p>


          <h2 class="text-[25px] font-extrabold text-white pl-4 pt-4 pb-3 hover:underline cursor-pointer">
            A long-standing tradition of exchange
          </h2>
          <p class="pl-5 text-white text-[17px] pr-20 pb-5">
            For meteoblue, attending the AMS Annual Meeting is a recurring highlight in our calendar. We have made it a priority to attend every year, as it allows us to stay at the forefront of meteorological research and maintain personal connections with the international scientific community. This consistent presence reflects our commitment to the North American market and our dedication to integrating the latest global scientific standards into our services.
          </p>



          <h2 class="text-[25px] font-extrabold text-white pl-4 pt-4 pb-3 hover:underline cursor-pointer">
            Scientific contribution: Wind power forecasting
          </h2>
          <p class="pl-5 text-white text-[17px] pr-20">
           Scientific rigor is a foundational value at meteoblue. As part of the event’s program, our meteorological expert and the Technical Lead of the Weather Services department, Nicola Pierotti, will present a poster detailing our recent work in the energy sector.
          </p>
         
          <img :src="imgDetailNews1" class="w-[900px] pt-2 pl-5" alt="news image" />

          <p class="pl-5 text-white text-[17px] pr-20 pt-4">
            Blocking highs also influence the direction of air flow. On their eastern flank, they often draw cold air southwards from polar or Arctic regions. In Europe, this can mean bitter easterly or northeasterly winds, transporting very cold continental air from Russia or Scandinavia towards western and central parts of the continent. Similar processes affect North America, where blocking patterns can allow Arctic air to plunge deep into the United States. These cold air outbreaks are rarely brief when a blocking high is present, as the atmospheric circulation that would normally replace the cold air is effectively shut down.
          </p>
          <p class="pl-5 text-white text-[17px] pr-20 pt-4 pb-5">
            Not all winter blocking brings clear skies. In many cases, especially across central and eastern Europe, cold air becomes trapped near the surface beneath the high-pressure system. This can lead to persistent low cloud, fog or freezing fog, sometimes lasting for days. These so-called temperature inversions prevent daytime warming and can keep temperatures well below seasonal averages even during daylight hours. Such conditions are also associated with poor air quality, as pollutants accumulate near the surface in the absence of wind and vertical mixing.
          </p>
          
          
          <img :src="imgDetailNews2" class="w-[900px] pt-2 pl-5" alt="news image" />

          <p class="pl-5 text-white text-[17px] pr-20 pt-4">
            High-pressure blocking can persist for remarkably long periods. While a typical weather system moves through in a few days, blocking patterns can remain in place for several weeks. Certain configurations, such as Omega blocks, where a high-pressure system is sandwiched between two low-pressure systems, are particularly resistant to change. In winter, these patterns can lock in cold conditions and delay the arrival of milder maritime air. Historic European winters, such as 1962–63 or 2009–10, were strongly influenced by prolonged blocking, leading to widespread disruption, heavy snowfall in some regions, and sustained sub-zero temperatures.
          </p>
          <p class="pl-5 text-white text-[17px] pr-20 pt-4 pb-5">
            Although the weather beneath a blocking high is often dry, heavy snowfall can still occur at its margins. Storm systems diverted around the block may repeatedly affect the same regions, leading to prolonged periods of snow or freezing rain. This is one reason why blocking patterns are often associated with high-impact winter weather, not just cold but also significant snow accumulation and transport disruption.
          </p>
          <p class="pl-5 text-white text-[17px] pr-20 pt-4 pb-5">
            In essence, high-pressure blocking acts as the atmosphere's pause button in winter. By disrupting the usual west-to-east flow, it allows cold air to settle in, temperatures to drop well below normal, and winter impacts to build over time rather than pass quickly. For those following how the atmosphere "locks in" these conditions, meteoblue Sea Level Pressure and upper-air maps offer direct insight into the large-scale dynamics behind prolonged winter weather across Europe and beyond.
          </p>
        </div>
        
</template>


