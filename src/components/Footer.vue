<script setup lang="ts">
import portfolioData from "@/data/portfolio.ts";
// Mendapatkan tahun saat ini secara dinamis untuk copyright
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700"
  >
    <div class="container mx-auto px-6 py-8 text-center">
      <div class="flex justify-center space-x-6 mb-4">
        <a
          :href="portfolioData.github"
          target="_blank"
          aria-label="GitHub"
          class="text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          :href="portfolioData.linkedin"
          target="_blank"
          aria-label="LinkedIn"
          class="text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
        <a
          :href="portfolioData.twitter"
          target="_blank"
          aria-label="Twitter"
          class="text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.676.732a4.675 4.675 0 002.034-2.573 9.293 9.293 0 01-2.977 1.136A4.646 4.646 0 0016.616 4c-2.573 0-4.655 2.082-4.655 4.655 0 .365.042.72.126 1.063-3.872-.195-7.31-2.052-9.605-4.88a4.63 4.63 0 00-.628 2.337c0 1.617.823 3.045 2.073 3.88a4.617 4.617 0 01-2.107-.582v.058c0 2.247 1.596 4.118 3.72 4.548a4.645 4.645 0 01-2.103.08c.592 1.847 2.309 3.194 4.34 3.23a9.305 9.305 0 01-5.75 1.977c-.373 0-.743-.022-1.107-.065a13.174 13.174 0 007.157 2.1c8.594 0 13.305-7.128 13.305-13.305 0-.203 0-.406-.014-.608a9.527 9.527 0 002.354-2.432l-.047-.02z"
            />
          </svg>
        </a>
        <a
          :href="portfolioData.instagram"
          target="_blank"
          aria-label="Instagram"
          class="text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z"
            />
          </svg>
        </a>
      </div>

      <p class="text-sm text-slate-600 dark:text-slate-400">
        Copyright © {{ currentYear }} {{ portfolioData.name }}. All Rights
        Reserved.
      </p>
    </div>
  </footer>
</template>
