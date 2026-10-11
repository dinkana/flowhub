export interface LocalizedString {
  ru: string
  en: string
}

export interface Category {
  id: string
  parentId: string | null
  name: LocalizedString
}

export interface Resource {
  id: string
  categoryId: string
  url: string
  region: 'global' | 'ru'
  type: 'map' | 'federation' | 'community' | 'media' | 'shop' | 'other'
  name: LocalizedString
  description: LocalizedString
  priority?: number
}

export interface Partner {
  id: string
  name: string
  logoUrl: string
  linkUrl: string
  active: boolean
}

export interface UIStrings {
  title: string
  search_placeholder: string
  suggest_btn: string
  suggest_resource: string
  fix_resource: string
  delete_resource: string
  partner_label: string
  choose_direction: string
  back: string
  all_disciplines: string
  all_types: string
  no_resources: string
  choose_category: string
  partnership: string
  page_prev: string
  page_next: string
  type_map: string
  type_federation: string
  type_community: string
  type_media: string
  type_shop: string
  type_other: string
  region_ru: string
  region_global: string
}

export type Locale = 'ru' | 'en'