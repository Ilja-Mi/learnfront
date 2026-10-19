import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Todo from './pages/Todo.vue';
import Modals from './pages/Modals.vue';

const routes = [
    { path: '/', component: Todo, name: 'Todo' },
    { path: '/modals', component: Modals, name: 'Modals' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');