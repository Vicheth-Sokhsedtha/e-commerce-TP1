 <template>
  <div id="app">
    <h2></h2>

    <div class="category-list">
      <CategoryCom
        v-for="(cat, index) in categories"
        :key="index"
        :image="cat.image"
        :title="cat.title"
        :items="cat.items"
      />
    </div>

    <h2></h2>

    <div class="Promo-list">
      <PromotionCom
        v-for="(promo, index) in promotions"
        :key="index"
        :title="promo.title"
        :image="promo.image"
        :buttonLabel="promo.buttonLabel"
        :buttonColor="promo.buttonColor"
        :backgroundColor="promo.backgroundColor"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CategoryCom from './components/categoryComponents.vue'
import PromotionCom from './components/promotionComponent.vue'

export default {
  name: 'App',
  components: { CategoryCom, PromotionCom },

  data() {
    return {
      categories: [
        {
          image: '/picture/cake&milk.png',
          title: 'Cake & Milk',
          items: 14,
        },
        { image: '/picture/peach.png', title: 'Peach', items: 17 },
        { image: '/picture/oganicKiwi.png', title: 'Organic Kiwi', items: 21 },
        { image: '/picture/redApple.png', title: 'Red Apple', items: 68 },
        { image: '/picture/snack.png', title: 'Snack', items: 34 },
        { image: '/picture/blackPlum.png', title: 'Block plum', items: 25 },
        { image: '/picture/vegetable.png', title: 'Vegetables', items: 65 },
        { image: '/picture/headphone.png', title: 'Headphone', items: 33 },
        { image: '/picture/Cake_milk.png', title: 'Cake & Milk', items: 54 },
        { image: '/picture/orange.png', title: 'Orange', items: 63 },
      ],

      promotions: [
        {
          title: 'Everyday Fresh & Clean with Our Products',
          image: 'public/picture/promotion1.png',
          buttonLabel: 'Shop Now ➜',
          buttonColor: '#2ecc71',
          backgroundColor: '#F0E8D5',
        },
        {
          title: 'Make your Breakfast Healthy and Easy',
          image: 'public/picture/promotion2.png',
          buttonLabel: 'Shop Now ➜',
          buttonColor: '#3498db',
          backgroundColor: '#F3E8E8',
        },
        {
          title: 'Super Sale on Fresh Items',
          image: 'public/picture/promotion3.png',
          buttonLabel: 'Shop Now ➜',
          buttonColor: '#FDC040',
          backgroundColor: '#E7EAF3',
        },
      ],
    }
  },
}
</script>

<style>
#app {
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

.category-list {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
}
.Promo-list {
  display: flex;

  gap: 15px;
  margin-top: 40px;
}
</style>
