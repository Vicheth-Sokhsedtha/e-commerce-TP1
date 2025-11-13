<template>
  <div class="home-page">
    <h2 class="section-title">Categories</h2>
    <CategoryList :categories="categories" />

    <h2 class="section-title">Promotions</h2>
    <div class="promo-list">
      <PromoCards
        v-for="(promo, index) in promotions"
        :key="index"
        :promotion="promo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CategoryList from './CategoryList.vue'
import PromoCards from './PromoCards.vue'

export default {
  name: 'HomePage',
  components: { CategoryList, PromoCards },
  data() {
    return {
      categories: [
        { image: "/images/cake.png", name: "Cake & Milk", count: 14, bg: "#F2FCE4" },
        { image: "/images/peach.png", name: "Peach", count: 17, bg: "#FFFCEB" },
        { image: "/images/kiwi.png", name: "Organic Kiwi", count: 21, bg: "#ECFFEC" },
        { image: "/images/apple.png", name: "Red Apple", count: 68, bg: "#FEEFEA" },
        { image: "/images/snack.png", name: "Snack", count: 34, bg: "#FFF3EB" },
        { image: "/images/plum.png", name: "Block Plum", count: 25, bg: "#FFF3FF" },
        { image: "/images/vegetables.png", name: "Vegetables", count: 65, bg: "#F2FCE4" },
        { image: "/images/headphone.png", name: "Headphone", count: 33, bg: "#FFFCEB" },
        { image: "/images/cake2.png", name: "Cake & Milk", count: 54, bg: "#F2FCE4" },
        { image: "/images/orange.png", name: "Orange", count: 63, bg: "#FFF3FF" },
      ],

      promotions: [
        {
          title: 'Everyday Fresh & Clean with Our Products',
          image: '/images/onion.png',
          buttonLabel: 'Shop Now →',
          buttonColor: '#2ecc71',
          backgroundColor: '#F3F9EA',
        },
        {
          title: 'Make your Breakfast Healthy and Easy',
          image: '/images/milk.png',
          buttonLabel: 'Shop Now →',
          buttonColor: '#2ecc71',
          backgroundColor: '#EAF4FF',
        },
        {
          title: 'Super Sale on Fresh Items',
          image: '/images/vegetables.png',
          buttonLabel: 'Shop Now →',
          buttonColor: '#FDC040',
          backgroundColor: '#FFF5EB',
        },
      ],
    }
  },
}
</script>

<style scoped>
.home-page {
  padding: 40px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.promo-list {
  display: flex;             /* horizontal row */
  flex-wrap: nowrap;         /* no wrapping, single line */
  overflow-x: auto;          /* scroll if overflow */
  gap: 20px;                 /* spacing between cards */
  width: 100%;               /* full width */
  padding-bottom: 10px;
  scroll-behavior: smooth;   /* smooth scrolling */
}
</style>
