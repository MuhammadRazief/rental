<template>
    <div class="sidebar-container" :class="{ 'sidebar-collapsed': isCollapsed }">
      <button class="toggle-btn" @click="toggleSidebar">
        <i :class="isCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
      </button>
      
      <div class="sidebar-header">
        <h3 v-if="!isCollapsed">Rental Mobil</h3>
        <i v-else class="fas fa-leaf"></i>
      </div>
      
      <nav class="sidebar-nav">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path"
          class="nav-item"
          active-class="active"
        >
          <i :class="item.icon"></i>
          <span v-if="!isCollapsed">{{ item.title }}</span>
        </router-link>
      </nav>
      
      <div class="sidebar-footer" v-if="!isCollapsed">
        <p>© 2023 Aplikasi</p>
      </div>
    </div>
  </template>
  
  <script>
import '@/admin/style/sidebar.css'; // Import the external CSS file

  export default {
    name: 'SidebarPage',
    data() {
      return {
        isCollapsed: false,
        menuItems: [
            { title: 'Dashboard', path: '/admin-dashboard', icon: 'fas fa-tachometer-alt' },
            { title: 'Mobil', path: '/admin-mobil', icon: 'fas fa-car' },
            { title: 'Laporan', path: '/admin-reports', icon: 'fas fa-chart-line' },
            { title: 'Users', path: '/admin-user', icon: 'fas fa-users' },
            { title: 'Pengaturan', path: '/admin-settings', icon: 'fas fa-cogs' },
            ]
      }
    },
    methods: {
    toggleSidebar() {
        this.isCollapsed = !this.isCollapsed;
        this.$emit('toggle', this.isCollapsed); // emit ke parent
    }
    }

  }
  </script>
  
  <style scoped>
  
  </style>