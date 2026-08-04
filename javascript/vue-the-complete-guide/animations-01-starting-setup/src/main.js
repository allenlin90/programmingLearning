import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

import App from './app.vue';
import BaseModal from './components/base-modal.vue';
import AllUsers from './pages/all-users.vue';
import CourseGoals from './pages/course-goals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllUsers },
        { path: '/goals', component: CourseGoals },
    ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(function () {
    app.mount('#app');
});