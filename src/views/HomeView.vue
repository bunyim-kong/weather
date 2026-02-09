<script setup>

const forecast = [
  { name: 'Mon', temp: 24, desc: 'Sunny', type: 'sun', color: 'text-yellow-400' },
  { name: 'Tue', temp: 22, desc: 'Partly', type: 'cloud-sun', color: 'text-[#33BECC]' },
  { name: 'Wed', temp: 19, desc: 'Rainy', type: 'rain', color: 'text-blue-400' },
  { name: 'Thu', temp: 25, desc: 'Storm', type: 'storm', color: 'text-purple-400' },
  { name: 'Fri', temp: 21, desc: 'Cloudy', type: 'cloud', color: 'text-slate-400' }
]
</script>

<template>
  <section class="w-full flex justify-center items-start bg-[#0B121E]">
    <main class="w-full max-w-[1280px] min-h-screen text-white py-8">
      <div class="space-y-8">

        <!-- current weather -->
        <section class="relative overflow-hidden bg-gradient-to-br from-[#162135] to-[#0B121E] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-[#33BECC]/10 blur-[100px] rounded-full"></div>
          
          <div class="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div class="text-center md:text-left">
              <h2 class="text-[#94A3B8] text-lg font-medium mb-2">Current Weather</h2>

              <h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                28<span class="text-[#33BECC]">°</span>
              </h1>

              <div class="info-cols flex items-center justify-center md:justify-start gap-4">
                <span class="text-2xl font-semibold">New York, USA</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-sm text-[#33BECC] border border-[#33BECC]/20">Mostly Cloudy</span>
              </div>
            </div>

            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-32 h-32 text-[#33BECC] drop-shadow-[0_0_15px_rgba(51,190,204,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
                <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
              </svg>
              
              <div class="info-cols flex gap-8 text-[#94A3B8]">
                <div class="text-center">
                  <p class="text-xs uppercase tracking-widest mb-1 font-bold">Humidity</p>
                  <p class="text-white font-semibold">42%</p>
                </div>
                <div class="text-center">
                  <p class="text-xs uppercase tracking-widest mb-1 font-bold">Wind</p>
                  <p class="text-white font-semibold">12 km/h</p>
                </div>
                <div class="text-center">
                  <p class="text-xs uppercase tracking-widest mb-1 font-bold">Visibility</p>
                  <p class="text-white font-semibold">10 km</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="forcast">
          <div class="flex justify-between items-end mb-6">
            <h3 class="text-2xl font-bold">5-Day Forecast</h3>
            <button class="bg-[#162135] border border-white/10 text-[#33BECC] px-4 py-2 rounded-xl hover:bg-[#33BECC] hover:text-[#0B121E] transition-all duration-300 shadow-lg">View details</button>
          </div>

          <div class="info-cols grid grid-cols-2 md:grid-cols-5 gap-4">
            <div v-for="(day, index) in forecast" :key="index" 
              class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center hover:bg-[#162135] transition-all group">
              
              <p class="text-[#94A3B8] text-sm font-medium mb-4">{{ day.name }}</p>

              <div class="info-cols" :class="['w-12 h-12 mb-4 transition-transform group-hover:scale-110', day.color]">
                <svg v-if="day.type === 'sun'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
                <svg v-if="day.type === 'cloud-sun'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
                </svg>
                <svg v-if="day.type === 'rain'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6M8 14v6M12 16v6"/>
                </svg>
                <svg v-if="day.type === 'storm'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="m13 18-3 3h3l-3 3"/>
                </svg>
                <svg v-if="day.type === 'cloud'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              </div>

              <p class="info-cols text-xl font-bold">{{ day.temp }}°</p>
              <p class="text-xs text-[#94A3B8] mt-1">{{ day.desc }}</p>
            </div>
          </div>
        </section>

        <section class="feature grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-r from-[#33BECC]/20 to-transparent border border-[#33BECC]/10 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <h4 class="font-bold text-lg text-white">Perfect Travel Weather</h4>
              <p class="text-sm text-[#94A3B8]">Based on your interests in hiking.</p>
            </div>
            <button class="bg-[#33BECC] text-[#0B121E] font-bold px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform">Explore</button>
          </div>
          
          <div class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <h4 class="font-bold text-lg text-white">Air Quality: Good</h4>
              <p class="text-sm text-[#94A3B8]">AQI Index is 12. Great for outdoor runs.</p>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#33BECC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
        </section>

        <!-- Hourly Precipitation -->
        <section class="feature bg-[#162135]/50 border border-white/5 p-8 rounded-[2rem]">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-xl font-bold text-white">Precipitation Probability</h3>
            <div class="flex gap-2">
              <span class="flex items-center gap-2 text-xs text-[#94A3B8]">
                <span class="w-3 h-3 bg-[#33BECC] rounded-full"></span> Rain
              </span>
            </div>
          </div>
          
          <div class="flex items-end justify-between h-32 gap-2">
            <div v-for="h in [10, 20, 45, 80, 50, 30, 10]" :key="h" 
                class="flex-1 bg-white/5 rounded-t-lg relative group transition-all hover:bg-[#33BECC]/20">
              <div :style="{ height: h + '%' }" 
                  class="absolute bottom-0 w-full bg-[#33BECC]/40 rounded-t-lg group-hover:bg-[#33BECC] transition-all">
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4 text-[#94A3B8] text-xs font-medium px-1">
            <span>12 PM</span><span>2 PM</span><span>4 PM</span><span>6 PM</span><span>8 PM</span><span>10 PM</span><span>12 AM</span>
          </div>
        </section>

        <section class="feature grid md:grid-cols-3 gap-6">
          <div class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl md:col-span-2">
            <h4 class="text-[#94A3B8] text-sm font-medium mb-4">Daylight Overview</h4>
            <div class="flex justify-between items-center">
              <div class="space-y-1">
                <p class="text-xs text-[#94A3B8] uppercase">Sunrise</p>
                <p class="text-xl font-bold">06:42 AM</p>
              </div>
              <div class="relative w-32 h-16 border-b border-white/20 overflow-hidden">
                <div class="absolute inset-0 border-[3px] border-dashed border-[#33BECC]/30 rounded-full"></div>
                <div class="absolute left-1/4 top-1/4 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]"></div>
              </div>
              <div class="space-y-1 text-right">
                <p class="text-xs text-[#94A3B8] uppercase">Sunset</p>
                <p class="text-xl font-bold">05:18 PM</p>
              </div>
            </div>
          </div>

          <div class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <h4 class="text-[#94A3B8] text-sm font-medium">UV Index</h4>
            <div>
              <p class="text-3xl font-bold">4 <span class="text-sm font-normal text-yellow-400 ml-1">Moderate</span></p>
              <div class="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-gradient-to-r from-green-400 to-yellow-400 h-full" style="width: 40%"></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  </section>
</template>

<style scoped>
/* You can add extra animations here if needed */
</style>