<template>
  <header>
    <div class="flex justify-between items-center p-5 lg:px-12 relative z-20">
      <div class="flex flex-cols space-x-10">
        <div class="text-3xl lg:text-5xl font-rubik text-auto cursor-default">Timothie</div>
        <img
          alt="Me"
          class="w-[5%] h-auto -mt-5 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-5"
          src="/src/assets/me.png"
        />
      </div>

      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-5xl md:text-primary text-secondary dark:text-primary">
            <Icon icon="material-symbols:close-rounded"></Icon>
          </span>
          <span v-else class="text-5xl md:text-primary text-secondary dark:text-primary">
            <Icon icon="material-symbols:menu-rounded"></Icon>
          </span>
        </button>
      </div>

      <!-- Navbar Link -->
      <nav
        :class="[
          `fixed -mt-3.5 inset-0 z-20 flex flex-col items-center justify-center bg-accent md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
            isMenuOpen ? 'block' : 'hidden'
          }
                `,
        ]"
      >
        <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="block transition ease-linear md:text-lg lg:text-2xl font-bold md:text-secondary hover:text-accent dark:text-primary sm:dark:text-primary dark:hover:text-accent px-4 py-2 border-b-2 border-transparent hover:border-accent rounded-xl"
              @click="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
          <div class="flex flex-col items-center">
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
          </div>
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

const scrollToSection = href => {
  isMenuOpen.value = false
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
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
