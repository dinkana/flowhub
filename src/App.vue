<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from './stores/app'
import Header from './components/Header.vue'
import HeroCover from './components/HeroCover.vue'
import CategorySelector from './components/CategorySelector.vue'
import PartnerBlock from './components/PartnerBlock.vue'
import ResourceExplorer from './components/ResourceExplorer.vue'
import AboutPage from './components/AboutPage.vue'
import Footer from './components/Footer.vue'

const store = useAppStore()

onMounted(() => {
  store.init()
})
</script>
<template>
  <div class="min-h-screen bg-[#f8f9fa] dark:bg-[#22242a] text-[#0f172a] dark:text-[#f1f5f9] transition-colors">
    <Header />
    <main class="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-8">
      <template v-if="store.currentView === 'about'">
        <AboutPage />
      </template>
      <template v-else>
        <HeroCover />
        <CategorySelector />
        <PartnerBlock v-if="!store.selectedRootId" />
        <ResourceExplorer />
      </template>
      <Footer />
    </main>
  </div>
</template>