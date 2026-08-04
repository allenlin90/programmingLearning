import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/coach-detail.vue';
import CoachesList from './pages/coaches/coaches-list.vue';
import CoachRegistration from './pages/coaches/coach-registration.vue';
import ContactCoach from './pages/requests/contact-coach.vue';
import RequestsReceived from './pages/requests/requests-received.vue';
import NotFound from './pages/not-found.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
