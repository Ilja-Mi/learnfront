<script setup>
import { ref } from 'vue';

let modal1Open = ref(false);
</script>

<template>
  <div class="container content mt-3">
    <button class="button is-primary">Open Modal 1</button>

    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img
            src="https://bulma.io/assets/images/placeholders/1280x960.png"
            alt=""
          >
        </p>
      </div>

      <button
        class="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  </div>
</template>

<style></style>