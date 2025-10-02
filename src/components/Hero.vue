<script setup lang="ts">
// Impor data dari file JSON
import portfolioData from "@/data/portfolio";
</script>

<template>
  <section class="text-center py-16">
    <img
      src="/profile.jpeg"
      alt="My Profile Photo"
      class="w-50 h-50 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400 dark:border-cyan-600 shadow-lg"
    />
    <h1
      class="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white"
    >
      Hi, I'm {{ portfolioData.name }}
    </h1>
    <p
      class="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
    >
      {{ portfolioData.description }}
    </p>
  </section>
</template>
