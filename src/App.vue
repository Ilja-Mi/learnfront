<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

let modal1Open = ref(false);
let modal1Open = ref(false);

</script>

<template>
  <div class="container content mt-3">
    <button class="button is-primary" @click="modal1Open = true">Open Modal 1</button>
    <Modal :active="modal1Open" 
    @close="modal1Open = false" 
    url="https://picsum.photos/1280/960?r=1"> 
    <div class='box'>I´m in a box.</div></Modal>

    <button class="button is-success" @click="modal1Open = true">Open Modal 2</button>
    <ImgModal :active="modal1Open" @close="modal1Open = false" 
    url="https://picsum.photos/1280/960?r=2"/></Modal>
  </div>
</template>

<style></style>