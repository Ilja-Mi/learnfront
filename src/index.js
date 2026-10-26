import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Important from './pages/Important.vue';
import Modals from './pages/Modals.vue';

const routes = [
    { path: '/', component: ToDo, name: 'Ülesanded' },
    { path: '/important', component: Important, name: 'Olulised' },
    { path: '/modals', component: Modals, name: 'Modaalaknad' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');