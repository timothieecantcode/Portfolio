<template>
  <section class="flex justify-center items-center text-auto min-h-screen mt-20 lg:mt-0">
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#dbe2ea] via-[#3f72af] to-[#112d4e] opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#dbe2ea] via-[#3f72af] to-[#112d4e] opacity-30 dark:opacity20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>
    <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
      <header class="text-center lg:text-left lg:pr-20">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold cursor-default">
          Hello, I'm
          <span class="text-auto font-codystar cursor-default inline-block animate-bounce"
            >Timothie</span
          >
        </h1>

        <!-- Button for user type -->
        <ul class="flex flex-col items-center pb-5 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <li>
            <button
              class="pr-8 text-m md:text-3xl rounded-xl transition-colors font-bold"
              :class="
                activeType === 'anyone'
                  ? 'text-secondary dark:text-primary font-bold cursor-default'
                  : 'text-gray-500 cursor-pointer'
              "
              @click="activeType = 'anyone'"
            >
              For anyone
            </button>
            <button
              class="pr-8 text-m md:text-3xl rounded-xl transition-colors font-bold"
              :class="
                activeType === 'recruiter'
                  ? 'text-secondary dark:text-primary font-bold cursor-default'
                  : 'text-gray-500 cursor-pointer'
              "
              @click="activeType = 'recruiter'"
            >
              For recruiters
            </button>
            <button
              class="pr-8 text-m md:text-3xl rounded-xl transition-colors font-bold"
              :class="
                activeType === 'engineer'
                  ? 'text-secondary dark:text-primary font-bold cursor-default'
                  : 'text-gray-500 cursor-pointer'
              "
              @click="activeType = 'engineer'"
            >
              For engineers
            </button>
            <button class="text-m md:text-2xl">
              <Icon icon="icomoon-free:point-left" class="text-2xl text-auto"></Icon>
            </button>
          </li>
        </ul>

        <div class="relative text-lg mx-auto lg:mx-0 font-semibold h-[800px] overflow-auto">
          <!-- Message for user type -->
          <p
            v-if="activeType === 'anyone'"
            class="md:text-4xl max-w-4xl mx-auto lg:mx-0 opacity-90 font-delius"
            style="word-spacing: 0.4rem"
          >
            Thanks for stopping by! This is my little corner of the internet where I showcase my
            journey as a software engineering student and share some projects I've worked on.
            Whether you're here out of curiosity or exploring for inspiration, I hope you find
            something that catches your eye. Feel free to browse around, and don't hesitate to reach
            out if you have any questions, ideas, or just want to chat about all things tech. I
            always enjoy connecting with new people!
          </p>
          <p
            v-else-if="activeType === 'recruiter'"
            class="md:text-4xl max-w-4xl mx-auto lg:mx-0 font-tinos"
            style="word-spacing: 0.4rem"
          >
            Thank you for visiting my website. I'm thrilled to share my journey, skills, and
            projects with you. As a software engineering student at the University of Adelaide, I am
            passionate about creating innovative solutions that bridge hardware and software while
            delivering practical applications. Feel free to explore my portfolio to see the projects
            that reflect my dedication to continuous learning and problem-solving. If you have any
            questions or would like to discuss potential opportunities, don't hesitate to reach out.
            I look forward to connecting with you!
          </p>
          <p
            v-else-if="activeType === 'engineer'"
            class="md:text-4xl max-w-4xl mx-auto lg:mx-0 font-semibold"
            style="word-spacing: 0.4rem"
          >
            Welcome, fellow engineers! I'm Timothie, a software engineering student at the
            University of Adelaide. I build solutions that bridge hardware and software, driven by
            curiosity and a love for efficiency. My toolkit includes digital logic, full-stack dev,
            and hands-on PC builds. Check out this.projects to see my work in action. Always keen to
            collaborate or swap ideas — feel free to reach out!
          </p>
        </div>
      </header>
      <div class="justify-center items-center">
        <img
          src="@/assets/PFP.jpg"
          alt="Me"
          class="hidden md:block absolute top-0 right-0 object-cover w-[40%] h-auto rounded-full"
        />
      </div>
    </main>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'

const activeType = ref('anyone')
</script>
