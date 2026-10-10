import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { Category, Resource, Sponsor, Locale, UIStrings } from '../types'
import categoriesData from '../data/categories.json'
import resourcesData from '../data/resources.json'
import sponsorsData from '../data/sponsors.json'
import uiData from '../data/ui.json'
import { initSearch, searchResources } from '../utils/search'

export const useAppStore = defineStore('app', () => {
  const locale = ref<Locale>((localStorage.getItem('locale') as Locale) || 'ru')
  const dark = ref(localStorage.getItem('theme') === 'dark')
  const categories = ref<Category[]>(categoriesData as Category[])
  const resources = ref<Resource[]>(resourcesData as Resource[])
  const sponsors = ref<Sponsor[]>(sponsorsData as Sponsor[])
  const uiStrings = ref<Record<Locale, UIStrings>>(uiData as Record<Locale, UIStrings>)
  
  const searchQuery = ref('')
  const selectedRootId = ref<string | null>(null)
  const selectedSubId = ref<string | null>(null)
  const selectedType = ref<string | null>(null)
  const currentPage = ref(1)
  const itemsPerPage = 12

  const t = computed(() => uiStrings.value[locale.value])
  const rootCategories = computed(() => categories.value.filter(c => !c.parentId))
  const subCategories = computed(() => 
    selectedRootId.value ? categories.value.filter(c => c.parentId === selectedRootId.value) : []
  )

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
    document.documentElement.lang = newLocale
    document.documentElement.classList.remove('lang-ru', 'lang-en')
    document.documentElement.classList.add(`lang-${newLocale}`)
    initSearch(resources.value)
  }

  const toggleTheme = () => {
    dark.value = !dark.value
    localStorage.setItem('theme', dark.value ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark.value)
  }

  const selectRoot = (id: string) => {
    selectedRootId.value = id
    selectedSubId.value = null
    selectedType.value = null
  }

  const selectSub = (id: string | null) => {
    selectedSubId.value = id
    selectedType.value = null
  }

  const resetSelection = () => {
    selectedRootId.value = null
    selectedSubId.value = null
    selectedType.value = null
  }

  const filteredResources = computed(() => {
    let result = resources.value
    if (selectedSubId.value) {
      result = result.filter(r => r.categoryId === selectedSubId.value)
    } else if (selectedRootId.value) {
      const allowed = new Set([selectedRootId.value, ...subCategories.value.map(c => c.id)])
      result = result.filter(r => allowed.has(r.categoryId))
    }
    if (selectedType.value) {
      result = result.filter(r => r.type === selectedType.value)
    }
    if (searchQuery.value.trim()) {
      const ids = new Set(searchResources(searchQuery.value))
      result = result.filter(r => ids.has(r.id))
    }
    return result.sort((a, b) => (b.priority || 0) - (a.priority || 0))
  })

  const totalPages = computed(() => Math.max(1, Math.ceil(filteredResources.value.length / itemsPerPage)))
  const paginatedResources = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return filteredResources.value.slice(start, start + itemsPerPage)
  })

  watch([selectedRootId, selectedSubId, selectedType, searchQuery], () => {
    currentPage.value = 1
  })

  const init = () => {
    document.documentElement.lang = locale.value
    document.documentElement.classList.add(`lang-${locale.value}`)
    document.documentElement.classList.toggle('dark', dark.value)
    initSearch(resources.value)
  }

  return {
    locale, dark, categories, resources, sponsors, uiStrings,
    searchQuery, selectedRootId, selectedSubId, selectedType, currentPage, itemsPerPage,
    t, rootCategories, subCategories, filteredResources, totalPages, paginatedResources,
    setLocale, toggleTheme, selectRoot, selectSub, resetSelection, init
  }
})