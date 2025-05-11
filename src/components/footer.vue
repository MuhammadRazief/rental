<template>
<footer ref="footer" class="footer" :class="{ 'animate': isVisible }">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Kontak</h3>
          <p>Email: info@example.com</p>
          <p>Telepon: (021) 12345678</p>
        </div>
        <div class="footer-section">
          <h3>Halaman</h3>
          <ul class="footer-links">
         <li><router-link to="/">{{ $t('home') }}</router-link></li>
          <li><router-link to="/about">{{ $t('about') }}</router-link></li>
          <li><router-link to="/armada">{{ $t('armada') }}</router-link></li>
          <li><router-link to="/testimoni"> {{ $t('testimoni') }}</router-link></li>
          <li><router-link to="/contact">{{ $t('kontak') }}</router-link></li>
          </ul>
        </div>
            <div class="footer-section">
    <h3>Alamat</h3>
    <p>Jl. Raya Contoh No.123, Kota Vue, Indonesia</p>
    <div class="footer-map">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.377024255025!2d106.8166666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e9e5e5e7c3%3A0x7a884917155fc1fa!2sJakarta!5e0!3m2!1sen!2sid!4v1600000000000"
        width="100%"
        height="150"
        style="border:0; border-radius: 8px; margin-top: 1rem;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    </div>

        <div class="footer-section">
          <h3>Ikuti Kami</h3>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <div class="footer-bottom">
  <p>
    <span class="copyright">&copy; Copyright 2025 - </span>
    <span class="brand">Rental Mobil</span>
  </p>
</div>


  </template>
  
  <script>
  import '../style/footer.css'
  export default {
  name: 'AppFooter',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
      },
      {
        threshold: 0.1
      }
    );
    observer.observe(this.$refs.footer);
  }
}


  </script>
  
  <style scoped>
 
  </style>
  