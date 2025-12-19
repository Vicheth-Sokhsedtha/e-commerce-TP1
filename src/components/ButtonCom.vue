<!-- ButtonCom.vue -->
<template>
  <button 
    class="button" 
    :style="{ backgroundColor: color }"
    @click="$emit('shop-click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  color?: string
}>()

defineEmits<{
  'shop-click': []
}>()
</script>

<style scoped>
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.button:hover {
  opacity: 0.9;
}
</style>