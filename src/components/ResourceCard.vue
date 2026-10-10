<script setup lang="ts">
import { useAppStore } from '../stores/app'
import type { Resource } from '../types'
import { trackGoal } from '../utils/analytics'
defineProps<{ resource: Resource }>()
const store = useAppStore()
</script>
<template>
  <a
    :href="resource.url"
    target="_blank"
    rel="noopener noreferrer"
    @click="trackGoal('resource_click')"
    class="block p-5 rounded-xl border-2 border-[#d1d5db] dark:border-[#3a3d46] bg-white dark:bg-[#2b2e36] hover:shadow-lg hover:border-[#eab308] dark:hover:border-[#fbbf24] transition group"
  >
    <div class="flex items-start justify-between gap-3 mb-3">
      <h3 class="text-lg font-bold text-[#0f172a] dark:text-[#f1f5f9] group-hover:text-[#eab308] dark:group-hover:text-[#fbbf24] transition leading-tight">
        {{ resource.name[store.locale] }}
      </h3>
      <div class="shrink-0 p-2 rounded-lg bg-[#f8f9fa] dark:bg-[#22242a] text-[#64748b] dark:text-[#94a3b8] group-hover:text-[#eab308] dark:group-hover:text-[#fbbf24] transition">
        <svg v-if="resource.type === 'map'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
        <svg v-else-if="resource.type === 'federation'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>
        <svg v-else-if="resource.type === 'community'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <svg v-else-if="resource.type === 'media'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
        <svg v-else-if="resource.type === 'shop'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </div>
    </div>
    <p class="text-sm text-[#64748b] dark:text-[#94a3b8] mb-4 line-clamp-2 leading-relaxed">
      {{ resource.description[store.locale] }}
    </p>
    <div class="flex items-center justify-between pt-3 border-t border-[#e2e8f0] dark:border-[#3a3d46]">
      <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#fef9c3] dark:bg-[#fbbf24]/10 text-[#a16207] dark:text-[#fbbf24] uppercase tracking-wide">
        {{ store.t[`type_${resource.type}` as keyof typeof store.t] || resource.type }}
      </span>
      <span class="text-xs text-[#94a3b8] dark:text-[#64748b] truncate max-w-[50%] font-mono">
        {{ resource.region === 'ru' ? store.t.region_ru : store.t.region_global }}
      </span>
    </div>
  </a>
</template>