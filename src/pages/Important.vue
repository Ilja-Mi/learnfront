<script setup>
import { computed } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items } from '../items.js';

const importantItems = computed(() => items.value.filter(item => item.importance === 3));
</script>

<template>
    <div class="container mt-3">
        <ItemList :items="importantItems" title="Olulised ülesanded" />
    </div>
</template>
