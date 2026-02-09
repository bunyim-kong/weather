<template>
  <div class="min-h-screen bg-[#0B121E] bg-[radial-gradient(circle_at_top_right,_#162135_0%,_#0B121E_100%)]">
    
    <nav class="max-w-4xl mx-auto pt-8 px-6">
      <router-link
        to="/forecast"
        class="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#33BECC] transition-colors group"
      >
        <i class="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
        <span class="text-sm font-medium uppercase tracking-widest">Back to News</span>
      </router-link>
    </nav>

    <Transition name="fade-slide">
      <article v-if="show" class="max-w-4xl mx-auto px-6 pt-10 pb-20">
        
        <header class="mb-12">
          <h1 class="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            The Role of High-Pressure Blocking in Prolonged Winter Weather
          </h1>
          
          <div class="flex flex-wrap items-center gap-6 py-4 border-y border-white/5">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-[#33BECC] flex items-center justify-center text-[#0B121E] font-bold">O</div>
              <span class="text-[#94A3B8] text-sm">By <span class="text-white">Oleksandra</span></span>
            </div>
            <div class="h-1 w-1 rounded-full bg-white/20"></div>
            <span class="text-[#94A3B8] text-sm italic">24 January 2026</span>
            <div class="h-1 w-1 rounded-full bg-white/20"></div>
            <span class="text-[#33BECC] text-sm font-bold uppercase tracking-tighter">Meteorology Insight</span>
          </div>
        </header>

        <p class="text-xl text-gray-300 leading-relaxed font-light mb-10">
          Winter weather in the mid-latitudes is usually dynamic. Low-pressure systems move from west to east, bringing alternating periods of mild, wet weather and colder conditions.
        </p>

        <div class="relative group mb-12">
          <div class="absolute inset-0 bg-[#33BECC]/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          <img
            :src="newImg2"
            class="relative w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            alt="Atmospheric Pressure Map"
          />
          
        </div>

        <div class="space-y-8 text-gray-300 text-lg leading-relaxed">
          <p>
            The <router-link class="text-[#33BECC] hover:underline decoration-[#33BECC]/50 underline-offset-4" to="/forecast">AMS Annual Meeting</router-link> 
            highlights how high-pressure blocking can disrupt the normal flow, allowing cold conditions to persist for weeks.
          </p>

          <h2 class="text-2xl font-bold text-white pt-6 border-l-4 border-[#33BECC] pl-6">
            A long-standing tradition of exchange
          </h2>

          <p>
            Blocking highs influence the direction of air flow. On their eastern flank, they often draw cold air southwards from polar or Arctic regions.
          </p>

          <img
            :src="imgDetailNews3"
            class="w-full rounded-2xl border border-white/5 shadow-xl py-4"
            alt="Wind power forecasting"
          />

          <h2 class="text-2xl font-bold text-white pt-6 border-l-4 border-[#33BECC] pl-6">
            Scientific contribution: Wind power forecasting
          </h2>

          <p>
            In many cases, cold air becomes trapped near the surface. This leads to persistent low cloud, fog, and often deteriorates air quality in urban areas.
          </p>

          <div class="bg-[#162135]/50 border border-[#33BECC]/20 p-8 rounded-2xl my-10 italic text-white/90">
            "High-pressure blocking acts as the atmosphere’s pause button, delaying the return of milder air and allowing winter impacts to build over time."
          </div>

          <img
            :src="imgDetailNews4"
            class="w-full rounded-2xl border border-white/5 shadow-xl"
            alt="Weather patterns"
          />
        </div>

        <footer class="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
          <div class="flex gap-4">
            <button class="text-[#94A3B8] hover:text-[#33BECC] transition-colors"><i class="fa-brands fa-twitter"></i></button>
            <button class="text-[#94A3B8] hover:text-[#33BECC] transition-colors"><i class="fa-brands fa-facebook"></i></button>
            <button class="text-[#94A3B8] hover:text-[#33BECC] transition-colors"><i class="fa-solid fa-link"></i></button>
          </div>
          <span class="text-xs text-[#94A3B8] uppercase tracking-widest">Reference ID: WB-2026-01</span>
        </footer>

      </article>
    </Transition>
  </div>
</template>