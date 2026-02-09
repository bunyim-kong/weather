<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { weatherStore } from '../weatherStore'

const router = useRouter()
const isLoginView = ref(false) // Toggle between Register and Login

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  if (!isLoginView.value) {
    // REGISTER LOGIC
    weatherStore.setUser({ ...form })
    alert("Account created! Please login.")
    isLoginView.value = true // Switch to login after registering
  } else {
    // LOGIN LOGIC
    if (form.email === weatherStore.user?.email && form.password === weatherStore.user?.password) {
      weatherStore.login()
      router.push('/home')
    } else {
      alert("Invalid credentials. Did you register yet?")
    }
  }
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center bg-[#0B121E] px-4">
    <div class="w-full max-w-md bg-[#162135] border border-white/5 p-8 rounded-3xl shadow-2xl">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">
          {{ isLoginView ? 'Welcome Back' : 'Create Account' }}
        </h1>
        <p class="text-[#94A3B8]">Enter your details to access the weather</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="!isLoginView" class="info-cols space-y-1">
          <label class="text-xs font-bold text-[#33BECC] uppercase">Full Name</label>
          <input v-model="form.name" type="text" required class="w-full bg-[#0B121E] border border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#33BECC]" placeholder="Your name">
        </div>

        <div class="info-cols space-y-1">
          <label class="text-xs font-bold text-[#33BECC] uppercase">Email Address</label>
          <input v-model="form.email" type="email" required class="w-full bg-[#0B121E] border border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#33BECC]" placeholder="name@email.com">
        </div>

        <div class="info-cols space-y-1">
          <label class="text-xs font-bold text-[#33BECC] uppercase">Password</label>
          <input v-model="form.password" type="password" required class="w-full bg-[#0B121E] border border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#33BECC]" placeholder="••••••••">
        </div>

        <button type="submit" class="submit-input w-full bg-[#33BECC] text-[#0B121E] font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform active:scale-95 mt-4">
          {{ isLoginView ? 'Login' : 'Sign Up' }}
        </button>
      </form>

      <div class="info-cols mt-6 text-center">
        <button @click="isLoginView = !isLoginView" class="text-sm text-[#94A3B8] hover:text-[#33BECC] transition-colors">
          {{ isLoginView ? "Don't have an account? Register" : "Already have an account? Login" }}
        </button>
      </div>
    </div>
  </div>
</template>