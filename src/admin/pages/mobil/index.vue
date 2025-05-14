<template>
    <Sidebar @toggle="handleSidebarToggle" />
    <div class="layout">
      <div class="main-container">
        <car-create
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
              <li>Car Data</li>
            </ol>
          </nav>
  
          <div class="header-section">
            <div class="title-container">
              <h1>Car Data</h1>
              <p>Manage the list of cars available in the system</p>
            </div>
            <button class="btn-primary" @click="addPriceList">
              <i class="fas fa-plus"></i> Add Car
            </button>
          </div>
  
          <div class="full-width-card">
            <div class="table-container">
              <table class="car-table">
                <thead>
                  <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 20%">Car</th>
                    <th style="width: 30%">Status</th>
                    <th style="width: 20%">Price</th>
                    <th style="width: 25%">Image</th>
                    <th style="width: 25%">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(car, index) in cars" :key="car.id">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <div class="car-info">
                        {{ car.name }}
                      </div>
                    </td>
                    <td>
                      <span :class="['role-badge', car.status.toLowerCase()]">
                        {{ car.status }}
                      </span>
                    </td>
                    <td>{{ car.price }}</td>
                    <td>{{ car.image }}</td>
                    <td>
                      <div class="action-buttons">
                        <button class="btn-edit" @click="editData(car)">
                          <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn-delete" @click="deleteCar(car.id)">
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
  import "./mobil.css"
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import Swal from "sweetalert2";
  import Sidebar from '@/admin/components/sidebar.vue'
  import carCreate from "./create.vue";
  
  export default {
    name: "CarPage",
    components: {
      Sidebar,
      carCreate,
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
      const cars = ref([]);
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
        priceListObject.value = {};
        showEdit.value = false;
      };
  
      const editData = (car) => {
        showModal();
        priceListObject.value = car;
        showEdit.value = true;
      };
  
      const fetchCars = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/cars");
          cars.value = response.data.data;
        } catch (error) {
          console.error("Gagal mengambil data car:", error);
        }
      };
  
      const deleteCar = (id) => {
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
              .delete(`http://localhost:8000/api/cars/${id}`)
              .then((response) => {
                if (response.data.success) {
                  fetchCars();
                  Swal.fire("Deleted!", "Car has been deleted.", "success");
                } else {
                  Swal.fire("Error!", "Failed to delete car.", "error");
                }
              })
              .catch((error) => {
                console.error("Failed to delete car:", error);
                Swal.fire("Error!", "An error occurred while deleting car.", "error");
              });
          }
        });
      };
  
      onMounted(() => {
        fetchCars();
      });
  
      return {
        cars,
        deleteCar,
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
  
  <style scoped>
 
  </style>