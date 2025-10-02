<script setup lang="ts">
import { ref, onMounted } from "vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import Footer from "./components/Footer.vue";
import logoTransparent from "./assets/logo-transparent.png";

// Memberikan tipe data 'boolean' pada ref
const isDarkMode = ref<boolean>(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-300"
  >
    <header
      class="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg sticky top-0 z-50"
    >
      <nav
        class="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <div
          class="flex items-center gap-2 text-xl font-sans font-bold text-cyan-500"
        >
          <img
            :src="logoTransparent"
            alt="IF Logo"
            class="h-12 w-auto pt-2 mx-auto rounded-full"
          />
        </div>
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <svg
            v-if="!isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </nav>
    </header>
    <main class="container max-w-7xl mx-auto px-6 py-12">
      <Hero />
      <Projects />
      <Experience />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Perubahan kecil pada App.vue untuk memastikan footer menempel di bawah 
    bahkan pada halaman dengan konten yang sedikit.
  */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.flex-grow {
  flex-grow: 1;
}
</style>
