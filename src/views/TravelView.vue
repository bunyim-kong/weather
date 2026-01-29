<script setup>
const destinations = [
  { 
    city: 'Zurich', 
    country: 'Switzerland', 
    temp: 8, 
    status: 'Ideal', 
    statusColor: 'text-emerald-400',
    tag: 'Mountain Escape',
    img: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=500' 
  },
  { 
    city: 'Bali', 
    country: 'Indonesia', 
    temp: 31, 
    status: 'Risky', 
    statusColor: 'text-orange-400',
    tag: 'Tropical Monsoon',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=500' 
  },
  { 
    city: 'Tokyo', 
    country: 'Japan', 
    temp: 16, 
    status: 'Fair', 
    statusColor: 'text-blue-400',
    tag: 'City Sightseeing',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=500' 
  },
//   { 
//     city: 'Rome', 
//     country: 'Italy', 
//     temp: 22, 
//     status: 'Ideal', 
//     statusColor: 'text-emerald-400',
//     tag: 'Historical Walk',
//     img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=500' 
//   }
]
</script>

<template>
  <section class="w-full flex justify-center items-start bg-[#0B121E]">
    <main class="w-full max-w-[1280px] min-h-screen text-white py-12 px-6">
      
      <!-- <header class="mb-10">
        <h2 class="text-[#33BECC] font-bold tracking-widest uppercase text-sm mb-2">Explore Destinations</h2>
        <h1 class="text-4xl font-bold">Where is it <span class="text-white/50">good to go?</span></h1>
      </header> -->
<!-- 
      <div class="flex gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
        <button v-for="cat in ['All', 'Beach', 'Winter', 'Adventure', 'Relax']" :key="cat"
          class="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:border-[#33BECC] hover:text-[#33BECC] transition-all whitespace-nowrap">
          {{ cat }}
        </button>
      </div> -->

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-600 m-auto">
        <div v-for="place in destinations" :key="place.city" 
          class="group cursor-pointer relative bg-[#162135] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#33BECC]/50 transition-all duration-500">
          
          <div class="relative h-72 overflow-hidden">
            <img :src="place.img" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <div class="absolute top-4 left-4 backdrop-blur-md bg-black/30 border border-white/10 px-3 py-1 rounded-full">
              <span class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tight">
                <span :class="['w-2 h-2 rounded-full animate-pulse', place.status === 'Ideal' ? 'bg-emerald-400' : place.status === 'Risky' ? 'bg-orange-400' : 'bg-blue-400']"></span>
                {{ place.status }}
              </span>
            </div>

            <div class="absolute bottom-4 right-4 bg-[#33BECC] text-[#0B121E] font-black px-3 py-1 rounded-xl shadow-lg">
              {{ place.temp }}°
            </div>
          </div>

          <div class="p-6">
            <p class="text-[10px] text-[#33BECC] font-bold uppercase tracking-widest mb-1">{{ place.tag }}</p>
            <h3 class="text-xl font-bold mb-1">{{ place.city }}</h3>
            <p class="text-[#94A3B8] text-sm mb-4">{{ place.country }}</p>

            <button class="w-full py-3 bg-white/5 rounded-xl text-sm font-semibold group-hover:bg-[#33BECC] group-hover:text-[#0B121E] transition-all">
              Check Suitability
            </button>
          </div>
        </div>
      </div>

      <!-- <div class="mt-12 p-6 bg-gradient-to-r from-[#162135] to-transparent border-l-4 border-[#33BECC] rounded-r-2xl">
        <p class="text-sm text-[#94A3B8]">
          <strong class="text-white">Pro Tip:</strong> Currently, Northern Europe is experiencing high winds. We recommend sticking to Central or Southern regions for outdoor activities today.
        </p>
      </div> -->
    </main>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

</style>






