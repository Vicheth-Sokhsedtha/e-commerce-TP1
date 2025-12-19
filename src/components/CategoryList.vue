<template>
  <div class="category-card" :style="{ backgroundColor: color }">
    <div class="category-image">
      <img :src="image" :alt="name" />
    </div>
    <div class="category-info">
      <h3 class="category-name">{{ name }}</h3>
      <p class="product-count">{{ productCount }} products</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
  productCount: number
  color?: string
}>()
</script>

<style scoped>
.category-card {
  width: 200px;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image {
  width: 120px;
  height: 120px;
  margin: 0 auto 15px;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.category-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
}

.product-count {
  font-size: 14px;
  color: #666;
  margin: 0;
}
</style>