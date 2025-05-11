<template>
    <div class="home-wrapper">
      <NavBar />
      <main class="home-main">
        <div class="text-container">
          <h1>{{ $t('rental') }}</h1>
          <p>{{ $t('rental_desc') }}</p>
          <div class="home-buttons">
            <router-link to="/armada" class="btn btn-orange">{{  $t('btn_armada') }}</router-link>
            <router-link to="https://wa.me/yourphonenumber" class="btn btn-whatsapp" target="_blank">
              <i class="fab fa-whatsapp"></i> {{ $t('btn_whatsapp') }}
            </router-link>

          </div>
        </div>
      </main>
      <section class="stats-section">
        <div class="stats-container">
  <h2>{{ $t('stats') }}</h2>
  <div class="stats-grid">
    <div class="stat-item stat-item-1">
      <i class="fas fa-users stat-icon"></i>
      <span class="stat-number" ref="count1">0</span>
      <p>{{ $t('penyewaan') }}</p>
    </div>
    <div class="stat-item stat-item-2">
      <i class="fas fa-truck stat-icon"></i>
      <span class="stat-number" ref="count2">0</span>
      <p>{{ $t('armada_tersedia') }}</p>
    </div>
    <div class="stat-item stat-item-3">
      <i class="fas fa-city stat-icon"></i>
      <span class="stat-number" ref="count3">0</span>
      <p>{{ $t('kota') }}</p>
    </div>
    <div class="stat-item stat-item-4">
      <i class="fas fa-calendar-check stat-icon"></i>
      <span class="stat-number" ref="count4">0</span>
      <p>{{ $t('order') }}</p>
    </div>
  </div>
  </div> 
</section>


<section class="info-divider">
  <div class="info-container">
    <h2>{{ $t('perjalanan') }}</h2>
    <p>{{ $t('kami_hadir') }}</p>

    <div class="info-icons">
      <div class="info-icon-item">
        <i class="fas fa-check-circle"></i>
        <span>{{ $t('proses') }}</span>
      </div>
      <div class="info-icon-item">
        <i class="fas fa-handshake"></i>
        <span>{{ $t('terpercaya') }}</span>
      </div>
      <div class="info-icon-item">
        <i class="fas fa-thumbs-up"></i>
        <span>{{ $t('ribuan') }}</span>
      </div>
    </div>
  </div>
</section>



<section class="why-us-section">
  <div class="why-us-container">
    <!-- KIRI: Card dan Tombol -->
    <div class="why-us-left">
      <h2>{{ $t('kenapa') }}</h2>
      <div class="why-us-grid">
      <div class="why-item why-item-1">
        <i class="fas fa-star why-icon"></i>
        <h3>{{ $t('pelayanan') }}</h3>
        <p>{{ $t('pelayanan_ramah') }}</p>
      </div>
      <div class="why-item why-item-2">
        <i class="fas fa-dollar-sign why-icon"></i>
        <h3>{{ $t('harga') }}</h3>
        <p>{{ $t('harga_sewa') }}</p>
      </div>
      <div class="why-item why-item-3">
        <i class="fas fa-car why-icon"></i>
        <h3>{{ $t('armada_lengkap') }}</h3>
        <p>{{ $t('beragam') }}</p>
      </div>
    </div>

    <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-orange why-btn">
      <i class="fab fa-whatsapp" style="margin-right: 8px;"></i> Rental Sekarang
    </a>

    </div>

    <!-- KANAN: Gambar -->
    <div class="why-us-right">
      <img src="../assets/mobil.jpg" alt="Kenapa Memilih Kami" class="why-us-image" />
    </div>
  </div>
</section>


<section class="blog-section">
  <div class="blog-container">
  <h2>Artikel Terbaru</h2>
  <div class="blog-grid">
    <div class="blog-item">
      <img src="../assets/mobil.jpg" alt="Artikel 1">
      <h3>Tips Memilih Mobil untuk Perjalanan Jauh</h3>
      <p>Baca tips-tips terbaik memilih mobil yang nyaman dan aman.</p>
    </div>
    <div class="blog-item">
      <img src="../assets/mobil.jpg" alt="Artikel 2">
      <h3>Keuntungan Sewa Mobil Dibandingkan Transportasi Umum</h3>
      <p>Pahami keuntungan lebih memilih sewa mobil.</p>
    </div>
    <div class="blog-item">
      <img src="../assets/mobil.jpg" alt="Artikel 3">
      <h3>Panduan Merawat Mobil Agar Tetap Awet</h3>
      <p>Ikuti tips merawat mobil agar tetap dalam kondisi prima.</p>
    </div>
    <div class="blog-item">
      <img src="../assets/mobil.jpg" alt="Artikel 4">
      <h3>Tips Menghemat Bahan Bakar Mobil</h3>
      <p>Temukan cara menghemat bahan bakar saat berkendara.</p>
    </div>
    <div class="blog-item">
      <img src="../assets/mobil.jpg" alt="Artikel 5">
      <h3>Mengenal Fitur-Fitur Mobil Modern</h3>
      <p>Pelajari fitur-fitur mobil terbaru yang memudahkan pengemudi.</p>
    </div>
    <div class="blog-item">
      <img src="../assets/mobil.jpg" alt="Artikel 6">
      <h3>Perawatan Rutin yang Harus Dilakukan Pada Mobil</h3>
      <p>Rutin melakukan perawatan mobil untuk memperpanjang usia kendaraan.</p>
    </div>
  </div>
  </div>
</section>

<section class="armada-section">
  <h2>Lihat Armada Kami</h2>
  <p>Kami memiliki berbagai pilihan mobil untuk kebutuhan perjalanan Anda. Temukan mobil yang sesuai dengan preferensi Anda sekarang juga.</p>
  <router-link to="/armada" class="btn btn-blue">Lihat Armada</router-link>
</section>










      <Whatsapp />
      <Footer />
    </div>
  </template>
  
  <script>
  import '../style/home.css'
  import NavBar from '../components/navbar.vue'
  import Footer from '../components/footer.vue'
  import Whatsapp from '../components/whatsapp.vue'
  
  export default {
    name: 'HomePage',
    components: {
      NavBar,
      Footer,
      Whatsapp
    },
    mounted() {
  this.animateCount(this.$refs.count1, 500);
  this.animateCount(this.$refs.count2, 50);
  this.animateCount(this.$refs.count3, 10);
  this.animateCount(this.$refs.count4, 200);
},
methods: {
  animateCount(el, target) {
    let count = 0;
    const speed = target / 50;
    const update = () => {
      count += speed;
      if (count < target) {
        el.textContent = Math.floor(count) + '+';
        requestAnimationFrame(update);
      } else {
        el.textContent = target + '+';
      }
    };
    update();
  }
}

  }
  </script>
  
  <style scoped>
 
  </style>
  