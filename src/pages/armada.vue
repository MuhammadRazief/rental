<template>
    <div class="armada-page">
      <NavBar />
  
      <!-- Banner -->
      <div class="armada-banner">
        <div class="banner-content">
          <h1>Armada</h1>
          <h2>HOME - <span class="highlight">ARMADA</span></h2>
        </div>
      </div>


      <!-- Section: Fasilitas Armada -->
<section class="armada-facilities">
  <div class="container">
    <h2>Fasilitas Armada Kami</h2>
    <p>Semua armada kami dilengkapi dengan fasilitas terbaik untuk kenyamanan perjalanan Anda.</p>
    <ul>
      <li><i class="fas fa-snowflake"></i> AC</li>
      <li><i class="fas fa-wifi"></i> Wi-Fi Gratis</li>
      <li><i class="fas fa-headphones-alt"></i> Sistem Audio Terbaik</li>
      <li><i class="fas fa-couch"></i> Kursi yang Nyaman</li>
    </ul>
  </div>
</section>

  
      <!-- Section: Deskripsi Armada -->
      <section class="armada-description">
        <div class="container">
          <h2>Tentang Armada Kami</h2>
          <p>
            Kami menyediakan berbagai pilihan armada terbaik yang siap memenuhi kebutuhan perjalanan Anda.
          </p>
        </div>
      </section>
  
      <!-- Section: Filter Armada -->
      <section class="armada-filter">
        <div class="container filter-bar">
          <select v-model="selectedMerk">
            <option value="">Semua Merk</option>
            <option v-for="merk in merkList" :key="merk" :value="merk">{{ merk }}</option>
          </select>
          <input type="text" v-model="searchQuery" placeholder="Cari nama mobil..." />
        </div>
      </section>
  
      <section class="armada-list">
  <div class="container">
    <h2>Jenis Armada</h2>
    <div class="card-grid">
      <div
        v-for="item in filteredArmada"
        :key="item.id"
        class="card armada-card"
      >
        <img :src="item.image" :alt="item.name" class="card-img">
        <div class="card-body">
          <h3 class="card-title">{{ item.name }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
          <p class="info-row">
            <i class="fas fa-user-friends"></i> {{ item.capacity }}
            &nbsp;&nbsp;
            <i class="fas fa-money-bill-wave"></i> {{ formatPrice(item.price) }}
            </p>

          <a href="https://wa.me/1234567890" class="btn-detail" target="_blank">
                <i class="fab fa-whatsapp"></i> Booking Via WhatsApp
                </a>

        </div>
      </div>
    </div>
  </div>
</section>



  
      <Whatsapp />
      <Footer />
    </div>
  </template>
  
  
  
  <script>
  import '../style/armada.css'
  import NavBar from '../components/navbar.vue'
  import Footer from '../components/footer.vue'
  import Whatsapp from '../components/whatsapp.vue'
  
  export default {
    name: 'ArmadaPage',
    components: {
      NavBar,
      Footer,
      Whatsapp
    },
    data() {
  return {
    searchQuery: '',
    selectedMerk: '',
    armadaList: [
      {
        id: 1,
        name: 'Toyota HiAce',
        merk: 'HiAce',
        image: require('@/assets/mobil.jpg'),
        desc: 'Nyaman untuk perjalanan jauh dan kapasitas besar.',
        capacity: 15,
        price: 1500000
      },
      {
        id: 2,
        name: 'Isuzu Elf',
        merk: 'Elf',
        image: require('@/assets/mobil.jpg'),
        desc: 'Cocok untuk rombongan wisata atau perusahaan.',
        capacity: 17,
        price: 1300000
      },
      {
        id: 3,
        name: 'Toyota Avanza',
        merk: 'Avanza',
        image: require('@/assets/mobil.jpg'),
        desc: 'Efisien dan nyaman untuk keluarga.',
        capacity: 7,
        price: 600000
      },
      {
        id: 4,
        name: 'Toyota Avanza',
        merk: 'Avanza',
        image: require('@/assets/mobil.jpg'),
        desc: 'Efisien dan nyaman untuk keluarga.',
        capacity: 7,
        price: 600000
      },
      {
        id: 5,
        name: 'Toyota Avanza',
        merk: 'Avanza',
        image: require('@/assets/mobil.jpg'),
        desc: 'Efisien dan nyaman untuk keluarga.',
        capacity: 7,
        price: 600000
      },
      {
        id: 6,
        name: 'Toyota Avanza',
        merk: 'Avanza',
        image: require('@/assets/mobil.jpg'),
        desc: 'Efisien dan nyaman untuk keluarga.',
        capacity: 7,
        price: 600000
      },
      {
        id: 7,
        name: 'Toyota Avanza',
        merk: 'Avanza',
        image: require('@/assets/mobil.jpg'),
        desc: 'Efisien dan nyaman untuk keluarga.',
        capacity: 7,
        price: 600000
      },
    ]
  }
},
methods: {
  formatPrice(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
},
    computed: {
      merkList() {
        return [...new Set(this.armadaList.map(item => item.merk))];
      },
      filteredArmada() {
        return this.armadaList.filter(item => {
          const matchMerk = this.selectedMerk === '' || item.merk === this.selectedMerk;
          const matchSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          return matchMerk && matchSearch;
        });
      }
    }
  }
  </script>
  