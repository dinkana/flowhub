<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>
<template>
  <div v-if="!store.selectedRootId" class="w-full">
    <h2 class="text-lg font-semibold text-[#0f172a] dark:text-[#f1f5f9] mb-4 px-4 sm:px-0 flex items-center gap-2">
      <svg class="text-[#eab308] dark:text-[#fbbf24]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5l6 7-6 7"/><path d="M13 5l6 7-6 7"/></svg>
      {{ store.t.choose_direction }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <button
        v-for="cat in store.rootCategories"
        :key="cat.id"
        @click="store.selectRoot(cat.id)"
        class="flex items-center gap-3 p-4 rounded-xl border-2 border-[#d1d5db] dark:border-[#3a3d46] bg-white dark:bg-[#2b2e36] shadow-sm hover:border-[#eab308] dark:hover:border-[#fbbf24] hover:shadow-md transition text-left group"
      >
        <span class="text-[#eab308] dark:text-[#fbbf24] text-xl group-hover:scale-110 transition-transform">▸</span>
        <span class="text-base font-medium text-[#0f172a] dark:text-[#f1f5f9] group-hover:text-[#eab308] dark:group-hover:text-[#fbbf24]">{{ cat.name[store.locale] }}</span>
      </button>
    </div>
  </div>
  <div v-else class="w-full flex flex-col gap-4">
    <div class="flex items-center gap-3 px-4 sm:px-0">
      <button
        @click="store.resetSelection()"
        aria-label="Back"
        class="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#f1f5f9] dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] hover:text-[#eab308] dark:hover:text-[#fbbf24] transition flex items-center gap-1"
      >
        <span>◀</span> {{ store.t.back }}
      </button>
      <h2 class="text-lg font-semibold text-[#0f172a] dark:text-[#f1f5f9] flex items-center gap-2">
        <svg class="text-[#eab308] dark:text-[#fbbf24]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5l6 7-6 7"/><path d="M13 5l6 7-6 7"/></svg>
        {{ store.rootCategories.find(c => c.id === store.selectedRootId)?.name[store.locale] }}
      </h2>
    </div>
    <div v-if="store.subCategories.length > 0" class="w-full overflow-x-auto pb-2">
      <div class="flex gap-2 min-w-max px-4 sm:px-0">
        <button
          @click="store.selectSub(null)"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition border-2',
            !store.selectedSubId
              ? 'bg-[#eab308] dark:bg-[#fbbf24] text-white dark:text-[#22242a] border-transparent shadow-sm'
              : 'bg-white dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] border-[#d1d5db] dark:border-[#3a3d46] hover:border-[#eab308] dark:hover:border-[#fbbf24]'
          ]"
        >
          {{ store.t.all_disciplines }}
        </button>
        <button
          v-for="cat in store.subCategories"
          :key="cat.id"
          @click="store.selectSub(cat.id)"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition border-2 flex items-center gap-1.5',
            store.selectedSubId === cat.id
              ? 'bg-[#eab308] dark:bg-[#fbbf24] text-white dark:text-[#22242a] border-transparent shadow-sm'
              : 'bg-white dark:bg-[#2b2e36] text-[#64748b] dark:text-[#94a3b8] border-[#d1d5db] dark:border-[#3a3d46] hover:border-[#eab308] dark:hover:border-[#fbbf24]'
          ]"
        >
          <span v-if="store.selectedSubId === cat.id" class="text-xs">◈</span>
          {{ cat.name[store.locale] }}
        </button>
      </div>
    </div>
  </div>
</template>