<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/app'
import { trackGoal } from '../utils/analytics'

const store = useAppStore()
const copied = ref(false)

async function copyEmail() {
  await navigator.clipboard.writeText('1984clients@gmail.com')
  copied.value = true
  trackGoal('about_copy_email')
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="w-full max-w-3xl mx-auto py-8 px-4">
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-[#f1f5f9] leading-tight">
        {{ store.t.about_title }}
      </h1>
      <div class="flex flex-col gap-4 text-base text-[#334155] dark:text-[#cbd5e1] leading-relaxed">
        <p>{{ store.t.about_p1 }}</p>
        <p>{{ store.t.about_p2 }}</p>
        <p>{{ store.t.about_p3 }}</p>
        <p v-html="store.t.about_p4"></p>
        <p>{{ store.t.about_p5 }}</p>
        <p v-html="store.t.about_p6"></p>
        <p v-html="store.t.about_p7"></p>
        <p class="inline">
          {{ store.t.about_p8 }}
          <button
            @click="copyEmail"
            class="inline-flex items-center text-[#eab308] dark:text-[#fbbf24] hover:underline font-medium relative align-baseline"
          >
            {{ store.t.about_email }}
            <Transition name="toast">
              <span v-if="copied" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#0f172a] dark:bg-[#f1f5f9] text-[#f1f5f9] dark:text-[#0f172a] text-xs font-medium whitespace-nowrap shadow-lg">
                {{ store.t.copied_text }}
              </span>
            </Transition>
          </button>
          {{ store.t.about_p9 }}
        </p>
      </div>
      <button
        @click="store.resetSelection"
        class="mt-4 self-start px-5 py-2.5 rounded-lg bg-[#eab308] dark:bg-[#fbbf24] text-[#0f172a] dark:text-[#22242a] font-semibold text-sm hover:bg-[#ca8a04] dark:hover:bg-[#f59e0b] transition shadow-sm"
      >
        {{ store.t.back }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.toast-enter-active { transition: all 0.2s ease-out; }
.toast-leave-active { transition: all 0.3s ease-in; }
.toast-enter-from { opacity: 0; transform: translate(-50%, 8px); }
.toast-leave-to { opacity: 0; transform: translate(-50%, -4px); }
</style>