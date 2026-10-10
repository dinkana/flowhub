<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from './stores/app'
import Header from './components/Header.vue'
import SponsorBlock from './components/SponsorBlock.vue'
import CategorySelector from './components/CategorySelector.vue'
import ResourceExplorer from './components/ResourceExplorer.vue'
import Footer from './components/Footer.vue'

const store = useAppStore()

onMounted(() => {
  store.init()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    <Header />
    
    <main class="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-8">
      <SponsorBlock />
      <CategorySelector />
      <ResourceExplorer />
      <Footer />
    </main>
  </div>
</template>