<template>
  <div class="flex flex-col gap-4 mb-8">
  <h2 class="text-2xl font-bold tracking-tight">Browse by Atmosphere</h2>
  <div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
    <button v-for="cat in ['All', 'Coastal', 'Alpine', 'Metropolis', 'Sanctuary']" 
            class="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#33BECC] hover:text-[#0B121E] transition-all whitespace-nowrap text-sm font-medium">
      {{ cat }}
    </button>
  </div>
</div>

<section class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 py-12 border-y border-white/5">
  <div class="text-center">
    <div class="text-[#33BECC] text-4xl font-black mb-2">150+</div>
    <p class="text-slate-400 text-sm uppercase tracking-widest font-bold">Destinations</p>
  </div>
  <div class="text-center border-x border-white/5">
    <div class="text-[#33BECC] text-4xl font-black mb-2">24/7</div>
    <p class="text-slate-400 text-sm uppercase tracking-widest font-bold">Climate Updates</p>
  </div>
  <div class="text-center">
    <div class="text-[#33BECC] text-4xl font-black mb-2">98%</div>
    <p class="text-slate-400 text-sm uppercase tracking-widest font-bold">Accuracy Rate</p>
  </div>
</section>
</template>