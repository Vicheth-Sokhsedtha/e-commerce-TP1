<template>
  <div class="menu-component">
    <div class="header-row">
      <h2 class="section-title">{{ title }}</h2>
      <div class="group-tabs">
        <!-- Default "All" tab -->
        <button
          class="group-tab"
          :class="{ active: selectedGroup === 'All' }"
          @click="selectGroup('All')"
        >
          All
        </button>

        <!-- Dynamic group tabs -->
        <button
          v-for="group in groups"
          :key="group.id"
          class="group-tab"
          :class="{ active: selectedGroup === group.name }"
          @click="selectGroup(group.name)"
        >
          {{ group.name }} <!-- Fixed: was {{ group }} -->
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/productStore';

// Props
defineProps<{ title: string }>();

// Emits
const emit = defineEmits<{
  (e: 'update:group', groupName: string): void;
}>();

// Store
const productStore = useProductStore();

// State
const selectedGroup = ref('All');

// Groups are reactive from store
const groups = computed(() => productStore.groups);

// Methods
const selectGroup = (groupName: string) => {
  selectedGroup.value = groupName;
  emit('update:group', groupName);
};
</script>

<style scoped>
.menu-component {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 24px;
  padding: 0 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.section-title {
  font-size: 25px;
  font-weight: 600;
  color: #252525;
  margin: 0;
}

.group-tabs {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 4px 0;
}

.group-tab {
  padding: 6px 12px;
  background: none;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Times New Roman', Times, serif;
  color: #555;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.group-tab:hover {
  color: #000000;
  background-color: #f0f0f0;
}

.group-tab.active {
  color: #000000;
  font-weight: bold;
  background-color: #e8e8e8;
}
</style>