<template>
  <div class="bg-[#f5f8fc] min-h-screen">

  
    <section
      class="relative h-[360px] bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')"
    >
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">About Our Weather</h1>
        <p class="text-lg tracking-wide uppercase">Powering your day, protecting our future</p>
      </div>
    </section>

    
    <div class="bg-[#0B121E] py-16 px-6 md:px-12 font-sans">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      
        <div class="bg-[#1e293b] text-white p-8 rounded-2xl shadow-2xl hover:-translate-y-2 transition">
          <div class="mb-4 text-4xl text-sky-400">
            <i class="fa-regular fa-cloud"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">Our Mission</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            To deliver accurate, real-time weather information and advanced predictive analytics
            that empower individuals, communities, and organizations to make informed decisions.
          </p>
        </div>
        <!-- Technology -->
        <div class="bg-[#1e293b] text-white p-8 rounded-2xl shadow-2xl hover:-translate-y-2 transition">
          <div class="mb-4 text-4xl text-cyan-400">
            <i class="fa-solid fa-wifi"></i>
          </div>
          <h3 class="font-bold mb-3 text-xl">Our Technology</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Using advanced satellite imagery, AI-powered forecasting models, and a global sensor
            network, we transform massive atmospheric data into precise real-time insights.
          </p>
        </div>
        <!-- Impact -->
        <div class="bg-[#1e293b] text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
          <div class="mb-4 text-4xl text-green-400">
            <i class="fa-brands fa-pagelines"></i>
          </div>
          <h3 class="text-white font-bold mb-3 text-xl">Our Impact</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            We help communities prepare, respond, and thrive by turning weather intelligence
            into meaningful action.
          </p>
        </div>
      </div>
    </div>

    

   
    <section class="py-20 px-6 bg-[#0B121E]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">What We Do</h2>
          
        </div>

       
        <div class="grid md:grid-cols-3 gap-10">
         
          <div class="flex flex-col items-center text-center p-8 rounded-2xl  shadow-lg  hover:from-green-100 hover:to-green-200 transition transform hover:scale-105 bg-[#1e293b]">
            <div class="mb-4 p-4 rounded-full bg-[#0B121E]">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M3 6h18M3 18h18"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">Weather Forecasts</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Provide accurate daily and weekly weather forecasts so everyone can plan with confidence.
            </p>
          </div>

          
          <div class="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg hover:from-green-100 hover:to-green-200 transition transform hover:scale-105 bg-[#1e293b] mt-10 md:mt-0">
            <div class="mb-4 p-4 rounded-full bg-[#0B121E]">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">Climate Research</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Conduct studies to improve understanding of climate patterns and long-term forecasts.
            </p>
          </div>

          <div class="flex flex-col items-center text-center p-8 rounded-2xl  shadow-lg  hover:from-green-100 hover:to-green-200 transition transform hover:scale-105 bg-[#1e293b] mt-10 md:mt-0">
            <div class="mb-4 p-4 rounded-full bg-[#0B121E]">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h18M3 19h18"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">Public Safety</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Issue timely alerts and guidance to protect communities during extreme weather events.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
