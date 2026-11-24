<script setup>
import { ref } from 'vue';

const joke = ref('');
const error = ref('');

try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    if (typeof data.value !== 'string' || !data.value.trim()) throw new Error('Missing joke');
    joke.value = data.value;
} catch {
    error.value = 'Nalja laadimine ebaõnnestus. Proovi hiljem uuesti.';
}
</script>

<template>
    <section class="container content mt-3">
        <h1>Chuck Norris</h1>
        <p v-if="error" role="alert">{{ error }}</p>
        <p v-else>{{ joke }}</p>
    </section>
</template>
