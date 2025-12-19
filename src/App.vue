<!-- <template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script lang="ts">
import HomePage from "./components/HomePage.vue";
export default {
  components: { HomePage },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  background-color: #fff;
}
</style> -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from './stores/products'

const productStore = useProductStore()

onMounted(() => {
  productStore.loadAll();
})
</script>

<template>
  <router-view />
</template>
