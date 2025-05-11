<template>
    <transition name="fade-out">
      <div v-if="show" class="loading-screen">
        <div class="loading-content">
          <i class="fas fa-truck loading-icon"></i>
          <p class="loading-text">Memuat halaman...</p>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'LoadingScreen',
    data() {
      return {
        show: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  }
  </script>
  
  <style scoped>
  /* Loading Screen Style */
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loading-content {
    text-align: center;
  }
  
  .loading-icon {
    font-size: 80px;
    color: #333;
    animation: mobilJalan 2s linear forwards;
    position: relative;
  }
  
  @keyframes mobilJalan {
    0% {
      transform: translateX(-200px); /* Truk mulai dari kiri */
    }
    20% {
      transform: translateX(-100px); /* Truk bergerak sedikit */
    }
    40% {
      transform: translateX(0); /* Truk mulai berada di posisi huruf 'm' */
    }
    60% {
      transform: translateX(40px); /* Truk bergerak sedikit ke kanan */
    }
    80% {
      transform: translateX(80px); /* Truk bergerak lebih jauh */
    }
    100% {
      transform: translateX(120px); /* Truk berhenti di posisi akhir */
    }
  }
  
  .loading-text {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  /* Transisi keluar */
  .fade-out-leave-active {
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-out-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>
  