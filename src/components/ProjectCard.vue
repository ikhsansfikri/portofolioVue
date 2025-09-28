<script setup lang="ts">
import type { Project } from "@/types";
// Definisikan kembali atau impor interface Project
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

// Gunakan sintaks TypeScript untuk defineProps
defineProps<{
  project: Project;
}>();
</script>

<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
  >
    <img
      :src="project.image"
      alt="Project Image"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">
        {{ project.title }}
      </h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </a>
</template>
