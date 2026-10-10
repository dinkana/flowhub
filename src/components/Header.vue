<script setup lang="ts">
import { useAppStore } from '../stores/app'
import { ref, watch } from 'vue'

const store = useAppStore()
const searchInput = ref(store.searchQuery)
let timer: ReturnType<typeof setTimeout> | null = null

watch(searchInput, (val) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => { store.searchQuery = val }, 300)
})
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-4">
      <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap flex items-center gap-2">
        <span class="text-blue-600 dark:text-blue-400">◼</span> FlowHub
      </h1>
      
      <div class="flex-1 w-full sm:w-auto">
        <input
          v-model="searchInput"
          type="text"
          :placeholder="store.t.search_placeholder"
          class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="store.toggleTheme"
          class="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >{{ store.dark ? '☀' : '☾' }}</button>
        <button
          @click="store.setLocale('ru')"
          :class="['px-3 py-1.5 rounded-lg text-sm font-medium transition', store.locale === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300']"
        >RU</button>
        <button
          @click="store.setLocale('en')"
          :class="['px-3 py-1.5 rounded-lg text-sm font-medium transition', store.locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300']"
        >EN</button>
      </div>
    </div>
  </header>
</template>