<template>
  <div class="dashboard">
    <Sidebar @toggle="handleSidebarToggle" />
    <div :class="['content', { collapsed: isSidebarCollapsed }]">
      <h1>Welcome to Dashboard</h1>
      <p>Ini adalah konten utama.</p>
    </div>
  </div>
</template>


<script>
import Sidebar from '@/admin/components/sidebar.vue'

export default {
  name: "DashboardPage",
  components: { Sidebar },
  data() {
    return {
      isSidebarCollapsed: false
    }
  },
  methods: {
    handleSidebarToggle(collapsed) {
      this.isSidebarCollapsed = collapsed;
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
}

.content {
  transition: margin-left 0.3s ease; /* animasi smooth */
  margin-left: 250px;
  padding: 20px;
  flex: 1;
}

.content.collapsed {
  margin-left: 60px; /* sesuaikan dengan lebar sidebar saat collapse */
}
</style>
