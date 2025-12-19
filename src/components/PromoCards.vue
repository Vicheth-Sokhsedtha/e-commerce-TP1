<template>
  <div class="promo-card" :style="{ backgroundColor: backgroundColor }">
    <div class="promo-text">
      <h3>{{ title }}</h3>
      <ButtonCom
        :label="buttonLabel"
        :color="buttonColor"
        @shop-click="handleShopClick"
      />
    </div>
    <img :src="image" alt="Promotion image" />
  </div>
</template>

<script setup lang="ts">
import ButtonCom from './ButtonCom.vue'

// Define props FIRST
const props = defineProps<{
  image: string
  title: string
  backgroundColor?: string
  buttonLabel: string
  buttonColor: string
}>()

// Then define methods that use props
const handleShopClick = () => {
  alert(`You clicked: ${props.title}`) // Use props.title instead of just title
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