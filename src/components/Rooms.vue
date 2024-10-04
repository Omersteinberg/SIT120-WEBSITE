<template>
  <div :class="['rooms-page', isDarkMode ? 'dark' : '']">
    <!-- Bootstrap Carousel -->
      <div id="carouselExampleIndicators" class="carousel slide hero-section" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="slides[0].image" class="d-block w-100" :alt="slides[0].alt">
      </div>
      <div class="carousel-item">
        <img :src="slides[1].image" class="d-block w-100" :alt="slides[1].alt">
      </div>
      <div class="carousel-item">
        <img :src="slides[2].image" class="d-block w-100" :alt="slides[2].alt">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    <!-- Hero Text Content -->
    <div class="hero-text">
      <h1>Welcome to Our Rooms & Suites</h1>
      <p>Indulge in unparalleled luxury and comfort with our elegant accommodations.</p>
    </div>
    </div>


    <!-- Rooms Section -->
    <div class="rooms-container hidden">
      <div class="room-card" v-for="room in rooms" :key="room.id">
        <div class="room-content">
          <h2>{{ room.name }}</h2>
          <p>{{ room.description }}</p>
          <div class="tings">
            <span class="room-icons" v-for="(feature, index) in room.features" :key="index">
              <img :src="feature.icon" :alt="feature.name" /> {{ feature.text }}
            </span>
          </div>
          <button @click="bookRoom(room.id)">Book</button>
          <div class="discover">
            <a href="#">View Room Details</a>
          </div>
        </div>
        <div class="room-image">
          <img :src="room.image" :alt="room.name" />
        </div>
      </div>
    </div>
    <!-- Dark Mode Toggle -->
    <button @click="toggleDarkMode" :class="['dark-mode-toggle', isDarkMode ? 'dark-mode-button' : '']">
        {{ darkModeButtonText }}
    </button>
  </div>  
</template>

<script>
import luxuryRoom from '../assets/images/luxury-3115234_1920.jpg';
import elegantSuite from '../assets/images/slider.jpg';
import oceanfrontSuite from '../assets/images/slides.jpg';
import {useThemeStore} from '/src/stores/themeStore.js';
import { computed } from 'vue';

export default {
  setup() {
    const themeStore = useThemeStore();
    const isDarkMode = computed(() => themeStore.isDarkMode);
    const toggleDarkMode = () => themeStore.toggleDarkMode();
    
    // Update the button text based on the mode
    const darkModeButtonText = computed(() => (isDarkMode.value ? 'Toggle Light Mode' : 'Toggle Dark Mode'));

    return {
      isDarkMode,
      toggleDarkMode,
      darkModeButtonText,
    };
  },
  data() {
    return {
      slides: [
        { id: 1, image: luxuryRoom, alt: 'Luxury Room View' },
        { id: 2, image: elegantSuite, alt: 'Elegant Suite' },
        { id: 3, image: oceanfrontSuite, alt: 'Oceanfront Suite' }
      ],
      rooms: [
        {
          id: 1,
          name: 'Next King Room',
          description:
            'A sophisticated and comfortable sanctuary. Our spacious Next Level rooms feature king-sized beds, and a commanding city outlook, and a host of thoughtful amenities.',
          image: '/src/assets/images/room1.jpg',
          features: [
            { icon: '/src/assets/images/maximize.png', text: '50m²', name: 'Size' },
            { icon: '/src/assets/images/bathroom.png', text: '1 Bathroom', name: 'Bathroom' },
            { icon: '/src/assets/images/double-bed.png', text: '1 Bed', name: 'Bed' },
            { icon: '/src/assets/images/wifi.png', text: 'Free Wi-Fi', name: 'Wifi' },
            { icon: '/src/assets/images/view.png', text: 'City View', name: 'View' },
          ],
        },
        {
          id: 2,
          name: 'Oceanfront Suite',
          description:
            'Relax in style with breathtaking ocean views. This suite features luxurious furnishings, a balcony, and an unforgettable ambiance.',
          image: '/src/assets/images/room2.jpg',
          features: [
            { icon: '/src/assets/images/maximize.png', text: '53m²', name: 'Size' },
            { icon: '/src/assets/images/bathroom.png', text: '1 Bathroom', name: 'Bathroom' },
            { icon: '/src/assets/images/double-bed.png', text: '1 Bed', name: 'Bed' },
            { icon: '/src/assets/images/wifi.png', text: 'Free Wi-Fi', name: 'Wifi' },
            { icon: '/src/assets/images/view.png', text: 'Sea View', name: 'View' },
          ],
        },
        {
          id: 3,
          name: 'Deluxe Family Suite',
          description:
            'The perfect escape for families, with interconnected rooms, a comfortable living area, and close proximity to all our resort amenities.',
          image: '/src/assets/images/room3.jpg',
          features: [
            { icon: '/src/assets/images/maximize.png', text: '76m²', name: 'Size' },
            { icon: '/src/assets/images/bathroom.png', text: '2 Bathrooms', name: 'Bathroom' },
            { icon: '/src/assets/images/double-bed.png', text: '3 Beds', name: 'Bed' },
            { icon: '/src/assets/images/wifi.png', text: 'Free Wi-Fi', name: 'Wifi' },
            { icon: '/src/assets/images/view.png', text: 'Sea View', name: 'View' },
          ],
        },
      ],
    };
  },
  methods: {
    bookRoom(roomId) {
      alert(`Booking room with ID: ${roomId}`);
    }
  },
   mounted() {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.hidden');
    animateElements.forEach((el) => observer.observe(el));
  },
};
</script>

<style scoped>
.hero-section {
    position: relative;
    width: 100%;
    height: 80vh; /* Set the height to 90vh */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* Ensure the images take up the full height and width */
.carousel-inner img {
    width: 100%;
    height: 80vh;
    object-fit: cover; /* Ensures the image scales properly */
}

/* Keep the indicators visible on smaller screens */
.carousel-indicators {
    bottom: 10px; /* Adjust position to keep it visible */
    z-index: 2;
}

.carousel-indicators button {
    background-color: #ffffff; /* Ensure buttons are visible */
    height: 12px;
    width: 40px;
}

.carousel-indicators button:hover {
    background-color: orange; /* Ensure buttons are visible */
}

.carousel-indicators button.active {
    background-color: #ffffff; /* White color for active button */
}

@media (max-width: 576px) {
    .room-content h2 {
        font-size: 24px; /* Smaller font size for smaller screens */
    }

    .room-content p {
        font-size: 14px; /* Smaller text size for better readability */
    }

    .room-icons {
        font-size: 12px; /* Smaller icon text for smaller screens */
    }

    .rooms-container {
        padding: 20px; /* Less padding for smaller screens */
    }

    .hero-text h1 {
        font-size: 40px;
    }

    .hero-text p {
        font-size: 16px;
    }

    .discover {
        position: relative;
        bottom: 0;
        margin-bottom: 10px;
    }

}

.rooms-page.dark {
  background-color: #222;
  color: #fff;
}


.rooms-page.dark .room-card {
  background-color: #333; /* Dark background for cards in dark mode */
}

.rooms-page.dark .room-content,
.rooms-page.dark .room-icons{
  color: #fff;
}

.rooms-page.dark .discover a {
  color: #fff; /* White text for dark mode */
}

.rooms-page.dark .discover a:hover {
  color: #f3b07a; /* Keep hover effect same in dark mode */
}

.rooms-page.dark .room-content button {
  background-color: #fff;
  color: #000; /* Black text for button in dark mode */
  border-style: solid;
  border-color: black;
}

.rooms-page.dark .room-content button:hover {
  background-color: black;
  color: #fff;
  border-style: solid;
  border-color: white;
}

/* Example styling for the Dark Mode Toggle Button */
.dark-mode-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #f3b07a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2000;
}

.dark-mode-toggle:hover {
  background-color: #cc6f23;
}

/* Dark mode button style */
.dark-mode-button {
  background-color: #000; /* Black background for dark mode */
  color: white; /* Keep text white */
}

.dark-mode-button:hover {
  background-color: #333; /* Slightly lighter shade on hover */
}

</style>
