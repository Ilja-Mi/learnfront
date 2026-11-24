<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        validator: value => [
            'white', 'black', 'light', 'dark', 'primary', 'link', 'info',
            'success', 'warning', 'danger', 'text', 'ghost',
        ].includes(value),
    },
    size: {
        type: String,
        validator: value => ['small', 'normal', 'medium', 'large'].includes(value),
    },
    rounded: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    fullwidth: Boolean,
    loading: Boolean,
    disabled: Boolean,
    href: String,
});

const unavailable = computed(() => props.disabled || props.loading);
</script>

<template>
    <component
        :is="href && !unavailable ? 'a' : 'button'"
        class="button"
        :class="[
            color && 'is-' + color,
            size && 'is-' + size,
            {
                'is-rounded': rounded,
                'is-outlined': outlined,
                'is-inverted': inverted,
                'is-fullwidth': fullwidth,
                'is-loading': loading,
            },
        ]"
        :href="unavailable ? undefined : href"
        :type="href && !unavailable ? undefined : 'button'"
        :disabled="unavailable || undefined"
        :aria-busy="loading || undefined"
    >
        <slot />
    </component>
</template>
