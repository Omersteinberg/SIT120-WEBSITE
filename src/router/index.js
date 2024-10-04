import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Rooms from '../components/Rooms.vue';
import Amenities from '../components/Amenities.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/rooms', name: 'rooms', component: Rooms },
  { path: '/amenities', name: 'amenities', component: Amenities },
  { path: '/contact', name: 'contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
