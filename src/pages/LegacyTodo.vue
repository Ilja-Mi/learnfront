<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let i = 0;
let items = ref([
    {id:i++, text:'Piim', isDone: true},
    {id:i++, text:'Viin', isDone: true},
    {id:i++, text:'Sai', isDone: false},
    {id:i++, text:'Mac', isDone: false},
]);
let newItem = ref('');
function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id:i++, text: newItem.value.trim(), isDone: false});
        newItem.value = '';
    }
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let todoItems = computed(() => items.value.filter(item => !item.isDone));
</script>

<template>
    <div class="container mt-3">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        <ItemList :items="items" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="todoItems" title="Todo Items"></ItemList>
    </div>
</template>

<style>

</style>