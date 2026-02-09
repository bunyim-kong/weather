<template>
  <footer class="relative w-full bg-[#0B121E] text-[#94A3B8] overflow-hidden">
    <div class="footer-content container">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#33BECC]/40 to-transparent"></div>
            <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#33BECC]/5 blur-[120px] rounded-full"></div>

            <div class="max-w-[1280px] mx-auto px-6 pt-20 pb-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                
                <div class="lg:col-span-4 space-y-6">
                <router-link to="/home" class="flex items-center gap-3 group w-fit">
                    <div class="p-2 bg-[#162135] rounded-xl border border-white/5 group-hover:border-[#33BECC]/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-7 h-7 fill-[#33BECC]">
                        <path d="M64 288C64 341 107 384 160 384L186.9 384C190.4 371.9 197 360.7 206.1 351.6L207.5 350.2C222.5 335.2 242.8 327.3 263.6 328C277.8 312.9 297.8 304.1 319 304.1L321 304.1C342.1 304.1 362.1 312.9 376.4 328C397.2 327.4 417.5 335.3 432.5 350.2L433.9 351.6C443.1 360.8 449.6 372 453.1 384L480 384C533 384 576 341 576 288C576 235 533 192 480 192C479.5 192 478.9 192 478.4 192C479.5 186.8 480 181.5 480 176C480 131.8 444.2 96 400 96C375.7 96 353.9 106.9 339.2 124C320.5 88.3 283.1 64 240 64C178.1 64 128 114.1 128 176C128 183.1 128.7 190.1 129.9 196.8C91.6 209.4 64 245.5 64 288z"/>
                    </svg>
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-white">
                        Weather<span class="text-[#33BECC]">.</span>
                    </span>
                </router-link>
                <p class="info-cols text-sm leading-relaxed max-w-xs">
                    Experience the next generation of weather tracking. Real-time data, beautiful visualizations, and hyper-local accuracy.
                </p>
                <div class="info-cols flex items-center gap-4">
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#162135] border border-white/5 hover:border-[#33BECC] hover:text-[#33BECC] transition-all"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#162135] border border-white/5 hover:border-[#33BECC] hover:text-[#33BECC] transition-all"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#162135] border border-white/5 hover:border-[#33BECC] hover:text-[#33BECC] transition-all"><i class="fab fa-discord"></i></a>
                </div>
                </div>

                <div class="info-cols lg:col-span-4 grid grid-cols-2 gap-8">
                <div>
                    <h4 class="text-white font-semibold mb-6 uppercase tracking-widest text-m">Product</h4>
                    <ul class="info-cols space-y-4 text-sm">
                    <li><router-link to="/home" class="hover:text-white transition-colors">Satellite</router-link></li>
                    <li><router-link to="/travel" class="hover:text-white transition-colors">Planning</router-link></li>
                    <li><router-link to="/forecast" class="hover:text-white transition-colors">Storm Cell</router-link></li>
                    <li><router-link to="/about" class="hover:text-white transition-colors">Global Map</router-link></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-6 uppercase tracking-widest text-m">Company</h4>
                    <ul class="info-cols space-y-4 text-sm">
                    <li><a href="#" class="hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                </div>

                <div class="lg:col-span-4">
                <div class="p-6 rounded-2xl bg-[#162135]/50 border border-white/5 backdrop-blur-sm shadow-xl">
                    <h4 class="text-white font-semibold mb-2">Join the Forecast</h4>
                    <p class="text-xs mb-6">Get weekly weather insights and travel tips delivered to your inbox.</p>
                    <form class="space-y-3" @submit.prevent>
                    <div class="relative">
                        <input 
                        type="email" 
                        placeholder="email@example.com" 
                        class="info-cols w-full bg-[#0B121E] border border-white/10 text-white text-sm rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#33BECC]/20 focus:border-[#33BECC] transition-all"
                        />
                    </div>
                    <button class="info-cols w-full bg-[#33BECC] hover:bg-[#28a8b8] text-[#0B121E] font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(51,190,204,0.3)]">
                        Subscribe
                    </button>
                    </form>
                </div>
                </div>
            </div>

            <div class="info-cols pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-2 text-xs">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                All systems operational
                </div>
                <p class="text-xs">
                &copy; 2026 Weather Inc. Engineered for the elements.
                </p>
                <div class="flex gap-8 text-[11px] font-bold uppercase tracking-tighter">
                <a href="#" class="hover:text-[#33BECC] transition-colors">Status</a>
                <a href="#" class="hover:text-[#33BECC] transition-colors">Privacy</a>
                <a href="#" class="hover:text-[#33BECC] transition-colors">Cookies</a>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>