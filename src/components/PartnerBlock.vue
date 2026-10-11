<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/app'
import { trackGoal } from '../utils/analytics'

const store = useAppStore()
const copied = ref(false)
const getLogoUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
const hasActivePartners = store.partners.some(p => p.active)

async function copyEmail() {
  await navigator.clipboard.writeText('1984clients@gmail.com')
  copied.value = true
  trackGoal('partner_copy_email')
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div v-if="!store.selectedRootId" class="w-full flex flex-col items-center gap-4 py-4">
    <p class="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] dark:text-[#64748b]">
      {{ store.t.partner_label }}
    </p>

    <div v-if="hasActivePartners" class="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
      <a
        v-for="partner in store.partners.filter(p => p.active)"
        :key="partner.id"
        :href="partner.linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click="trackGoal('partner_click')"
        class="flex items-center justify-center p-3 rounded-xl bg-white dark:bg-[#2b2e36] border border-[#d1d5db] dark:border-[#3a3d46] hover:border-[#eab308] dark:hover:border-[#fbbf24] transition group"
      >
        <img
          :src="getLogoUrl(partner.logoUrl)"
          :alt="partner.name"
          class="h-10 sm:h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </a>
    </div>

    <div v-else class="w-full max-w-2xl rounded-xl border-2 border-dashed border-[#d1d5db] dark:border-[#3a3d46] bg-[#f8f9fa] dark:bg-[#22242a] p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-3 relative">
      <div class="p-3 rounded-full bg-[#fef9c3] dark:bg-[#fbbf24]/10 text-[#eab308] dark:text-[#fbbf24]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <h3 class="text-lg font-bold text-[#0f172a] dark:text-[#f1f5f9]">
        {{ store.t.partner_empty_title }}
      </h3>
      <p class="text-sm text-[#64748b] dark:text-[#94a3b8] max-w-md leading-relaxed">
        {{ store.t.partner_empty_desc }}
      </p>
      <button
        @click="copyEmail"
        class="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#eab308] dark:bg-[#fbbf24] text-[#0f172a] dark:text-[#22242a] font-semibold text-sm hover:bg-[#ca8a04] dark:hover:bg-[#f59e0b] transition shadow-sm cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {{ store.t.partner_empty_cta }}
      </button>
      <Transition name="toast">
        <div v-if="copied" class="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-[#0f172a] dark:bg-[#f1f5f9] text-[#f1f5f9] dark:text-[#0f172a] text-sm font-medium shadow-lg whitespace-nowrap">
          {{ store.t.partner_copied }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.toast-enter-active { transition: all 0.2s ease-out; }
.toast-leave-active { transition: all 0.3s ease-in; }
.toast-enter-from { opacity: 0; transform: translate(-50%, 8px); }
.toast-leave-to { opacity: 0; transform: translate(-50%, -4px); }
</style>