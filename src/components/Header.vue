<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>
<template>
  <header class="sticky top-0 z-50 w-full border-b border-[#d1d5db] dark:border-[#3a3d46] bg-white/80 dark:bg-[#22242a]/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <h1 class="text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] whitespace-nowrap flex items-center gap-2">
        <svg class="text-[#eab308] dark:text-[#fbbf24]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5l6 7-6 7"/><path d="M13 5l6 7-6 7"/></svg>
        FlowHub
      </h1>
      <div class="flex items-center gap-3">
        <button
          @click="store.showAbout"
          class="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#f1f5f9] dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] hover:text-[#eab308] dark:hover:text-[#fbbf24] transition"
        >
          {{ store.t.about_link }}
        </button>
        <button
          @click="store.toggleTheme"
          aria-label="Toggle theme"
          class="p-2 rounded-lg bg-[#f1f5f9] dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] hover:text-[#eab308] dark:hover:text-[#fbbf24] transition"
        >
          <svg v-if="store.dark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>
        <button
          @click="store.setLocale(store.locale === 'ru' ? 'en' : 'ru')"
          aria-label="Toggle language"
          class="flex items-center rounded-lg text-sm font-medium bg-[#f1f5f9] dark:bg-[#2b2e36] p-0.5 transition"
        >
          <span :class="['px-2 py-1 rounded-md transition', store.locale === 'ru' ? 'bg-white dark:bg-[#3a3d46] text-[#0f172a] dark:text-[#f1f5f9] shadow-sm' : 'text-[#64748b] dark:text-[#94a3b8]']">RU</span>
          <span :class="['px-2 py-1 rounded-md transition', store.locale === 'en' ? 'bg-white dark:bg-[#3a3d46] text-[#0f172a] dark:text-[#f1f5f9] shadow-sm' : 'text-[#64748b] dark:text-[#94a3b8]']">EN</span>
        </button>
      </div>
    </div>
  </header>
</template>