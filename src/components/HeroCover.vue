<script setup lang="ts">
import { ref } from 'vue'
const imgError = ref(false)
const coverUrl = `${import.meta.env.BASE_URL}cover.webp`
</script>

<template>
  <div class="w-full rounded-xl overflow-hidden border border-[#d1d5db] dark:border-[#3a3d46] shadow-sm bg-[#f1f5f9] dark:bg-[#2b2e36] flex items-center justify-center min-h-[120px] sm:min-h-[240px] relative">
    <img
      v-if="!imgError"
      :src="coverUrl"
      alt="FlowHub Cover"
      class="w-full h-full object-cover absolute inset-0"
      loading="eager"
      @error="imgError = true"
    />
    <div v-if="imgError" class="relative z-10 text-center p-4 pointer-events-none">
      <p class="text-sm font-medium text-[#64748b] dark:text-[#94a3b8]">
        Изображение не загружено<br />
        <span class="text-xs opacity-70">Проверь файл в <code class="bg-[#e2e8f0] dark:bg-[#1e293b] px-1 py-0.5 rounded text-[#0f172a] dark:text-[#f1f5f9]">public/cover.webp</code></span>
      </p>
    </div>
  </div>
</template>