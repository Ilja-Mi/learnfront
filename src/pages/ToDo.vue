<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items, addItem } from '../items.js';
let newItem = ref('');
let newImportance = ref(2);
function add() {
    if (newItem.value.trim() !== '') {
        addItem(newItem.value.trim(), newImportance.value);
        newItem.value = '';
    }
}

const sortedItems = computed(() => [...items.value].sort((a, b) => b.importance - a.importance));

let doneItems = computed(() => sortedItems.value.filter(item => item.isDone));
let todoItems = computed(() => sortedItems.value.filter(item => !item.isDone));
</script>

<template>
    <div class="container mt-3">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Uus ülesanne" aria-label="Uus ülesanne">
            </div>
            <div class="control">
                <div class="select">
                    <select v-model="newImportance" aria-label="Olulisus">
                        <option :value="3">Kõrge</option>
                        <option :value="2">Keskmine</option>
                        <option :value="1">Madal</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Lisa
                </button>
            </div>
        </div>
        <ItemList :items="sortedItems" title="Kõik ülesanded"></ItemList>
        <ItemList :items="doneItems" title="Tehtud ülesanded"></ItemList>
        <ItemList :items="todoItems" title="Tegemata ülesanded"></ItemList>
    </div>
</template>

<style>

</style>