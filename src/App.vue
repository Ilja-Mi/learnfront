<script setup>
import { ref } from 'vue';

let modal1Open = ref(false);

</script>

<template>
  <div class="container content mt-3">
    <button class="button is-primary" @click="modal1Open = true">Open Modal 1</button>
    <Modal :active="modal1Open" />
</template>

<style></style>