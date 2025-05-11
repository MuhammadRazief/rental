<template>
  <div>
    <NavBar />
    <div class="about-banner">
      <div class="banner-content">
        <h1>Tentang Kami</h1>
        <h2>HOME - <span class="highlight">TENTANG KAMI</span></h2>
      </div>
    </div>

    <main class="about-page">
    
      <section class="hero">
  <div class="hero-text">
    <h2>Solusi Transportasi Andal dan Terpercaya</h2>
    <p>
      Kami hadir untuk memberikan kemudahan dalam kebutuhan transportasi Anda, mulai dari persewaan armada hingga layanan logistik antar kota.
    </p>
    <a href="https://wa.me/6281234567890" target="_blank" class="hero-btn">
      <i class="fab fa-whatsapp"></i> Hubungi Kami via WhatsApp
    </a>
  </div>
  <div class="hero-image">
    <img src="@/assets/mobil.jpg" alt="Tentang Kami" />
  </div>
</section>

    </main>
    <Footer />
  </div>
</template>
  
  <script>
  import '../style/about.css'
  import NavBar from '../components/navbar.vue'
  import Footer from '../components/footer.vue'
  
  export default {
    name: 'AboutPage',
    components: {
      NavBar,
      Footer
    },
  }
  </script>
  