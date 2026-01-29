<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const savedLocations = [
  { city: 'New York', country: 'USA', temp: 28, condition: 'Mostly Cloudy', time: '10:24 AM', trend: 'up' },
  { city: 'London', country: 'UK', temp: 14, condition: 'Rainy', time: '3:24 PM', trend: 'down' },
  { city: 'Tokyo', country: 'Japan', temp: 21, condition: 'Clear', time: '12:24 AM', trend: 'up' },
  { city: 'Paris', country: 'France', temp: 18, condition: 'Windy', time: '4:24 PM', trend: 'stable' }
]
</script>

<template>
  <section class="w-full flex justify-center items-start bg-[#0B121E]">
    <main class="w-full max-w-[1280px] min-h-screen text-white py-8 px-4 md:px-0">
      <div class="space-y-8">
        
        <header class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 class="text-3xl font-bold tracking-tight">Manage Locations</h1>
            <p class="text-[#94A3B8]">Check the weather across your favorite cities</p>
          </div>
        
        </header>

        <section class="grid grid-cols-1 gap-4">
          <div v-for="loc in savedLocations" :key="loc.city" 
            class="group relative overflow-hidden bg-[#162135]/40 border border-white/5 p-6 rounded-[2rem] flex items-center justify-between hover:bg-[#162135] transition-all cursor-pointer">
            
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-[#33BECC]/5 blur-3xl group-hover:bg-[#33BECC]/10 transition-all"></div>

            <div class="flex items-center gap-6">
              <div class="hidden md:block">
                 <div class="w-16 h-16 rounded-2xl bg-[#0B121E] flex items-center justify-center border border-white/5">
                    <span class="text-2xl">{{ loc.temp > 20 ? '☀️' : '☁️' }}</span>
                 </div>
              </div>
              
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-bold">{{ loc.city }}</h3>
                  <span class="text-xs text-[#94A3B8] uppercase tracking-widest">{{ loc.country }}</span>
                </div>
                <p class="text-[#94A3B8] text-sm">{{ loc.time }} • {{ loc.condition }}</p>
              </div>
            </div>

            <div class="flex items-center gap-8">
              <div class="text-right">
                <p class="text-4xl font-bold">{{ loc.temp }}<span class="text-[#33BECC]">°</span></p>
                <span :class="[
                  'text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border',
                  loc.trend === 'up' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10' : 'text-rose-400 border-rose-400/20 bg-rose-400/10'
                ]">
                  {{ loc.trend === 'up' ? 'Rising' : 'Falling' }}
                </span>
              </div>
              
              <button class="text-[#94A3B8] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section class="mt-12">
          <h3 class="text-xl font-bold mb-6">Popular Nearby</h3>
          <div class="flex flex-wrap gap-3">
            <button v-for="city in ['Los Angeles', 'Miami', 'Chicago', 'Toronto']" :key="city"
              class="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-[#33BECC]/40 hover:text-[#33BECC] transition-all text-sm font-medium">
              + {{ city }}
            </button>
          </div>
        </section>

      </div>
    </main>
  </section>
</template>