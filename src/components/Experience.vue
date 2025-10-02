<script setup lang="ts">
import type { Experience } from "@/types";
import portfolioData from "@/data/portfolio";
// Data pengalaman kerja Anda. Edit bagian ini sesuai riwayat Anda.
const experiences = portfolioData.experiences as Experience[];
</script>

<template>
  <section id="experience" class="py-16">
    <div class="container mx-auto px-6">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12"
      >
        Work Experience
      </h2>

      <div
        class="relative border-l-2 border-cyan-400 dark:border-cyan-600 ml-4"
      >
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="mb-10 ml-8"
        >
          <div
            class="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 border-2 border-white dark:border-slate-900"
          ></div>

          <time
            class="text-sm font-normal leading-none text-slate-500 dark:text-slate-400"
            >{{ exp.period }}</time
          >

          <h3 class="text-xl font-semibold text-slate-900 dark:text-white mt-1">
            {{ exp.role }}
          </h3>
          <p class="text-md font-normal text-slate-600 dark:text-slate-300">
            {{ exp.company }}
          </p>

          <ul
            class="list-disc list-inside mt-2 text-slate-600 dark:text-slate-300 space-y-1"
          >
            <li v-for="(desc, i) in exp.description" :key="i">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
