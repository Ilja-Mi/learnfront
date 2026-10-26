<script setup>
import { ref } from 'vue';


import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';

let modal1Open = ref(false);
let modal2Open = ref(false);

</script>

<template>
    <div class="container content mt-3">
        <button class="button is-primary" @click="modal1Open = true">Ava modaalaken 1</button>
        <Modal 
            :active="modal1Open" 
            @close="modal1Open = false" 
            url="https://picsum.photos/1280/960?random=1"
            ><div class='box'>See on modaalakna sisu</div></Modal>

        <button class="button is-success" @click="modal2Open = true">Ava modaalaken 2</button>
        <ImgModal :active="modal2Open" @close="modal2Open = false" url="https://picsum.photos/1280/960"></ImgModal>
    </div>
</template>