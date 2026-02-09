<script setup>
// Combined Data
const destinations = [
  { 
    city: 'Zurich', country: 'Switzerland', temp: 8, status: 'Ideal', 
    tag: 'Mountain Escape', img: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=500' 
  },
  { 
    city: 'Bali', country: 'Indonesia', temp: 31, status: 'Risky', 
    tag: 'Tropical Monsoon', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=500' 
  },
  { 
    city: 'Tokyo', country: 'Japan', temp: 16, status: 'Fair', 
    tag: 'City Sightseeing', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=500' 
  }
]

const countries = [
  {
    name: 'Iceland',
    region: 'Nordic Highlands',
    description: 'Land of fire and ice, featuring dramatic volcanic landscapes and glacial lagoons.',
    image: 'https://i.pinimg.com/736x/3f/91/ca/3f91ca5bb89f9980f7840350224bb393.jpg',
    accent: 'border-[#33BECC]'
  },
  {
    name: 'Japan',
    region: 'Kyoto Prefecture',
    description: 'A harmonious blend of ancient traditions and ultra-modern neon cityscapes.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1500',
    accent: 'border-red-500'
  }
]



const featured = {
  name: 'Japan',
  region: 'Nordic Highlands',
  description: 'Experience the raw power of nature in the land of fire and ice, featuring dramatic volcanic landscapes, cascading waterfalls, and glacial lagoons.',
  image: 'https://i.pinimg.com/1200x/f0/f9/cf/f0f9cf89f8b2199167ead6dd31f594fe.jpg',
  accent: 'border-[#33BECC]'
}
</script>

<template>
  <section class="w-full flex justify-center items-start bg-[#0B121E]">
    <main class="w-full max-w-[1280px] min-h-screen text-white py-12 px-6 flex flex-col gap-16">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="place in destinations" :key="place.city" 
          class="group cursor-pointer relative bg-[#162135] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#33BECC]/50 transition-all duration-500">
          
          <div class="relative h-72 overflow-hidden">
            <img :src="place.img" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 left-4 backdrop-blur-md bg-black/30 border border-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight">
              <span class="flex items-center gap-1.5">
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
            <h3 class="text-xl font-bold ">{{ place.city }}</h3>
            <p class="text-[#94A3B8] text-sm mb-4">{{ place.country }}</p>
            <button class="w-full py-3 bg-white/5 rounded-xl text-sm font-semibold group-hover:bg-[#33BECC] group-hover:text-[#0B121E] transition-all">
              Check Suitability
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div v-for="place in destinations" :key="place.city" 
          class="group cursor-pointer relative bg-[#162135] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#33BECC]/50 transition-all duration-500">
          
          <div class="relative h-72 overflow-hidden">
            <img :src="place.img" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 left-4 backdrop-blur-md bg-black/30 border border-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight">
              <span class="flex items-center gap-1.5">
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
            <h3 class="text-xl font-bold ">{{ place.city }}</h3>
            <p class="text-[#94A3B8] text-sm mb-4">{{ place.country }}</p>
            <button class="w-full py-3 bg-white/5 rounded-xl text-sm font-semibold group-hover:bg-[#33BECC] group-hover:text-[#0B121E] transition-all">
              Check Suitability
            </button>
          </div>
        </div>
      </div>

      <section class="w-full flex justify-center items-start bg-[#0B121E]">
        <main class="w-full max-w-[1280px] flex flex-col items-center">

          <div class="relative w-full h-[500px] rounded-[3.5rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/10">
            
            <img :src="featured.image" 
                :alt="featured.name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            <div class="absolute bottom-0 left-0 p-16 w-full flex justify-between items-end">
              <div class="max-w-xl">
                <div :class="['inline-block border-l-4 pl-6 mb-6', featured.accent]">
                  <p class="text-xs font-black uppercase tracking-[0.5em] text-[#33BECC] mb-2">Featured Destination</p>
                  <h2 class="text-6xl font-bold text-white tracking-tight">{{ featured.name }}</h2>
                </div>
                
                <p class="text-slate-300 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  {{ featured.description }}
                </p>
              </div>

              <button class="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-[#33BECC] hover:text-white transition-all shadow-2xl">
                Book Discovery
              </button>
            </div>
            
            <div class="absolute top-10 left-10">
              <span class="bg-black/40 backdrop-blur-xl text-white text-xs font-black px-6 py-2.5 rounded-full uppercase tracking-widest border border-white/10">
                {{ featured.region }}
              </span>
            </div>
          </div>

        </main>
      </section>


       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div v-for="place in destinations" :key="place.city" 
          class="group cursor-pointer relative bg-[#162135] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#33BECC]/50 transition-all duration-500">
          
          <div class="relative h-72 overflow-hidden">
            <img :src="place.img" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 left-4 backdrop-blur-md bg-black/30 border border-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight">
              <span class="flex items-center gap-1.5">
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
            <h3 class="text-xl font-bold ">{{ place.city }}</h3>
            <p class="text-[#94A3B8] text-sm mb-4">{{ place.country }}</p>
            <button class="w-full py-3 bg-white/5 rounded-xl text-sm font-semibold group-hover:bg-[#33BECC] group-hover:text-[#0B121E] transition-all">
              Check Suitability
            </button>
          </div>
        </div>
      </div>

      

    </main>
  </section>
</template>