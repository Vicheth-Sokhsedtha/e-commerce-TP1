<template>
  <div class="promo-card" :style="{ backgroundColor: promotion.color }">
    <div class="promo-text">
      <h3>{{ promotion.title }}</h3>
      <ButtonCom
        :label="promotion.buttonText"
        :color="promotion.buttonColor"
        @shop-click="handleShopClick"
      />
    </div>
    <img :src="getImageUrl(promotion.image)" alt="Promotion image" />
  </div>
</template>

<script setup lang="ts">
import ButtonCom from './ButtonCom.vue'

const props = defineProps<{
  promotion: {
    image: string
    title: string
    color?: string
    buttonText: string
    buttonColor: string
  }
}>()

const emit = defineEmits<{
  'shop-click': []
}>()

const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) return 'https://via.placeholder.com/300x200?text=No+Image'
  if (imagePath.startsWith('http')) return imagePath
  return `http://localhost:3000${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
}

const handleShopClick = () => {
  emit('shop-click')
}
</script>

<style scoped>
.promo-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 460px;
  padding: 32px 28px;
  border-radius: 15px;
  min-width: 360px;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.promo-card img {
  width: 180px;
  height: 180px;
  object-fit: contain;
}

.promo-text {
  max-width: 60%;
}

.promo-text h3 {
  font-size: 1.25rem;
  margin: 0 0 0.75rem 0;
}
</style>