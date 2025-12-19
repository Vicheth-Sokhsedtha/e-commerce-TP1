import { defineStore } from 'pinia'
import axios from 'axios'

export interface Group {
  id: number
  name: string
}

export interface Promotion {
  id: number
  title: string
  discount: number
}

export interface Category {
  id: number
  name: string
  groupId: number
}

export interface Product {
  id: number
  name: string
  price: number
  categoryId: number
  promotionId?: number
  image?: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [] as Group[],
    promotions: [] as Promotion[],
    categories: [] as Category[],
    products: [] as Product[]
  }),

  actions: {
    async loadGroups() {
      const res = await axios.get<Group[]>('http://localhost:3000/api/groups')
      this.groups = res.data
    },

    async loadPromotions() {
      const res = await axios.get<Promotion[]>('http://localhost:3000/api/promotions')
      this.promotions = res.data
    },

    async loadCategories() {
      const res = await axios.get<Category[]>('http://localhost:3000/api/categories')
      this.categories = res.data
    },

    async loadProducts() {
      const res = await axios.get<Product[]>('http://localhost:3000/api/products')
      this.products = res.data
    },

    // Load all data in parallel
    async loadAll() {
      await Promise.all([
        this.loadGroups(),
        this.loadPromotions(),
        this.loadCategories(),
        this.loadProducts()
      ])
    }
  }
})

export default useProductStore
