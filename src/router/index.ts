import { createRouter, createWebHistory } from 'vue-router'

// Import views
import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: CategoryView,
      props: true
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: ProductDetailView,
      props: true
    }
  ]
})

export default router