import { Index } from 'flexsearch'
import type { Resource } from '../types'

let index: any = null

export const initSearch = (resources: Resource[]) => {
  index = new Index()
  resources.forEach(r => {
    const text = `${r.name.ru} ${r.name.en} ${r.description.ru} ${r.description.en}`
    index.add(r.id, text)
  })
}

export const searchResources = (query: string): string[] => {
  if (!index || !query.trim()) return []
  return index.search(query)
}