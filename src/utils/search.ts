import { Index } from 'flexsearch'
import type { Resource } from '../types'

let index: any = null

export const initSearch = (resources: Resource[]) => {
  index = new Index({
    tokenize: 'forward',
    context: true,
    optimize: true,
    resolution: 9
  } as any)
  resources.forEach(r => {
    const text = `${r.name.ru} ${r.name.en} ${r.description.ru} ${r.description.en}`
    index.add(r.id, text)
  })
}

export const searchResources = (query: string): string[] => {
  if (!index || !query.trim()) return []
  const result = index.search(query)
  return Array.isArray(result) ? result as string[] : []
}