import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router'; // Import the router
import './assets/css/Footer.css';
import './assets/css/Home.css';
import './assets/css/ContactUs.css';
import './assets/css/navbarHome.css';
import './assets/css/RoomsSuites.css';
import './assets/css/Amenities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // You need this for JS components like Carousel

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Ensure the router is set up
app.mount('#app');