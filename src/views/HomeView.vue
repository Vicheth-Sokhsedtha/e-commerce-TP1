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
          @click="goToCategory(cat.id)"
        />
      </div>
    </section>

    <!-- Promotions Section -->
    <section class="promo-list">
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
        @shop-click="goToProduct(promo)"
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
        @click="goToGroup(grp.name)"
      >
        <h3>{{ grp.name }}</h3>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="products">
      <productComponent
        v-for="prod in productStore.products"
        :key="prod.id"
        :product="prod"
        @click="goToProductDetail(prod.id)"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
// Import components
import productComponent from '@/components/productComponent.vue'
import PromoCards from '@/components/PromoCards.vue'
import CategoryList from '@/components/CategoryList.vue'
import menuComponent from '@/components/menuComponent.vue'

// Import product store
import { useProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const productStore = useProductStore()
const categories = ref<Category[]>([])
const promotions = ref<Promotion[]>([])

const API_BASE_URL = 'http://localhost:3000'

// Function definitions
const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) {
    return 'https://via.placeholder.com/300x200?text=No+Image'
  }
  if (imagePath.startsWith('http')) {
    return imagePath
  }
  return `${API_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
}

// Navigation methods
const goToCategory = (categoryId?: number) => {
  if (categoryId) {
    router.push({ name: 'category', params: { categoryId } })
  }
}

const goToProduct = (promo: Promotion) => {
  // You might want to link to a specific product or handle differently
  // For now, just navigate to home
  console.log('Promotion clicked:', promo)
  // If promotions have product IDs, you could navigate to that product:
  // if (promo.productId) {
  //   router.push({ name: 'product', params: { productId: promo.productId } })
  // }
}

const goToGroup = (groupName: string) => {
  // Could filter products by group or navigate to category
  console.log('Navigate to group:', groupName)
  // You could add logic to filter products by group or navigate to a category
}

const goToProductDetail = (productId: number) => {
  router.push({ name: 'product', params: { productId } })
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

// Define interfaces here to fix the TypeScript errors
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
  productId?: number // Optional: if promotions link to specific products
}
</script>

<style scoped>
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
  cursor: pointer;
}

.group-card:hover {
  background-color: #e0e0e0;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>