<template>
  <div id="app">
    <Header :isHomePage="isHomePage" /> <!-- Header component with home page detection -->
    <router-view /> <!-- Displays the component based on the current route -->
    <Footer /> <!-- Footer component -->
  </div>
</template>

<script>
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    // Detect whether the current route is the home page
    isHomePage() {
      return this.$route.name === 'home'; // Adjust the route name as needed
    },
  },
};
</script>

<style>
/* Global styles can go here */
</style>