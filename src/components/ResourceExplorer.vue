<script setup lang="ts">
import { useAppStore } from '../stores/app'
import ResourceCard from './ResourceCard.vue'

const store = useAppStore()
const typeKeys = ['map', 'federation', 'community', 'media', 'shop', 'other'] as const
</script>

<template>
  <div v-if="!store.selectedRootId" class="text-center py-12 text-gray-500 dark:text-gray-400">
    {{ store.t.choose_category }}
  </div>
  <div v-else class="w-full flex flex-col gap-6">
    <div class="w-full overflow-x-auto pb-2">
      <div class="flex gap-2 min-w-max px-4 sm:px-0">
        <button
          @click="store.selectedType = null"
          :class="[
            'px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition border',
            !store.selectedType
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-800 dark:border-gray-200'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600'
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
              ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-800 dark:border-gray-200'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600'
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
    <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
      {{ store.t.no_resources }}
    </div>
    <div v-if="store.totalPages > 1" class="flex justify-center items-center gap-4 mt-4">
      <button
        @click="store.currentPage--"
        :disabled="store.currentPage === 1"
        class="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        {{ store.t.page_prev }}
      </button>
      <span class="text-sm text-gray-600 dark:text-gray-400">
        {{ store.currentPage }} / {{ store.totalPages }}
      </span>
      <button
        @click="store.currentPage++"
        :disabled="store.currentPage === store.totalPages"
        class="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        {{ store.t.page_next }}
      </button>
    </div>
  </div>
</template>