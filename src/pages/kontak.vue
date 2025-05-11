<template>
  <div class="kontak-page">
    <NavBar />

    <div class="contact-banner">
      <div class="banner-content">
        <h1>Kontak</h1>
        <h2>HOME - <span class="highlight">KONTAK</span></h2>
      </div>
    </div>
    

    <main class="main-content">
      <section class="contact-section">
        <h2>Informasi Kontak</h2>
        <div class="contact-info-card">
          <img src="@/assets/ren.jpg" alt="Gambar Kontak" class="contact-image" />
          <div class="contact-details">
            <div class="info-item">
              <i class="fas fa-globe icon"></i>
              <p>Jl. Mawar No. 123, Jakarta</p>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope icon"></i>
              <p>info@perusahaan.com</p>
            </div>
            <div class="info-item">
              <i class="fas fa-phone icon"></i>
              <p>+62 812 3456 7890</p>
            </div>
            <div class="info-item">
              <i class="fas fa-share-alt icon"></i>
              <div>

                <p>
                  <a href="https://facebook.com" target="_blank">Facebook</a> |
                  <a href="https://instagram.com" target="_blank">Instagram</a> |
                  <a href="https://twitter.com" target="_blank">Twitter</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="form-map-wrapper">
        <div class="contact-form">
          <h2>Hubungi Kami</h2>
          <form @submit.prevent>
            <input type="text" placeholder="Nama Anda" required />
            <input type="email" placeholder="Email Anda" required />
            <textarea placeholder="Pesan Anda" rows="5" required></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>

        <section class="map-section">
          <h2>Lokasi Kami</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.395377778163!2d106.81666631526717!3d-6.200000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sJl.%20Mawar%20No.%20123%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1625159533710!5m2!1sen!2sid" 
            width="100%" 
            height="300" 
            style="border:0;" 
            allowfullscreen 
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </main>

    <Whatsapp />
    <Footer />
  </div>
</template>


<script>
import '../style/kontak.css'
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import Whatsapp from '../components/whatsapp.vue'

export default {
  name: 'KontakPage',
  components: {
    NavBar,
    Footer,
    Whatsapp
  },
}
</script>

<style scoped>

</style>
