<script setup lang="ts">
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import type { Project } from "@/types";
import portfolioData from "@/data/portfolio.ts";

// Beri tipe pada ref sebagai array dari Project (Project[])
const projects = ref<Project[]>(portfolioData.projects);
</script>

<template>
  <section class="py-16">
    <h2
      class="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-10"
    >
      Latest Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
