<script setup>
import Message from '../components/Message.vue';
</script>

<template>
    <section class="container content mt-3">
        <h1>Teated</h1>
        <Message>Ülesandele saab määrata prioriteedi.</Message>
        <Message color="success" size="small">
            Ülesanne on märgitud tehtuks.
        </Message>
        <Message color="warning" size="large">
            <template #header><p>Meeldetuletus</p></template>
            Vaata üle <RouterLink to="/important">olulised ülesanded</RouterLink>.
        </Message>
    </section>
</template>
