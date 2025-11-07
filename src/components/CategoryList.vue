<template>
  <div class="category-list">
    <div class="category-item bg-cake">
      <img src="/images/cake.png" alt="Cake & Milk" />
      <h4>Cake & Milk</h4>
      <p>14 items</p>
    </div>
    <div class="category-item bg-peach">
      <img src="/images/peach.png" alt="Peach" />
      <h4>Peach</h4>
      <p>17 items</p>
    </div>
    <div class="category-item bg-kiwi">
      <img src="/images/kiwi.png" alt="Organic Kiwi" />
      <h4>Organic Kiwi</h4>
      <p>21 items</p>
    </div>
    <div class="category-item bg-apple">
      <img src="/images/apple.png" alt="Red Apple" />
      <h4>Red Apple</h4>
      <p>68 items</p>
    </div>
    <div class="category-item bg-snack">
      <img src="/images/snack.png" alt="Snack" />
      <h4>Snack</h4>
      <p>34 items</p>
    </div>
    <div class="category-item bg-plum">
      <img src="/images/plum.png" alt="Black Plum" />
      <h4>Black Plum</h4>
      <p>25 items</p>
    </div>
    <div class="category-item bg-vegetable">
      <img src="/images/vegetable.png" alt="Vegetable" />
      <h4>Vegetable</h4>
      <p>45 items</p>
    </div>
    <div class="category-item bg-headphone">
      <img src="/images/headphone.png" alt="Headphone" />
      <h4>Headphone</h4>
      <p>32 items</p>
    </div>
    <div class="category-item bg-cake2">
      <img src="/images/cake2.png" alt="Cake & Milk" />
      <h4>Cake & Milk</h4>
      <p>54 items</p>
    </div>
    <div class="category-item bg-orange">
      <img src="/images/orange.png" alt="Orange" />
      <h4>Orange</h4>
      <p>63 items</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CategoryList",
};
</script>

<style scoped>
.category-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.category-item {
  width: 120px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s;
}

.category-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Background Colors */
.bg-cake { background-color: #F2FCE4; }
.bg-peach { background-color: #FFFCEB; }
.bg-kiwi { background-color: #ECFFEC; }
.bg-apple { background-color: #FEEFEA; }
.bg-snack { background-color: #FFF3EB; }
.bg-plum { background-color: #FFF3FF; }
.bg-vegetable { background-color: #F2FCE4; }
.bg-headphone { background-color: #FFFCEB; }
.bg-cake2 { background-color: #F2FCE4; }
.bg-orange { background-color: #FFF3FF; }

.category-item img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.category-item h4 {
  font-size: 0.9rem;
  margin-top: 8px;
}

.category-item p {
  font-size: 0.8rem;
  color: #777;
}
</style>
