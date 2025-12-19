<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="getImageUrl(product.image)" :alt="product.name" />
      <div v-if="product.promotionAsPercentage" class="discount-badge">
        -{{ product.promotionAsPercentage }}%
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-brand">{{ product.brand }}</p>
      
      <div class="price-section">
        <span class="current-price">${{ product.price }}</span>
        <span v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}</span>
      </div>
      
      <div class="product-meta">
        <span class="sold-count">Sold: {{ product.countSold }}</span>
        <span v-if="product.rating" class="rating">⭐ {{ product.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/productStore'

const props = defineProps<{
  product: Product
}>()

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
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  transition: box-shadow 0.3s ease;
  background: white;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 12px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #333;
}

.product-brand {
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.current-price {
  font-size: 18px;
  font-weight: bold;
  color: #2e7d32;
}

.old-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
}
</style>