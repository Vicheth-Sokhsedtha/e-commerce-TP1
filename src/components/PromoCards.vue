<template>
  <div class="promo-container">
    <div class="promo-card bg-green">
      <div class="promo-text">
        <h3>Everyday Fresh & Clean with Our Products</h3>
        <button>Shop Now →</button>
      </div>
      <img src="/images/onion.png" alt="Fresh products" />
    </div>

    <div class="promo-card bg-blue">
      <div class="promo-text">
        <h3>Make your Breakfast Healthy and Easy</h3>
        <button>Shop Now →</button>
      </div>
      <img src="/images/milk.png" alt="Breakfast" />
    </div>

    <div class="promo-card bg-orange">
      <div class="promo-text">
        <h3>The best Organic Products Online</h3>
        <button>Shop Now →</button>
      </div>
      <img src="/images/vegetables.png" alt="Organic"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PromoCards",
};
</script>

<style scoped>
.promo-container {
  display: flex;
  flex-wrap: nowrap; /* keep cards in one row */
  gap: 1rem;
  justify-content: flex-start;
  overflow-x: auto; /* allow horizontal scrolling on narrow screens */
  padding-bottom: 8px; /* space for scrollbar */
  -webkit-overflow-scrolling: touch;
}

.promo-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 460px; /* make each card wider so they are bigger */
  padding: 32px 28px; /* increase inner spacing */
  border-radius: 15px;
  min-width: 360px;
  color: #333;
}

.promo-card img {
  width: 180px;
  height: 180px;
  object-fit: contain;
}
.promo-card .promo-text {
  max-width: 60%;
}

.promo-card .promo-text h3 {
  font-size: 1.25rem;
  margin: 0 0 0.75rem 0;
}

.promo-text button {
  background-color: #00c16a;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.promo-text button:hover {
  background-color: #009f57;
}

/* Background colors */
.bg-green {
  background-color: #F3F9EA !important;
}

.bg-blue {
  background-color: #EAF4FF !important;
}

.bg-orange {
  background-color: #FFF5EB !important;
}

/* Add some depth to cards */
.promo-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
