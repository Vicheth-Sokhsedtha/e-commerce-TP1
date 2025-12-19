<template>
  <div class="home-page">
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
        @shop-click="handlePromoClick(promo)"
      />
    </section>

    <!-- Add other sections as needed -->
  </div>
</template>

<script lang="ts" setup>
import PromoCards from './PromoCards.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
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

const handlePromoClick = (promo: Promotion) => {
  // Navigate to product or handle click
  console.log('Promo clicked:', promo)
  // Example: router.push({ name: 'product', params: { productId: promo.id } })
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
  fetchPromotions()
})

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

<style scoped>
.home-page {
  padding: 20px;
}

.promo-list {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
}
</style>