<template>
  <div class="banner-container">
    <div class="card-image">
      <img src="@/assets/ren.jpg" alt="Rempah-rempah" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerPage',
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
}

.card-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
