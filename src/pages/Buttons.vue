<script setup>
import { ref } from 'vue';
import Btn from '../components/Btn.vue';

const clicks = ref(0);
</script>

<template>
    <section class="container content mt-3">
        <h1>Nupud</h1>
        <div class="buttons">
            <Btn color="primary" @click="clicks++">Tavaline nupp</Btn>
            <Btn color="info" rounded outlined @click="clicks++">Ümar nupp</Btn>
            <Btn color="link" inverted @click="clicks++">Pööratud värvid</Btn>
            <Btn fullwidth @click="clicks++">Täislaiuses nupp</Btn>
            <Btn loading>Laadimine</Btn>
            <Btn disabled>Pole saadaval</Btn>
            <Btn color="primary" href="#/">Ava ülesanded</Btn>
            <Btn href="#/" disabled>Suletud link</Btn>
        </div>
        <p aria-live="polite">Vajutusi: {{ clicks }}</p>
    </section>
</template>
