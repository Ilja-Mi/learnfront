<script setup>
defineProps(['items', 'title']);

const importanceClasses = {
    3: 'has-text-danger',
    2: 'has-text-warning',
    1: 'has-text-success',
};
const importanceLabels = { 3: 'Kõrge', 2: 'Keskmine', 1: 'Madal' };
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id" :class="importanceClasses[item.importance]">
            {{ item.text }} — {{ importanceLabels[item.importance] }}
            <input type="checkbox" v-model="item.isDone" :aria-label="`Märgi ${item.text} tehtuks`">
        </li>
    </ul>

</template>