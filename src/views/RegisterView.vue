<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  console.log('Registering:', { username: username.value, email: email.value, password: password.value })
  alert('Account created! (In a real app, this would connect to your database)')
}
</script>

<template>
  <section class="min-h-[calc(100vh-64px)] w-full flex items-center justify-center bg-[#0B121E] px-6 py-12">
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#33BECC]/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="w-full max-w-md relative z-10">
      <div class="bg-[#162135]/50 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
        
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p class="group text-[#94A3B8]">Join our weather community today</p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="input-fill space-y-2">
            <label class="text-sm font-medium text-[#94A3B8] ml-1">Username</label>
            <div class="relative group">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-[#94A3B8] group-focus-within:text-[#33BECC] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>

              <input 
                v-model="username"
                type="text" 
                placeholder="your name" 
                class="w-full bg-[#0B121E]/50 border border-white/10 text-white rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#33BECC]/30 focus:border-[#33BECC] transition-all placeholder-white/20"
                required
              />
            </div>
          </div>

          <div class="input-fill space-y-2">
            <label class="text-sm font-medium text-[#94A3B8] ml-1">Email Address</label>
            <div class="relative group">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-[#94A3B8] group-focus-within:text-[#33BECC] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input 
                v-model="email"
                type="email" 
                placeholder="name@example.com" 
                class="w-full bg-[#0B121E]/50 border border-white/10 text-white rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#33BECC]/30 focus:border-[#33BECC] transition-all placeholder-white/20"
                required
              />
            </div>
          </div>

          <div class="input-fill space-y-2">
            <label class="text-sm font-medium text-[#94A3B8] ml-1">Password</label>
            <div class="relative group">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-[#94A3B8] group-focus-within:text-[#33BECC] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                v-model="password"
                type="password" 
                placeholder="••••••••" 
                class="w-full bg-[#0B121E]/50 border border-white/10 text-white rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#33BECC]/30 focus:border-[#33BECC] transition-all placeholder-white/20"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            class="submit-input w-full bg-[#33BECC] hover:bg-[#2bb0bd] text-[#0B121E] font-bold py-3 rounded-2xl shadow-lg shadow-[#33BECC]/20 transition-all active:scale-[0.98] mt-4"
          >
            Create Account
          </button>
        </form>

        <p class="input-fill text-center mt-8 text-[#94A3B8] text-sm">
          Already have an account? 
          <router-link to="/login" class="text-[#33BECC] font-bold hover:underline ml-1">Sign In</router-link>
        </p>
      </div>
    </div>
  </section>
</template>