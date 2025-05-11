<template>
    <div id="app">

        <!-- Topbar Sosial Media -->
        <div class="topbar">
  <div class="social-icons">
    <span class="follow-text">Follow Social Media:</span>
    <a href="#" target="_blank">
      <i class="fab fa-facebook-f"></i>
      <span>Facebook</span>
    </a>
    <a href="#" target="_blank">
      <i class="fab fa-instagram"></i>
      <span>Instagram</span>
    </a>
    <a href="#" target="_blank">
      <i class="fab fa-twitter"></i>
      <span>Twitter</span>
    </a>
  </div>
</div>


      <header class="navbar">
        <div class="navbar-content">
        <div class="logo">Rental</div>
  
        <button class="hamburger" @click="toggleMenu">
          ☰
        </button>
  
        <!-- Hidden nav links for larger screens -->
        <nav class="desktop-only">
          <router-link to="/">{{ $t('home') }}</router-link>
          <router-link to="/about">{{ $t('about') }}</router-link>
          <router-link to="/armada">{{ $t('armada') }}</router-link>
          <router-link to="/testimoni"> {{ $t('testimoni') }}</router-link>
          <router-link to="/contact">{{ $t('kontak') }}</router-link>
        </nav>
  
        <!-- Language selection with world icon (Font Awesome) -->
        <!-- Language selector for DESKTOP only -->
        <div class="language-selector desktop-only" @click="toggleDropdown">
          <i class="fas fa-globe"></i>
          <span class="lang-code">{{ currentLocale.toUpperCase() }}</span>
          <i class="fas fa-chevron-down arrow-icon"></i>
  
          <div v-if="isDropdownOpen" class="dropdown">
            <button @click="changeLanguage('id')">Indonesia</button>
            <button @click="changeLanguage('en')">English</button>
          </div>
        </div>
        </div>
        <!-- Sidebar menu for mobile -->
        <div class="sidebar" :class="{ open: isMenuOpen }">
          <button class="close-btn" @click="toggleMenu">X</button>
          <router-link to="/" @click="toggleMenu">{{ $t('home') }}</router-link>
          <router-link to="/about" @click="toggleMenu">{{ $t('about') }}</router-link>
          <router-link to="/armada" @click="toggleMenu">{{ $t('armada') }}</router-link>
          <router-link to="/testimoni" @click="toggleMenu">{{ $t('testimoni') }}</router-link>
          <router-link to="/contact" @click="toggleMenu">{{ $t('kontak')}}</router-link>
  
          <!-- Language selection for MOBILE inside sidebar -->
          <div class="language-selector" @click="toggleDropdown">
          <i class="fas fa-globe"></i>
          <span class="lang-code">{{ currentLocale.toUpperCase() }}</span>
          <i class="fas fa-chevron-down arrow-icon"></i>
  
          <div v-if="isDropdownOpen" class="dropdown">
            <button @click="changeLanguage('id')">Indonesia</button>
            <button @click="changeLanguage('en')">English</button>
          </div>
        </div>
        </div>
      </header>
  
      <router-view />
    </div>
  </template>
  
  <script>
  import '../style/navbar.css'
  
  export default {
    name: 'NavbarPage',
    data() {
      return {
        isMenuOpen: false,
        isDropdownOpen: false,
        currentLocale: 'id',
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
        if (!this.isMenuOpen) this.isDropdownOpen = false
      },
      closeMenu() {
        this.isMenuOpen = false
        this.isDropdownOpen = false
      },
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen
      },
      changeLanguage(language) {
        this.currentLocale = language
        this.$i18n.locale = language
        localStorage.setItem('lang', language)
        this.toggleDropdown()
        window.location.reload()
      },
    },
    mounted() {
      const savedLang = localStorage.getItem('lang')
      if (savedLang) {
        this.currentLocale = savedLang
        this.$i18n.locale = savedLang
      }
  
      setTimeout(() => {
        document.querySelector('.navbar').classList.add('visible')
      }, 100)
    },
  }
  </script>
  