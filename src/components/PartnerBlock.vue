<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
const getLogoUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
</script>

<template>
  <div v-if="store.partners.some(p => p.active)" class="w-full flex flex-col items-center gap-3 py-4">
    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ store.t.partner_label }}</p>
    <div class="flex flex-wrap justify-center items-center gap-6">
      <a
        v-for="partner in store.partners.filter(p => p.active)"
        :key="partner.id"
        :href="partner.linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition group"
      >
        <img
          :src="getLogoUrl(partner.logoUrl)"
          :alt="partner.name"
          class="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
        />
      </a>
    </div>
  </div>
</template>