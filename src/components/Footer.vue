<script setup lang="ts">
import { useAppStore } from '../stores/app'
import { trackGoal } from '../utils/analytics'
const store = useAppStore()
</script>
<template>
  <footer class="mt-12 pt-6 pb-8 border-t border-[#d1d5db] dark:border-[#3a3d46] text-center text-sm text-[#64748b] dark:text-[#94a3b8] flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <span class="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] dark:text-[#64748b]">Поддержать проект</span>
      <div class="flex flex-wrap justify-center gap-3 mt-4">
        <a href="https://boosty.to/dinkana" target="_blank" rel="noopener noreferrer" @click="trackGoal('donation_click')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2b2e36] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-[#eab308] hover:text-white dark:hover:bg-[#fbbf24] dark:hover:text-[#22242a] transition border border-[#d1d5db] dark:border-[#3a3d46]">Boosty</a>
        <a href="https://pay.cloudtips.ru/p/d60d022f" target="_blank" rel="noopener noreferrer" @click="trackGoal('donation_click')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2b2e36] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-[#eab308] hover:text-white dark:hover:bg-[#fbbf24] dark:hover:text-[#22242a] transition border border-[#d1d5db] dark:border-[#3a3d46]">СБП или карта РФ</a>
        <a href="https://link.trustwallet.com/send?asset=c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7&address=0x0e9418c9F4382D507BC19B466b590d79268873Ad" target="_blank" rel="noopener noreferrer" @click="trackGoal('donation_click')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2b2e36] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-[#eab308] hover:text-white dark:hover:bg-[#fbbf24] dark:hover:text-[#22242a] transition border border-[#d1d5db] dark:border-[#3a3d46]">USDT</a>
        <a href="https://link.trustwallet.com/send?asset=c0&address=bc1qg078v2ytmwvsjyxj0jp8x9rs2p4003c0jzpup0" target="_blank" rel="noopener noreferrer" @click="trackGoal('donation_click')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2b2e36] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-[#eab308] hover:text-white dark:hover:bg-[#fbbf24] dark:hover:text-[#22242a] transition border border-[#d1d5db] dark:border-[#3a3d46]">BTC</a>
        <a href="https://link.trustwallet.com/send?address=0x0e9418c9F4382D507BC19B466b590d79268873Ad&asset=c60" target="_blank" rel="noopener noreferrer" @click="trackGoal('donation_click')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2b2e36] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-[#eab308] hover:text-white dark:hover:bg-[#fbbf24] dark:hover:text-[#22242a] transition border border-[#d1d5db] dark:border-[#3a3d46]">ETH</a>
        <a href="https://link.trustwallet.com/send?address=87N9bYcMjUgia35xQawys6pLtW6g1C9ovW1cAiRb5CDq&asset=c501" target="_blank" rel="noopener noreferrer" @click="trackGoal('donation_click')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2b2e36] text-[#0f172a] dark:text-[#f1f5f9] hover:bg-[#eab308] hover:text-white dark:hover:bg-[#fbbf24] dark:hover:text-[#22242a] transition border border-[#d1d5db] dark:border-[#3a3d46]">SOL</a>
      </div>
    </div>
    <div class="flex flex-col gap-2 pt-4 border-t border-[#d1d5db] dark:border-[#3a3d46]">
      <div class="flex flex-wrap justify-center gap-3 text-sm">
        <a href="https://forms.gle/Yj7kjSDQbqXzb3o77" target="_blank" rel="noopener noreferrer" @click="trackGoal('suggest_resource')" class="text-[#eab308] dark:text-[#fbbf24] hover:underline font-medium">
          {{ store.t.suggest_resource }}
        </a>
        <span class="text-[#64748b] dark:text-[#94a3b8]">|</span>
        <a href="https://forms.gle/2wmX7qjCQzaSS69F7" target="_blank" rel="noopener noreferrer" @click="trackGoal('fix_resource')" class="text-[#eab308] dark:text-[#fbbf24] hover:underline font-medium">
          {{ store.t.fix_resource }}
        </a>
        <span class="text-[#64748b] dark:text-[#94a3b8]">|</span>
        <a href="https://forms.gle/Wv3TJNuyHpcRFdtP6" target="_blank" rel="noopener noreferrer" @click="trackGoal('delete_resource')" class="text-[#eab308] dark:text-[#fbbf24] hover:underline font-medium">
          {{ store.t.delete_resource }}
        </a>
      </div>
      <p>
        {{ store.t.partnership }}: <a href="mailto:1984clients@gmail.com" class="text-[#eab308] dark:text-[#fbbf24] hover:underline">1984clients@gmail.com</a>
      </p>
    </div>
  </footer>
</template>