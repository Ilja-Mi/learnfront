<script setup>
import RouterTabs from './components/RouterTabs.vue';


</script>

<template>
    <RouterTabs></RouterTabs>
    <RouterView v-slot="{ Component }">
        <Suspense :timeout="0">
            <component :is="Component" />
            <template #fallback><p role="status">Laadin…</p></template>
        </Suspense>
    </RouterView>
</template>

<style></style>