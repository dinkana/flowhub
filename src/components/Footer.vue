<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>

<template>
  <footer class="mt-12 pt-6 pb-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <span class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Поддержать проект</span>
      <div class="flex flex-wrap justify-center gap-3">
        <a href="https://boosty.to/dinkana" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">Boosty</a>
        <a href="https://pay.cloudtips.ru/p/d60d022f" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">СБП или карта РФ</a>
        <a href="https://link.trustwallet.com/send?asset=c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7&address=0x0e9418c9F4382D507BC19B466b590d79268873Ad" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">USDT</a>
        <a href="https://link.trustwallet.com/send?asset=c0&address=bc1qg078v2ytmwvsjyxj0jp8x9rs2p4003c0jzpup0" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">BTC</a>
        <a href="https://link.trustwallet.com/send?address=0x0e9418c9F4382D507BC19B466b590d79268873Ad&asset=c60" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">ETH</a>
        <a href="https://link.trustwallet.com/send?address=87N9bYcMjUgia35xQawys6pLtW6g1C9ovW1cAiRb5CDq&asset=c501" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">SOL</a>
      </div>
    </div>
    <div class="flex flex-col gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
      <a href="https://github.com/dinkana/flowhub/issues/new?template=suggest-resource.yml" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">
        {{ store.t.suggest_btn }}
      </a>
      <p>
        Спонсорство: <a href="mailto:sponsor@flowhub.app" class="text-blue-600 dark:text-blue-400 hover:underline">sponsor@flowhub.app</a>
      </p>
    </div>
  </footer>
</template>