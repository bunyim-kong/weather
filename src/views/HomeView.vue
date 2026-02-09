<script setup>
import { ref, onMounted, watch } from 'vue'
import { weatherStore } from '../weatherStore' // Ensure this path matches your folder structure

const isLoading = ref(true)
const currentTemp = ref(0)
const weatherDesc = ref('Loading...')
const humidity = ref(0)
const windSpeed = ref(0)
const uvIndex = ref(0)
const sunrise = ref('--:--')
const sunset = ref('--:--')
const forecast = ref([])

// Helper to map Open-Meteo codes to your UI types
const getWeatherType = (code) => {
  if (code === 0) return { type: 'sun', desc: 'Sunny', color: 'text-yellow-400' }
  if (code <= 3) return { type: 'cloud-sun', desc: 'Partly', color: 'text-[#33BECC]' }
  if (code >= 51 && code <= 67) return { type: 'rain', desc: 'Rainy', color: 'text-blue-400' }
  if (code >= 95) return { type: 'storm', desc: 'Storm', color: 'text-purple-400' }
  return { type: 'cloud', desc: 'Cloudy', color: 'text-slate-400' }
}

const fetchWeather = async () => {
  isLoading.value = true
  try {
    // We now use weatherStore.lat and weatherStore.lon instead of hardcoded numbers
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${weatherStore.lat}&longitude=${weatherStore.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,uv_index_max,sunrise,sunset&timezone=auto`
    )
    const data = await response.json()

    // Set Current Weather
    currentTemp.value = Math.round(data.current.temperature_2m)
    humidity.value = data.current.relative_humidity_2m
    windSpeed.value = data.current.wind_speed_10m
    weatherDesc.value = getWeatherType(data.current.weather_code).desc
    
    // Set Daily Details
    uvIndex.value = data.daily.uv_index_max[0]
    sunrise.value = data.daily.sunrise[0].split('T')[1]
    sunset.value = data.daily.sunset[0].split('T')[1]

    // Set 5-Day Forecast
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    forecast.value = data.daily.time.slice(1, 6).map((dateStr, index) => {
      const date = new Date(dateStr)
      const weather = getWeatherType(data.daily.weather_code[index + 1])
      return {
        name: days[date.getDay()],
        temp: Math.round(data.daily.temperature_2m_max[index + 1]),
        ...weather
      }
    })

    isLoading.value = false
  } catch (error) {
    console.error("Error fetching weather:", error)
    isLoading.value = false
  }
}

// Watch for changes in the search store and re-fetch weather
watch(() => [weatherStore.lat, weatherStore.lon], () => {
  fetchWeather()
})

onMounted(() => {
  fetchWeather()
})
</script>

<template>
  <section class="w-full flex justify-center items-start bg-[#0B121E]">
    <main v-if="!isLoading" class="w-full max-w-[1280px] min-h-screen text-white py-8 px-4">
      <div class="space-y-8">

        <section class="relative overflow-hidden bg-gradient-to-br from-[#162135] to-[#0B121E] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-[#33BECC]/10 blur-[100px] rounded-full"></div>
          
          <div class="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div class="text-center md:text-left">
              <h2 class="text-[#94A3B8] text-lg font-medium mb-2">Current Weather</h2>

              <h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                {{ currentTemp }}<span class="text-[#33BECC]">°</span>
              </h1>

              <div class="info-cols flex items-center justify-center md:justify-start gap-4">
                <span class="text-2xl font-semibold">{{ weatherStore.locationName }}</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-sm text-[#33BECC] border border-[#33BECC]/20">{{ weatherDesc }}</span>
              </div>
            </div>

            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-32 h-32 text-[#33BECC] drop-shadow-[0_0_15px_rgba(51,190,204,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
                <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
              </svg>
              
              <div class="info-cols flex gap-8 text-[#94A3B8] mt-4">
                <div class="text-center">
                  <p class="text-xs uppercase tracking-widest mb-1 font-bold">Humidity</p>
                  <p class="text-white font-semibold">{{ humidity }}%</p>
                </div>
                <div class="text-center">
                  <p class="text-xs uppercase tracking-widest mb-1 font-bold">Wind</p>
                  <p class="text-white font-semibold">{{ windSpeed }} km/h</p>
                </div>
                <div class="text-center">
                  <p class="text-xs uppercase tracking-widest mb-1 font-bold">Visibility</p>
                  <p class="text-white font-semibold">10 km</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="feature flex justify-between items-end mb-6">
            <h3 class="text-2xl font-bold">5-Day Forecast</h3>
          </div>

          <div class="info-cols grid grid-cols-2 md:grid-cols-5 gap-4">
            <div v-for="(day, index) in forecast" :key="index" 
              class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center hover:bg-[#162135] transition-all group">
              
              <p class="text-[#94A3B8] text-sm font-medium mb-4">{{ day.name }}</p>

              <div :class="['w-12 h-12 mb-4 transition-transform group-hover:scale-110', day.color]">
                <svg v-if="day.type === 'sun'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
                <svg v-else-if="day.type === 'cloud-sun'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
                </svg>
                <svg v-else-if="day.type === 'rain'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6M8 14v6M12 16v6"/>
                </svg>
                <svg v-else-if="day.type === 'storm'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="m13 18-3 3h3l-3 3"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              </div>

              <p class="text-xl font-bold">{{ day.temp }}°</p>
              <p class="text-xs text-[#94A3B8] mt-1">{{ day.desc }}</p>
            </div>
          </div>
        </section>

        <section class="feature grid md:grid-cols-3 gap-6">
          <div class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl md:col-span-2">
            <h4 class="text-[#94A3B8] text-sm font-medium mb-4">Daylight Overview</h4>
            <div class="flex justify-between items-center">
              <div class="space-y-1">
                <p class="text-xs text-[#94A3B8] uppercase">Sunrise</p>
                <p class="text-xl font-bold">{{ sunrise }}</p>
              </div>
              <div class="relative w-32 h-16 border-b border-white/20 overflow-hidden">
                <div class="absolute inset-0 border-[3px] border-dashed border-[#33BECC]/30 rounded-full"></div>
                <div class="absolute left-1/4 top-1/4 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]"></div>
              </div>
              <div class="space-y-1 text-right">
                <p class="text-xs text-[#94A3B8] uppercase">Sunset</p>
                <p class="text-xl font-bold">{{ sunset }}</p>
              </div>
            </div>
          </div>

          <div class="bg-[#162135]/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <h4 class="text-[#94A3B8] text-sm font-medium">UV Index</h4>
            <div>
              <p class="text-3xl font-bold">{{ uvIndex }} <span class="text-sm font-normal text-yellow-400 ml-1">Moderate</span></p>
              <div class="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-gradient-to-r from-green-400 to-yellow-400 h-full" :style="{ width: (uvIndex * 10) + '%' }"></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
    
    <div v-else class="w-full min-h-screen flex items-center justify-center text-white">
        <div class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 border-4 border-[#33BECC] border-t-transparent rounded-full animate-spin"></div>
            <p class="text-[#94A3B8] animate-pulse">Fetching data for {{ weatherStore.locationName }}...</p>
        </div>
    </div>
  </section>
</template>