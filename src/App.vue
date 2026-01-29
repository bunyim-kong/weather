<script setup>
  import Header from './components/header.vue'
  import {RouterView} from 'vue-router'
  import RegisterView from '@/views/RegisterView.vue'
</script>

<template>
  <Header />
  <RouterView/>
</template>
