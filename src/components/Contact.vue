<template>
    <div :class="['contact-page', isDarkMode ? 'dark' : '']">
      <!-- Left Side Content -->
      <div class="contact-content">
        <h1>Get In Touch</h1>
        <p>Let's Connect! We're just a message away.</p>

        <form class="form-container" @submit.prevent="validateForm">
          <!-- Name Input -->
          <div class="form-group">
            <label for="name">Name:</label>
            <input id="name" v-model="name" />
            <span id="nameError" class="form-text" :class="{ 'text-danger': nameError !== 'Valid', 'text-success': nameError === 'Valid' }">{{ nameError }}</span>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" v-model="email" />
            <span id="emailError" class="form-text" :class="{ 'text-danger': emailError !== 'Valid', 'text-success': emailError === 'Valid' }">{{ emailError }}</span>
          </div>

          <!-- Inquiry Type Radio Buttons -->
          <div class="form-group">
            <label>What are you inquiring about?</label>
            <div class="radioss">
              <label for="rooms">Rooms & Suites</label>
              <input type="radio" id="rooms" value="Rooms & Suites" v-model="inquiry" />
            </div>
            <div class="radioss">
              <label for="packages">Packages</label>
              <input type="radio" id="packages" value="Packages" v-model="inquiry" />
            </div>
            <div class="radioss">
              <label for="other">Other</label>
              <input type="radio" id="other" value="Other" v-model="inquiry" />
            </div>
            <span id="inquiryError" class="form-text" :class="{ 'text-danger': inquiryError !== 'Valid', 'text-success': inquiryError === 'Valid' }">{{ inquiryError }}</span>
          </div>

          <!-- Number of Guests Input -->
          <div class="form-group">
            <label for="guests">Number of Guests:</label>
            <input id="guests" type="number" v-model.number="guests" />
            <span id="guestsError" class="form-text" :class="{ 'text-danger': guestsError !== 'Valid', 'text-success': guestsError === 'Valid' }">{{ guestsError }}</span>
          </div>

          <!-- How Did You Hear About Us Dropdown -->
          <div class="form-group">
            <label for="howHeard">How did you hear about us?</label>
            <select id="howHeard" v-model="howHeard" class="form-control">
              <option value="">-- Select an option --</option>
              <option v-for="option in howHeardOptions" :key="option" :value="option">{{ option }}</option>
            </select>
            <span id="howHeardError" class="form-text" :class="{ 'text-danger': howHeardError !== 'Valid', 'text-success': howHeardError === 'Valid' }">{{ howHeardError }}</span>
          </div>

          <!-- Message Input -->
          <div class="form-group">
            <label for="message">Subject:</label>
            <textarea id="message" v-model="message" style="margin-bottom: 30px;"></textarea>
          </div>

          <!-- Terms & Conditions Checkbox -->
          <div class="form-group">
            <div class="checkbox-group">
              <input type="checkbox" v-model="termsAccepted" id="terms"/>
              <label for="terms">I have read and accept the terms and conditions</label>
            </div>
            <span class="form-text" style="margin-bottom:30px;" :class="{ 'text-danger': termsError !== 'Valid', 'text-success': termsError === 'Valid' }">{{ termsError }}</span>
          </div>

          <!-- Submit Button -->
          <div class="form-buttons">
            <button type="submit" class="submit-button">Submit Query</button>
          </div>

          <!-- Success Message -->
          <p v-if="formSubmitted" class="text-success">Form submitted successfully!</p>
        </form>

        <!-- Contact Information Section -->
        <div class="contact-info">
          <p><i class="fas fa-envelope"></i> Serenity@business.com</p>
          <p><i class="fas fa-phone"></i> +61 400 211 000</p>
          <p><i class="fas fa-map-marker-alt"></i> 123 Ocean Drive, Serenity Beach, Gold Coast</p>
        </div>
      </div>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" :class="['dark-mode-toggle', isDarkMode ? 'dark-mode-button' : '']">
        {{ darkModeButtonText }}
      </button>


      <!-- Right Side Image -->
      <div class="contact-image">
        <img src="../assets/images/pexels-quang-nguyen-vinh-222549-3355788.jpg" alt="Contact Us" />
      </div>
    </div> 
</template>

<script>

import {useThemeStore} from '/src/stores/themeStore.js';
import { ref, computed} from 'vue';

export default {
 setup() {
    const themeStore = useThemeStore();
    
    const isDarkMode = computed(() => themeStore.isDarkMode);
    const toggleDarkMode = () => themeStore.toggleDarkMode();

    const darkModeButtonText = computed(() => isDarkMode.value ? 'Toggle Light Mode' : 'Toggle Dark Mode');

    return {
      isDarkMode,
      toggleDarkMode,
      darkModeButtonText,
      name: ref(''),
      email: ref(''),
      inquiry: ref(''),
      guests: ref(null),
      howHeard: ref(''),
      message: ref(''),
      termsAccepted: ref(false),
      nameError: ref(''),
      emailError: ref(''),
      inquiryError: ref(''),
      guestsError: ref(''),
      howHeardError: ref(''),
      termsError: ref(''),
      formSubmitted: ref(false),
      howHeardOptions: ['Social Media', 'Friend/Family', 'Online Ad', 'Google Search', 'Other'],
    };
  },
  methods: {
    validateForm() {
      this.nameError = '';
      this.emailError = '';
      this.inquiryError = '';
      this.guestsError = '';
      this.howHeardError = '';
      this.termsError = '';
      let valid = true;

      if (this.name === '') {
        this.nameError = 'You did not enter your name';
        valid = false;
      } else {
        this.nameError = 'Valid';
      }

      if (this.email === '') {
        this.emailError = 'You did not enter your email';
        valid = false;
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
          this.emailError = 'Please enter a valid email';
          valid = false;
        } else {
          this.emailError = 'Valid';
        }
      }

      if (this.inquiry === '') {
        this.inquiryError = 'Please select an inquiry type';
        valid = false;
      } else {
        this.inquiryError = 'Valid';
      }

      if (this.guests === null || this.guests < 1) {
        this.guestsError = 'Please enter the number of guests';
        valid = false;
      } else {
        this.guestsError = 'Valid';
      }

      if (this.howHeard === '') {
        this.howHeardError = 'Please select how you heard about us';
        valid = false;
      } else {
        this.howHeardError = 'Valid';
      }

      if (!this.termsAccepted) {
        this.termsError = 'You must accept the terms and conditions';
        valid = false;
      } else {
        this.termsError = 'Valid';
      }

      if (valid) {
        this.formSubmitted = true;
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          message: this.message,
          inquiry: this.inquiry,
          guests: this.guests,
          howHeard: this.howHeard,
        });
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.inquiry = '';
      this.guests = null;
      this.howHeard = '';
      this.termsAccepted = false;
      this.nameError = '';
      this.emailError = '';
      this.inquiryError = '';
      this.guestsError = '';
      this.howHeardError = '';
      this.termsError = '';
      this.formSubmitted = false;
    },
  },
};
</script>

<style scoped>

.contact-page.dark .contact-content {
  background-color: #222; /* Dark background */
  color: #fff; /* Light text */
}

.contact-page.dark .form-container input,
.contact-page.dark .form-container textarea,
.contact-page.dark .form-container select {
  background-color: #444; /* Darker background for input fields */
  color: #fff; /* White text in input fields */
  border: 1px solid #fff; /* Light border */
}

.contact-page.dark label {
  color: #fff; /* Label text color in dark mode */
}

.contact-page.dark .form-buttons button {
  background-color: #444; /* Dark button background */
  color: #fff; /* Light button text */
  border-style: solid;
  border-width: 1px;
  border-color: white;
}

.contact-page.dark .form-buttons button:hover {
  background-color: #555; /* Darker button on hover */
}

.contact-page.dark .contact-info {
  color: white;
}

.contact-page.dark .contact-info i {
  color: white;

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