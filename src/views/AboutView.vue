<template>
  <!-- ONE ROOT -->
  <div class="bg-[#f5f8fc] min-h-screen">

    <!-- Hero Section -->
    <section
      class="relative h-[360px] bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')"
    >
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">
          About Our Weather
        </h1>
        <p class="text-lg tracking-wide uppercase">
          Powering your day, protecting our future
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <div class="bg-[#0B121E] py-16 px-6 md:px-12 font-sans">

      <!-- Mission / Tech / Impact -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

        <div class="bg-[#1e293b] text-white p-8 rounded-2xl shadow-2xl hover:-translate-y-2 transition">
          <div class="mb-4 text-3xl">☁️</div>
          <h3 class="text-xl font-bold mb-3">Our Mission</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            To deliver accurate, real-time weather information and advanced predictive analytics that
             empower individuals, communities, and organizations to make
             informed decisions, enhance safety, and plan with confidence in an ever-changing climate.
          </p>
        </div>
          <div class="bg-[#1e293b] text-white p-8 rounded-2xl shadow-2xl hover:-translate-y-2 transition">
          <div class="mb-4 text-3xl text-cyan-500">📡</div>
          <h3 class="text-white font-bold mb-3 text-slate-800">Our Technology</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
           Using advanced satellite imagery, AI-powered forecasting models, and a global network 
           of ground sensors, we transform massive volumes of atmospheric data into precise, real-time weather insights.
            Our systems continuously analyze patterns, detect anomalies, and update forecasts to deliver fast,
            reliable information you can trust—anytime, anywhere.
          </p>
          <p class="text-[10px] text-gray-400 italic text-center uppercase">
            
          </p>
        </div>

        <div class="bg-[#1e293b] p-8 rounded-2xl shadow-xl  hover:-translate-y-2 transition">
          <div class="mb-4 text-3xl text-green-500">🌱 <i class="fas fa-cat"></i></div>
          <h3 class="text-white font-bold mb-3 text-slate-800">Our Impact</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-6">
            We help communities prepare, respond, and thrive by transforming weathe
            r intelligence into meaningful action. From supporting farmers 
            and emergency responders to guiding everyday decisions, our impact 
            reaches where it matters most
          </p>
          <div class="flex gap-3 text-xs font-semibold">
            <span>🌾 Agriculture</span>
            <span>🚨 Emergency</span>
            <span>📅  Daily Life</span>
          </div>
        </div>

      </div>

      <!-- Team -->
      

    </div>
  </div>
</template>




