<template>
  <div>
    <Loading />
    <router-view />
  </div>
</template>

<script>
import Loading from './components/loading.vue'

export default {
  name: 'App',
  components: {
    Loading
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const topbar = document.querySelector('.topbar');
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 50) {
        topbar?.classList.add('hidden');
        navbar?.classList.add('sticky');
      } else {
        topbar?.classList.remove('hidden');
        navbar?.classList.remove('sticky');
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}
</style>
