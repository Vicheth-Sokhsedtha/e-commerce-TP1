<template>
  <div class="home">
    <CategoryList />
    <PromoCards />
  </div>
</template>

<script lang="ts">
import CategoryList from "./CategoryList.vue";
import PromoCards from "./PromoCards.vue";

export default {
  name: "HomePage",
  components: { CategoryList, PromoCards },
};
</script>

<style scoped>
.home {
  padding: 100px;
}
</style>
