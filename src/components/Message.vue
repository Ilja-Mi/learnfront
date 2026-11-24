<script setup>
defineProps({
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
    <article class="message" :class="[color && 'is-' + color, size && 'is-' + size]">
        <div v-if="$slots.header" class="message-header">
            <slot name="header" />
        </div>
        <div class="message-body">
            <slot />
        </div>
    </article>
</template>
