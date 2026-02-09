<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { weatherStore } from '../weatherStore'

const router = useRouter()
const searchQuery = ref('')
const suggestions = ref([])
const showSuggestions = ref(false)
const isSearching = ref(false)

// 1. Fetch suggestions as user types
const fetchSuggestions = async (query) => {
  if (query.length < 2) {
    suggestions.value = []
    return
  }
  isSearching.value = true
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en&format=json`)
    const data = await res.json()
    suggestions.value = data.results || []
  } catch (error) {
    console.error("Geocoding failed", error)
  } finally {
    isSearching.value = false
  }
}

// 2. Debounce watcher
let timeout = null
watch(searchQuery, (newVal) => {
  clearTimeout(timeout)
  if (!newVal) {
    suggestions.value = []
    return
  }
  timeout = setTimeout(() => fetchSuggestions(newVal), 300)
})

// 3. Selection Logic
const selectCity = (city) => {
  weatherStore.updateLocation(
    `${city.name}, ${city.country}`,
    city.latitude,
    city.longitude
  )
  searchQuery.value = ''
  suggestions.value = []
  showSuggestions.value = false
  router.push('/home') // Redirect to home to see the weather update
}

// 4. Auth Logic
const handleLogout = () => {
  weatherStore.logout()
  router.push('/profile') // Send back to register/login page
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-[#0B121E]/90 backdrop-blur-md border-b border-white/5 flex flex-col items-center shadow-2xl">
    
    <nav class="w-full max-w-[1280px] mx-auto h-16 flex justify-between items-center px-4">
        <router-link to="/home" class="flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-9 h-9 fill-[#33BECC] group-hover:drop-shadow-[0_0_8px_#33BECC] transition-all duration-300">
                <path d="M64 288C64 341 107 384 160 384L186.9 384C190.4 371.9 197 360.7 206.1 351.6L207.5 350.2C222.5 335.2 242.8 327.3 263.6 328C277.8 312.9 297.8 304.1 319 304.1L321 304.1C342.1 304.1 362.1 312.9 376.4 328C397.2 327.4 417.5 335.3 432.5 350.2L433.9 351.6C443.1 360.8 449.6 372 453.1 384L480 384C533 384 576 341 576 288C576 235 533 192 480 192C479.5 192 478.9 192 478.4 192C479.5 186.8 480 181.5 480 176C480 131.8 444.2 96 400 96C375.7 96 353.9 106.9 339.2 124C320.5 88.3 283.1 64 240 64C178.1 64 128 114.1 128 176C128 183.1 128.7 190.1 129.9 196.8C91.6 209.4 64 245.5 64 288z"/>
            </svg>
            <span class="text-2xl font-bold tracking-tight text-white transition group-hover:text-[#33BECC]">
                Weather<span class="text-[#33BECC]">.</span>
            </span>
        </router-link>

        <div class="flex items-center gap-3">
            <button v-if="weatherStore.isLoggedIn" 
                @click="handleLogout"
                class="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-bold">
                Logout
            </button>

            <router-link v-else to="/profile"
                class="bg-[#162135] border border-white/10 text-[#33BECC] px-4 py-2 rounded-xl hover:bg-[#33BECC] hover:text-[#0B121E] transition-all duration-300 shadow-lg">
                <i class="far fa-user"></i>
            </router-link>
        </div>
    </nav>
        
    <nav class="w-full max-w-[1280px] mx-auto h-14 flex justify-between items-center border-t border-white/5 px-4">
        <ul class="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <li><router-link to="/home" class="relative text-[#94A3B8] hover:text-white transition-colors group">Home<span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span></router-link></li>
            <li><router-link to="/travel" class="relative text-[#94A3B8] hover:text-white transition-colors group">Travel<span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span></router-link></li>
            <li><router-link to="/forecast" class="relative text-[#94A3B8] hover:text-white transition-colors group">News<span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span></router-link></li>
            <li><router-link to="/about" class="relative text-[#94A3B8] hover:text-white transition-colors group">About<span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span></router-link></li>
        </ul>

        <div class="relative group">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <svg v-if="!isSearching" class="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#33BECC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <div v-else class="w-3 h-3 border-2 border-[#33BECC] border-t-transparent rounded-full animate-spin"></div>
            </span>
            
            <input 
                v-model="searchQuery"
                @focus="showSuggestions = true"
                @blur="setTimeout(() => showSuggestions = false, 200)"
                type="text" 
                placeholder="Search city..." 
                class="w-[250px] lg:w-[350px] bg-[#162135] border border-white/10 text-white text-sm rounded-lg py-1.5 pl-10 pr-4 outline-none focus:border-[#33BECC] transition-all"/>

            <ul v-if="showSuggestions && suggestions.length > 0" 
                class="absolute top-full left-0 right-0 mt-2 bg-[#162135] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-[100]">
              <li v-for="city in suggestions" :key="city.id">
                <button @click="selectCity(city)" class="w-full text-left px-4 py-3 hover:bg-[#33BECC]/10 flex flex-col transition-colors border-b border-white/5 last:border-none">
                  <span class="text-white font-medium">{{ city.name }}</span>
                  <span class="text-[11px] text-[#94A3B8]">{{ city.country }}</span>
                </button>
              </li>
            </ul>
        </div>
    </nav>
  </header>
</template>