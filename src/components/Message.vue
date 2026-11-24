<script setup>
import { ref } from 'vue';

const visible = ref(true);
defineProps({
    title: String,
    closable: Boolean,
    color: {
        type: String,
        validator: value => [
            'white', 'black', 'light', 'dark', 'primary', 'link',
            'info', 'success', 'warning', 'danger',
        ].includes(value),
    },
    size: {
        type: String,
        validator: value => ['small', 'medium', 'large'].includes(value),
    },
});
</script>

<template>
    <article v-if="visible" class="message" :class="[color && 'is-' + color, size && 'is-' + size]">
        <div v-if="$slots.header || title || closable" class="message-header">
            <slot name="header"><p v-if="title">{{ title }}</p></slot>
            <button v-if="closable" type="button" class="delete" aria-label="Sulge teade" @click="visible = false"></button>
        </div>
        <div class="message-body">
            <slot />
        </div>
    </article>
</template>
