<template>
    <Sidebar @toggle="handleSidebarToggle" />
    <div class="layout">
      <div class="main-container">
        <user-create
          v-if="priceListModal"
          :prop-class="priceListObject"
          :show-edit="showEdit"
          @close-modal="hideModal"
          :price-list-modal="priceListModal"
        />
  
        <div :class="['content', { collapsed: isSidebarCollapsed }]">
          <nav class="breadcrumb">
            <ol>
              <li><i class="fas fa-home"></i> Home</li>
              <li>User Management</li>
            </ol>
          </nav>
  
          <div class="header-section">
            <div class="title-container">
              <h1>User Management</h1>
              <p>Manage your system users and permissions</p>
            </div>
            <button class="btn-primary" @click="addPriceList">
              <i class="fas fa-plus"></i> Add User
            </button>
          </div>
  
          <div class="full-width-card">
            <div class="table-container">
              <table class="user-table">
                <thead>
                  <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 20%">Username</th>
                    <th style="width: 30%">Email</th>
                    <th style="width: 20%">Role</th>
                    <th style="width: 25%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <div class="user-info">
                        {{ user.name }}
                      </div>
                    </td>
                    <td>{{ user.email }}</td>
                    <td>
                      <span :class="['role-badge', user.role.toLowerCase()]">
                        {{ user.role }}
                      </span>
                    </td>
                    <td>
                      <div class="action-buttons">
                        <button class="btn-edit" @click="editData(user)">
                          <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn-delete" @click="deleteUser(user.id)">
                          <i class="fas fa-trash"></i> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import "./user.css"
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import Swal from "sweetalert2";
  import Sidebar from '@/admin/components/sidebar.vue'
  import userCreate from "./create.vue";
  
  export default {
    name: "UserPage",
    components: {
      Sidebar,
      userCreate,
    },
    data() {
      return {
        isSidebarCollapsed: false
      }
    },
    methods: {
      handleSidebarToggle(collapsed) {
        this.isSidebarCollapsed = collapsed;
      },
    },
    setup() {
      const users = ref([]);
      const priceListObject = ref(null);
      const showEdit = ref(false);
      const priceListModal = ref(false);
      
  
      const showModal = () => {
        priceListModal.value = true;
      };
  
      const hideModal = () => {
        priceListModal.value = false;
      };
  
      const addPriceList = () => {
        showModal();
        priceListObject.value = {}; // Atur ke objek kosong untuk tambah
        showEdit.value = false;
      };
  
      const editData = (user) => {
        showModal();
        priceListObject.value = user;
        showEdit.value = true;
      };
  
      const fetchUsers = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/users");
          users.value = response.data.data;
        } catch (error) {
          console.error("Gagal mengambil data user:", error);
        }
      };
  
      const deleteUser = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:8000/api/users/${id}`)
              .then((response) => {
                if (response.data.success) {
                  fetchUsers();
                  Swal.fire("Deleted!", "User has been deleted.", "success");
                } else {
                  Swal.fire("Error!", "Failed to delete user.", "error");
                }
              })
              .catch((error) => {
                console.error("Failed to delete user:", error);
                Swal.fire("Error!", "An error occurred while deleting user.", "error");
              });
          }
        });
      };
  
      onMounted(() => {
        fetchUsers();
      });
  
      return {
        users,
        deleteUser,
        priceListObject,
        addPriceList,
        editData,
        priceListModal,
        hideModal,
        showEdit,
      };
    },
  };
  </script>