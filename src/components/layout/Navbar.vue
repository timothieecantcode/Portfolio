<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px12 relative z-20">
      <div class="text-3xl font-bold dark:text-white">Timothie</div>

      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span class="text-5xl md:text-primary text-white dark:text-white">
            <Icon icon="material-symbols:close-rounded"></Icon>
          </span>
          <span class="text-5xl md:text-primary text-white dark:text-white">
            <Icon icon="material-symbols:menu-rounded"></Icon>
          </span>
        </button>
      </div>

      <!-- Navbar Link -->
      <nav
        :class="[
          `fixed inset-0 z-20 flex flex-col imtems-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
            isMenuOpen ? 'block' : 'hidden'
          }
                `,
        ]"
      >
        <ul class="flex flex-col items-center space-y-10 md:flex-row md:space-x-10 md:space-y-0">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="block transition ease-linear md:text-lg lg:text-xl font-bold text-secondary md:text-secondary hover:text-accent dark:text-white dark:hover:text-accent"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
        <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
          <!-- Show moon icon if dark mode is off, otherwise show sun icon -->
          <Icon
            v-if="!isDarkMode"
            icon="line-md:moon-filled"
            class="text-5xl text-secondary hover:text-accent"
          />
          <Icon
            v-else
            icon="line-md:sunny-outline"
            class="text-5xl text-primary hover:text-accent"
          />
        </button>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref, useShadowRoot } from 'vue'
const isMenuOpen = ref(false)
const Menu = ref([
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '#about' },
])

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

const toggleDarkMode = () => {
  const html = document.documentElement
  if (isDarkMode.value) {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  // Update dark mode state
  isDarkMode.value = !isDarkMode.value
}
</script>
