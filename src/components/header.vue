<template>
  <header class="sticky top-0 z-50 w-full bg-[#0B121E]/90 backdrop-blur-md border-b border-white/5 flex flex-col items-center shadow-2xl">
    
    <nav class="w-full max-w-[1280px] mx-auto h-16 flex justify-between items-center">
        <!-- logo -->
        <router-link to="/" class="flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                class="w-9 h-9 fill-[#33BECC] group-hover:drop-shadow-[0_0_8px_#33BECC] transition-all duration-300">

            <path d="M64 288C64 341 107 384 160 384L186.9 384C190.4 371.9 197 360.7 206.1 351.6L207.5 350.2C222.5 335.2 242.8 327.3 263.6 328C277.8 312.9 297.8 304.1 319 304.1L321 304.1C342.1 304.1 362.1 312.9 376.4 328C397.2 327.4 417.5 335.3 432.5 350.2L433.9 351.6C443.1 360.8 449.6 372 453.1 384L480 384C533 384 576 341 576 288C576 235 533 192 480 192C479.5 192 478.9 192 478.4 192C479.5 186.8 480 181.5 480 176C480 131.8 444.2 96 400 96C375.7 96 353.9 106.9 339.2 124C320.5 88.3 283.1 64 240 64C178.1 64 128 114.1 128 176C128 183.1 128.7 190.1 129.9 196.8C91.6 209.4 64 245.5 64 288z"/>
            </svg>

            <span class="text-2xl font-bold tracking-tight text-white transition group-hover:text-[#33BECC]">
                Weather<span class="text-[#33BECC]">.</span>
            </span>
        </router-link>

        <!-- register -->
        <router-link to="/profile"
            class="bg-[#162135] border border-white/10 text-[#33BECC] px-4 py-2 rounded-xl hover:bg-[#33BECC] hover:text-[#0B121E] transition-all duration-300 shadow-lg">
            <i class="far fa-user"></i>
        </router-link>
    </nav>
        
    <nav class="w-full max-w-[1280px] mx-auto h-14 flex justify-between items-center border-t border-white/5">
        <!-- navlinks -->
        <ul class="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <li>
              <router-link to="/home" class="relative text-[#94A3B8] hover:text-white transition-colors group">
                  Home
                  <span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>

            <li>
              <router-link to="/location" class="relative text-[#94A3B8] hover:text-white transition-colors group">
                  Location
                  <span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>

            <li>
              <router-link to="/travel" class="relative text-[#94A3B8] hover:text-white transition-colors group">
                  Travel
                  <span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>

            <li>
              <router-link to="/forecast" class="relative text-[#94A3B8] hover:text-white transition-colors group">
                  Forecast
                  <span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>

            <li>
              <router-link to="/about" class="relative text-[#94A3B8] hover:text-white transition-colors group">
                  About
                  <span class="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-[#33BECC] transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>
        </ul>

        <!-- search -->
        <div class="relative group">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#33BECC] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </span>
            <input 
                type="text" 
                placeholder="Search city..." 
                class="w-[280px] lg:w-[350px] bg-[#162135] border border-white/10 text-white text-sm rounded-lg py-1.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#33BECC]/30 focus:border-[#33BECC] transition-all placeholder-[#94A3B8]/50"/>
        </div>
    </nav>
  </header>
</template>