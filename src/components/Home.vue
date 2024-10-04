<!-- src/views/HomePage.vue -->
<template>
  <div :class="['home-page', isDarkMode ? 'dark' : '']">
    <!-- Video Background -->
    <div class="video-background-container">
      <video autoplay muted loop class="video-background">
        <source src="/src/assets/videos/header_video1.mp4" type="video/mp4" />
      </video>

      <!-- Heading Overlay -->
      <div class="video-heading">
        <h1>Escape to Paradise</h1>
        <p>Discover serenity by the sea</p>
        <button @click="navigateToPage('rooms')" class="header-button">Start Your Journey</button>
      </div>
    </div>

    <!-- About Section -->
    <section class="about-section hidden">
      <div class="about-content">
        <div class="text-block">
          <h2>ABOUT US</h2>
          <p>
            Welcome to Serenity, your perfect escape to paradise. Nestled along the pristine shores, we offer a sanctuary
            where you can unwind, relax, and rejuvenate. Our boutique hotel is designed to blend luxury and comfort
            seamlessly, providing an unforgettable experience that will leave you feeling refreshed.
          </p>
        </div>
        <div class="about-image">
          <img src="/src/assets/images/palm.jpg" alt="Image" />
        </div>
      </div>
    </section>

    <!-- Featured Sections -->
    <section class="featured-sections hidden">
      <h2>FEATURED SECTIONS</h2>
      <div class="featured-items">
        <!-- Card 1 -->
        <div class="card" @click="navigateToPage('rooms')">
          <img src="/src/assets/images/rooms.jpg" alt="Rooms & Suites" />
          <div class="card-content">
            <h3>Rooms & Suites</h3>
            <p>Discover our luxurious rooms and suites designed for ultimate comfort and relaxation.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card" @click="navigateToPage('amenities')">
          <img src="/src/assets/images/beach.jpg" alt="Amenities" />
          <div class="card-content">
            <h3>Amenities</h3>
            <p>Explore our world-class amenities, from spa treatments to fine dining experiences.</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card" @click="navigateToPage('contact')">
          <img src="/src/assets/images/inquire.jpg" alt="Contact Us" />
          <div class="card-content">
            <h3>Inquire Now</h3>
            <p>Get in touch with us for any inquiries, reservations, or special requests.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <div class="body-news">
      <div class="newsletter-section hidden">
        <h3>NEWSLETTER</h3>
        <p>Subscribe to our newsletter to get the latest offers!</p>
        <div class="newsletter">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <button type="submit" class="newsletter-button">Submit</button>
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
import { useThemeStore } from '/src/stores/themeStore.js';
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
  methods: {
    navigateToPage(page) {
      this.$router.push({ name: page });
    },
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

.home-page.dark .body-news {
  background-color:#222;
}

.home-page.dark .newsletter input[type="email"] {
  background-color: #444; /* Dark background for input field */
  color: #fff; /* White text in input */
  border: 1px solid #555; /* Slightly lighter border */
}

.home-page.dark .newsletter-section {
  background-color: #333;
}

.home-page.dark .newsletter-section p {
  color:white;
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

.home-page.dark .about-section {
  background-color: #222; /* Dark background */
}

.home-page.dark .text-block h2, 
.home-page.dark .text-block p {
  color: #fff; /* White text */
}

.home-page.dark .about-image img {
  opacity: 0.8; /* Slight opacity to give a darker look to the image */
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
}

/* Dark Mode for Featured Sections */
.home-page.dark .featured-sections {
  background-color: #222; /* Dark background for featured section */
}

.home-page.dark .featured-sections h2{
 color: white;
}

.home-page.dark .featured-sections h2::after{
  background-color:white;
}

.home-page.dark .featured-items .card {
  background-color: #333; /* Dark background for cards */
  color: #fff; /* White text in cards */
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
}

.home-page.dark .featured-items .card-content h3, 
.home-page.dark .featured-items .card-content p {
  color: #fff; /* White text for card headings and content */
}

.home-page.dark .featured-items .card:hover {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.5); /* Slight white shadow for hover effect */
}
</style>
