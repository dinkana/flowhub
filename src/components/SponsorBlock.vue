<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>

<template>
  <div v-if="store.sponsors.some(s => s.active)" class="w-full">
    <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 px-4 sm:px-0">{{ store.t.sponsor_label }}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a
        v-for="sponsor in store.sponsors.filter(s => s.active)"
        :key="sponsor.id"
        :href="sponsor.linkUrl"
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="relative aspect-video bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex items-center justify-center group hover:border-blue-400 transition"
      >
        <span class="absolute top-1 right-1 text-[10px] uppercase bg-black/50 text-white px-1 rounded z-10">{{ store.t.sponsor_label }}</span>
        <img
          :src="sponsor.logoUrl"
          :alt="sponsor.name"
          class="max-w-full h-auto object-contain p-4 group-hover:scale-105 transition-transform"
        />
      </a>
    </div>
  </div>
</template>