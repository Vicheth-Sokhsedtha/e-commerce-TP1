<template>
  <div id="app">
    <!-- Featured Categories Section -->
    <section>
      <div class="featured">
        <menuComponent title="Featured Categories" />
      </div>
      <div class="category-list">
        <CategoryList
          v-for="(cat, index) in categories"
          :key="cat.id || index"
          :image="getImageUrl(cat.image)"
          :name="cat.name"
          :productCount="cat.productCount"
          :color="cat.color"
        />
      </div>
    </section>

    <!-- Promotions Section -->
    <<section class="promo-list">
      <PromoCards
        v-for="(promo, index) in promotions"
        :key="promo.id || index"
        :promotion="{
          image: getImageUrl(promo.image),
          title: promo.title,
          color: promo.color,
          buttonText: promo.buttonText,
          buttonColor: promo.buttonColor
        }"
        @shop-click="handlePromoClick(promo)"
      />
    </section>

    <!-- Popular Products Section -->
    <div class="featured">
      <menuComponent title="Popular Products" />
    </div>

    <!-- Product Groups -->
    <section class="groups" v-if="productStore.groups.length > 0">
      <div
        class="group-card"
        v-for="grp in productStore.groups"
        :key="grp.id"
      >
        <h3>{{ grp.name }}</h3>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="products">
      <ProductComponent
        v-for="prod in productStore.products"
        :key="prod.id"
        :product="prod"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
// Import components - using your actual file names
import productComponent from './components/productComponent.vue'
import PromoCards from './components/PromoCards.vue'
import CategoryList from './components/CategoryList.vue'
import menuComponent from './components/menuComponent.vue'

// Import product store
import { useProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductComponent from './components/productComponent.vue'

const productStore = useProductStore()
const categories = ref<Category[]>([])
const promotions = ref<Promotion[]>([])

const API_BASE_URL = 'http://localhost:3000'

const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) {
    return 'https://via.placeholder.com/300x200?text=No+Image'
  }
  if (imagePath.startsWith('http')) {
    return imagePath
  }
  return `${API_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
}
// Handler function
const handlePromoClick = (promo: Promotion) => {
  console.log('Promo clicked:', promo)

}

const fetchCategories = async () => {
  try {
    const response = await axios.get<Category[]>(`${API_BASE_URL}/api/categories`)
    categories.value = response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

const fetchPromotions = async () => {
  try {
    const response = await axios.get<Promotion[]>(`${API_BASE_URL}/api/promotions`)
    promotions.value = response.data
  } catch (error) {
    console.error('Error fetching promotions:', error)
  }
}

onMounted(() => {
  fetchCategories()
  fetchPromotions()
  productStore.loadAllData()
})

interface Category {
  id?: number
  name: string
  url?: string
  productCount: number
  color?: string
  image: string
}

interface Promotion {
  id?: number
  title: string
  color?: string
  image: string
  url?: string
  buttonText: string
  buttonColor: string
}
</script>

<style>
#app {
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

.category-list {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
}

.promo-list {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
}

.featured {
  margin-top: 20px;
  margin-bottom: 20px;
}

.groups {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.group-card {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>