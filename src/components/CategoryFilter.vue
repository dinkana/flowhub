<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>

<template>
  <div v-if="!store.selectedRootId" class="w-full">
    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 px-4 sm:px-0 flex items-center gap-2">
      <span class="text-blue-600 dark:text-blue-400">◼</span> Выберите направление
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <button
        v-for="cat in store.rootCategories"
        :key="cat.id"
        @click="store.selectRoot(cat.id)"
        class="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition text-left group"
      >
        <span class="text-blue-600 dark:text-blue-400 text-xl group-hover:scale-110 transition-transform">▸</span>
        <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">{{ cat.name[store.locale] }}</span>
      </button>
    </div>
  </div>
  <div v-else class="w-full flex flex-col gap-4">
    <div class="flex items-center gap-3 px-4 sm:px-0">
      <button
        @click="store.resetSelection()"
        class="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center gap-1"
      >
        <span>◀</span> Назад
      </button>
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
        <span class="text-blue-600 dark:text-blue-400">◼</span> {{ store.rootCategories.find(c => c.id === store.selectedRootId)?.name[store.locale] }}
      </h2>
    </div>
    <div v-if="store.subCategories.length > 0" class="w-full overflow-x-auto pb-2">
      <div class="flex gap-2 min-w-max px-4 sm:px-0">
        <button
          @click="store.selectSub(null)"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition border',
            !store.selectedSubId
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
          ]"
        >
          Все дисциплины
        </button>
        <button
          v-for="cat in store.subCategories"
          :key="cat.id"
          @click="store.selectSub(cat.id)"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition border flex items-center gap-1.5',
            store.selectedSubId === cat.id
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
          ]"
        >
          <span v-if="store.selectedSubId === cat.id" class="text-xs">◈</span>
          {{ cat.name[store.locale] }}
        </button>
      </div>
    </div>
  </div>
</template>