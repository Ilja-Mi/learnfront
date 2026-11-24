import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Important from './pages/Important.vue';
import Modals from './pages/Modals.vue';
import Buttons from './pages/Buttons.vue';
import Messages from './pages/Messages.vue';

import ChuckNorris from './pages/ChuckNorris.vue';

const routes = [
    { path: '/', component: ToDo, name: 'Ülesanded' },
    { path: '/important', component: Important, name: 'Olulised' },
    { path: '/modals', component: Modals, name: 'Modaalaknad' },
    { path: '/buttons', component: Buttons, name: 'Nupud' },
    { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
    { path: '/messages', component: Messages, name: 'Teated' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');