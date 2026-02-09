<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import { weatherStore } from './weatherStore' // Import your store

onMounted(() => {
  // This triggers the GPS check as soon as the app starts
  weatherStore.initLocation();
})
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>