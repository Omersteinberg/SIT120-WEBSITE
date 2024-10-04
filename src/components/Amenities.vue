<template>
  <div :class="['amenities-page', isDarkMode ? 'dark' : '']">
    <!-- Hero Section with Bootstrap Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide hero-section" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="slides[0].image" class="d-block w-100" :alt="slides[0].alt" />
        </div>
        <div class="carousel-item">
          <img :src="slides[1].image" class="d-block w-100" :alt="slides[1].alt" />
        </div>
        <div class="carousel-item">
          <img :src="slides[2].image" class="d-block w-100" :alt="slides[2].alt" />
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
        <h1>Amenities</h1>
        <p>Everything you need for a perfect stay!</p>
      </div>
    </div>

    <button @click="toggleDarkMode" :class="['dark-mode-toggle', isDarkMode ? 'dark-mode-button' : '']">
        {{ darkModeButtonText }}
    </button>

    <!-- Amenities Section -->
    <div class="amenities-container">
      <div class="amenity-card" v-for="amenity in amenities" :key="amenity.id">
        <div class="amenity-image">
          <img :src="amenity.image" :alt="amenity.name" />
        </div>
        <div class="amenity-content">
          <h2>{{ amenity.name }}</h2>
          <p>{{ amenity.description }}</p>
          <a href="#" class="amenity-link">Explore More &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useThemeStore } from '/src/stores/themeStore.js';
import { ref, computed } from 'vue';

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
        { id: 1, image: '/src/assets/images/pexels-askar-abayev-5638747.jpg', alt: 'Luxury Room View' },
        { id: 2, image: '/src/assets/images/pexels-rdne-6724402.jpg', alt: 'Elegant Suite' },
        { id: 3, image: '/src/assets/images/movie-theater-4213751_1920.jpg', alt: 'Oceanfront Suite' }
      ],
      amenities: [
        {
          id: 1,
          name: 'Spa and Wellbeing',
          description: 'Indulge in our luxurious spa treatments and wellness programs designed to rejuvenate your mind, body, and soul.',
          image: '/src/assets/images/pexels-rdne-6724402.jpg',
        },
        {
          id: 2,
          name: 'Drink & Dine',
          description: 'Experience exquisite dining and delightful drinks at our restaurants and bars, offering a variety of local and international cuisines.',
          image: '/src/assets/images/pexels-askar-abayev-5638747.jpg',
        },
        {
          id: 3,
          name: 'Entertainment',
          description: 'Enjoy a range of entertainment options, from live music and performances to exciting recreational activities.',
          image: '/src/assets/images/movie-theater-4213751_1920.jpg',
        },
      ],
    };
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

}

/* Dark mode styles */
.amenities-page.dark {
  background-color: #222;
  color: #fff;
}

.amenities-page.dark .amenity-card {
  background-color: #333;
  color: #fff;
  border-style: solid;
  border-color: white;
}

.amenities-page.dark h2 {
  color: white;
}

.amenities-page.dark p {
  color: #dfdfdf;
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
