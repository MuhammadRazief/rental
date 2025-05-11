<template>
    <div class="banner-container">
      <div class="card-image">
        <img src="@/assets/ren.jpg" alt="Rempah-rempah" />
        <div class="overlay"></div>
        <div class="text-overlay">
          <h1>Rental Mobil</h1>
          <p>Sewa mobil terbaik untuk perjalanan Anda dengan harga terjangkau dan pelayanan terbaik.</p>
          <div class="home-buttons">
            <router-link to="/armada" class="btn">Lihat Armada</router-link>
            <router-link to="/contact" class="btn btn-orange">Rental Sekarang</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BannerPage1',
    methods: {
      scrollToSection() {
        const section = document.getElementById('section-lanjutan')
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .banner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 50vh; /* Menyesuaikan container dengan tinggi layar */
    position: relative;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 1; /* Membiarkan gambar tetap terang */
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Menambahkan lapisan gelap dengan transparansi */
    z-index: 5;
  }
  
  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 10;
  }
  
  .text-overlay h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .text-overlay p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .home-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #00b0b9;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #009b9e;
  }
  
  .btn-orange {
    background-color: #ff8c00;
  }
  
  .btn-orange:hover {
    background-color: #e07b00;
  }
  </style>
  