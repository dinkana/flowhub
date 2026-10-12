<script setup lang="ts">
import { useAppStore } from '../stores/app'
import { trackGoal } from '../utils/analytics'

const store = useAppStore()

const categoryIcons: Record<string, string> = {
  tourism: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/>',
  cycling: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
  fishing: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3"/><path d="M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M16 5v-2"/>',
  skydiving: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 12a10 10 0 1 0 -20 0"/><path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3"/><path d="M2 12l10 10l-3.5 -10"/><path d="M15.5 12l-3.5 10l10 -10"/>',
  surfing: '<path d="M2 6c2 3 4 3 6 0s4-3 6 0 4 3 6 0"/><path d="M2 12c2 3 4 3 6 0s4-3 6 0 4 3 6 0"/><path d="M2 18c2 3 4 3 6 0s4-3 6 0 4 3 6 0"/>',
  running: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.007 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M7 17l5 1l.75 -1.5"/><path d="M18 21v-4l-4 -3l1 -6"/><path d="M10 12v-3l5 -1l3 3l3 1"/><path d="M10 5h-4"/><path d="M6 10h-4"/>',
  alpinism: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612"/><path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"/>',
  skiing: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17.5l-5 -4.5v-6l5 4"/><path d="M7 17.5l5 -4.5"/><path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657"/><path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657"/><path d="M7 11l5 -4"/><path d="M10.007 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>',
  snowboard: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M7 19l4 -2.5l-.5 -1.5"/><path d="M16 21l-1 -6l-4.5 -3l3.5 -6"/><path d="M7 9l1.5 -3h5.5l2 4l3 1"/><path d="M3 17c.399 1.154 .899 1.805 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927c1.333 .325 2.333 0 3 -.976"/>',
  watersports: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.414 6.414a2 2 0 0 0 0 -2.828l-1.414 -1.414l-2.828 2.828l1.414 1.414a2 2 0 0 0 2.828 0"/><path d="M17.586 17.586a2 2 0 0 0 0 2.828l1.414 1.414l2.828 -2.828l-1.414 -1.414a2 2 0 0 0 -2.828 0"/><path d="M6.5 6.5l11 11"/><path d="M22 2.5c-9.983 2.601 -17.627 7.952 -20 19.5c9.983 -2.601 17.627 -7.952 20 -19.5"/><path d="M6.5 12.5l5 5"/><path d="M12.5 6.5l5 5"/>',
  diving: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1"/><path d="M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"/>',
  skate: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.5 15h3.5l.75 -1.5"/><path d="M14 19v-5l-2.5 -3l2.5 -4"/><path d="M8 8l3 -1h4l1 3h3"/><path d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1"/><path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1"/><path d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1"/><path d="M14.007 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>',
  longboard: '<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 15c2 -4.97 7.356 -11 9 -11c4.25 0 -5.5 11.958 -3 13s5.65 -6.678 7.4 -5.902c1.75 .777 -1.05 7.589 -.3 8.63s3.15 -.897 3.9 -2.728" />'
}
</script>

<template>
  <div v-if="!store.selectedRootId" class="w-full">
    <div class="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <button
        v-for="cat in store.rootCategories"
        :key="cat.id"
        @click="store.selectRoot(cat.id); trackGoal('select_category')"
        :title="cat.name[store.locale]"
        class="aspect-square sm:aspect-auto flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 p-2 sm:p-4 rounded-xl border-2 border-[#d1d5db] dark:border-[#3a3d46] bg-white dark:bg-[#2b2e36] shadow-sm hover:border-[#eab308] dark:hover:border-[#fbbf24] hover:shadow-md transition text-center sm:text-left group"
      >
        <svg 
          class="w-8 h-8 sm:w-6 sm:h-6 text-[#eab308] dark:text-[#fbbf24] group-hover:scale-110 transition-transform" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          v-html="categoryIcons[cat.id]"
        ></svg>
        <span class="hidden sm:block text-base font-medium text-[#0f172a] dark:text-[#f1f5f9] group-hover:text-[#eab308] dark:group-hover:text-[#fbbf24]">
          {{ cat.name[store.locale] }}
        </span>
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