<script setup>
defineProps(['active', 'url', 'content']);
</script>
<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background" @click="$emit('close') = false"></div>
    <div class="modal-content">
        <slot></slot>
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close') = false"></button>
  </div>
</template>