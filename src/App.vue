<template>
  <div class="bg-primary dark:bg-secondary min-h-screen">
    <Navbar />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const Navbar = defineAsyncComponent(() => import('@/components/layout/Navbar.vue'))
</script>
