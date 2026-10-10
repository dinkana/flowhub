<script setup lang="ts">
import { useAppStore } from '../stores/app'
import ResourceCard from './ResourceCard.vue'
const store = useAppStore()
const typeKeys = ['map', 'federation', 'community', 'media', 'shop', 'other'] as const
</script>
<template>
  <div v-if="store.selectedRootId" class="w-full flex flex-col gap-6">
    <div class="w-full overflow-x-auto pb-2">
      <div class="flex gap-2 min-w-max px-4 sm:px-0">
        <button
          @click="store.selectedType = null"
          :class="[
            'px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition border',
            !store.selectedType
              ? 'bg-[#0f172a] dark:bg-[#f1f5f9] text-white dark:text-[#22242a] border-transparent shadow-sm'
              : 'bg-white dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] border-[#d1d5db] dark:border-[#3a3d46]'
          ]"
        >
          {{ store.t.all_types }}
        </button>
        <button
          v-for="type in typeKeys"
          :key="type"
          @click="store.selectedType = type"
          :class="[
            'px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition border',
            store.selectedType === type
              ? 'bg-[#0f172a] dark:bg-[#f1f5f9] text-white dark:text-[#22242a] border-transparent shadow-sm'
              : 'bg-white dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] border-[#d1d5db] dark:border-[#3a3d46]'
          ]"
        >
          {{ store.t[`type_${type}` as keyof typeof store.t] }}
        </button>
      </div>
    </div>
    <div v-if="store.paginatedResources.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ResourceCard
        v-for="resource in store.paginatedResources"
        :key="resource.id"
        :resource="resource"
      />
    </div>
    <div v-else class="text-center py-12 text-[#64748b] dark:text-[#94a3b8]">
      {{ store.t.no_resources }}
    </div>
    <div v-if="store.totalPages > 1" class="flex justify-center items-center gap-4 mt-4">
      <button
        @click="store.currentPage--"
        :disabled="store.currentPage === 1"
        aria-label="Previous page"
        class="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#2b2e36] border border-[#d1d5db] dark:border-[#3a3d46] text-[#0f172a] dark:text-[#f1f5f9] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#eab308] dark:hover:border-[#fbbf24] transition"
      >
        {{ store.t.page_prev }}
      </button>
      <span class="text-sm text-[#64748b] dark:text-[#94a3b8]">
        {{ store.currentPage }} / {{ store.totalPages }}
      </span>
      <button
        @click="store.currentPage++"
        :disabled="store.currentPage === store.totalPages"
        aria-label="Next page"
        class="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#2b2e36] border border-[#d1d5db] dark:border-[#3a3d46] text-[#0f172a] dark:text-[#f1f5f9] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#eab308] dark:hover:border-[#fbbf24] transition"
      >
        {{ store.t.page_next }}
      </button>
    </div>
  </div>
</template>