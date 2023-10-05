// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ResumePage from './components/ResumePage.vue';
import ContactForm from './components/ContactForm.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/resume', component: ResumePage },
  { path: '/contact', component: ContactForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
