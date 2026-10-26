<script setup>
defineProps(['active', 'url', 'content']);
defineEmits(['close']);
</script>
<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="Sulge" @click="$emit('close')"></button>
    </div>
</template>