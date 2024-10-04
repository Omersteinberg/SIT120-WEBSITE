<template>
  <header :class="navbarClass"> <!-- Dynamically apply class for background color -->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" @click="navigateToPage('home')" style="cursor: pointer;">
        <img src="/src/assets/images/dove.png" alt="Dove icon" class="navbar-logo" />
        <p>Serenity</p>
      </div>

      <!-- Hamburger Menu Icon -->
      <div class="hamburger" @click="toggleMenu">
        &#9776;
      </div>

      <!-- Navigation Menu -->
      <div class="nav-menu" :class="{ 'is-open': isMenuOpen }">
        <ul class="nav-links">
          <li><a href="javascript:void(0)" @click="navigateToPage('rooms')">Rooms & Suites</a></li>
          <li><a href="javascript:void(0)" @click="navigateToPage('amenities')">Amenities</a></li>
          <li><a href="javascript:void(0)" @click="navigateToPage('contact')">Contact Us</a></li>
        </ul>
        <div class="actions">
          <div class= "search">
            <img src="/src/assets/images/search.png" alt="search icon" class="search-icon" />
          </div>  
          <div class="button_book">
            <button class="book-button" @click="navigateToPage('booking')">Book a Stay</button>
          </div>  
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
    };
  },
computed: {
    // Dynamically set the navbar class
    navbarClass() {
      if (this.$route.name === 'home') {
        return this.isScrolled ? 'scrolled-navbar' : 'home-navbar';
      } else {
        return 'default-navbar';
      }
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateToPage(page) {
      this.$router.push({ name: page });
      this.isMenuOpen = false; // Close the menu after navigation
    },
    onScroll(){
      this.isScrolled = window.scrollY > 600;
    },
  },
  mounted(){
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
</style>