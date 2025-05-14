<template>
    <div class="car-create-modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-container">
        <div class="modal-header">
          <h2>{{ showEdit ? 'Edit Car' : 'Create New Car' }}</h2>
          <button class="close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
  
        <div class="modal-body">
          <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
            <div class="form-group">
              <label for="name">Car Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="car.name" 
                required
                placeholder="Enter car name"
              />
            </div>
  
            <div class="form-group">
              <label for="price">Price</label>
              <input 
                type="number" 
                id="price" 
                v-model="car.price" 
                required
                placeholder="Enter car price"
              />
            </div>
  
            <div class="form-group">
              <label for="image">Image</label>
              <input 
                type="file" 
                id="image" 
                @change="handleImage"
                accept="image/*"
              />
            </div>
  
            <div class="form-actions">
              <button type="button" class="cancel-btn" @click="closeModal">
                Cancel
              </button>
              <button type="submit" class="submit-btn">
                {{ showEdit ? 'Update' : 'Create' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import { ref, reactive, onMounted, onBeforeMount, watch, watchEffect } from 'vue'
  import axios from "axios";
  import Swal from "sweetalert2";
  import { useRouter } from 'vue-router'
  export default {
  name: "CreateEditCar",
  props: {
    showEdit: { Boolean },
    propClass: {
        type: Object,
        default: () => ({ empty: true})
    }
  },
  data() {
    return {
    };
  },
  emits: ['close-modal', 'submit'],
  setup(props, {emit}) {
    const router = useRouter();
    const errors = ref([]);
    const selectedImage = ref(null);

    const employeeModal = ref(false)
    const managerObject = ref()
    const showModal = (event) => {
      employeeModal.value = !employeeModal.value
      managerObject.value = event
    }

    const car = reactive({
      id: '',
      name: '',
      price: '',
      image: 'null',
    })

    const handleImage = (event) => {
    selectedImage.value = event.target.files[0];
  };

    const closeModal = () => {
  emit('close-modal');
};


  const store = async () => {
  const url = props.showEdit ? 'http://localhost:8000/api/cars/' + car.id : 'http://localhost:8000/api/cars'
  const method = props.showEdit ? 'PUT' : 'POST'

  const formData = new FormData();
    formData.append('name', car.name);
    formData.append('price', car.price);

    if (selectedImage.value) {
      formData.append('image', selectedImage.value);
    }

  if (props.showEdit) {
    console.log('Mengedit data car dengan ID:', car.id);
  }

  await axios({
    method,
    url,
    data: formData,
  })
    .then(response => {
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: response.data.message || 'Data berhasil disimpan.',
          confirmButtonColor: '#3578dc'
        })
        emit('close-modal')
      } else {
        errors.value = response.data.messages
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: response.data.messages || 'Terjadi kesalahan saat menyimpan data.',
          confirmButtonColor: '#d33'
        })
      }
    })
    .catch(error => {
      let message = 'Terjadi kesalahan tidak diketahui.'
      if (error.response?.data?.message) {
        message = error.response.data.message
      } else if (error.message) {
        message = error.message
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: message,
        confirmButtonColor: '#d33'
      })
    })
}


    onBeforeMount(() => {
    })

    onMounted(() => {
      // reason.value =toRefs(props, 'propClass')
    })

    
    const handleSubmit = () => {
      store(); // Panggil fungsi store saat form disubmit
    };

    watch(() => props.propClass, () => {
    })

    watchEffect(() => {
    const newcar = props.propClass;
    if (newcar && typeof newcar === 'object') {
      if (props.showEdit) {
        Object.assign(car, newcar);
      } else {
        car.id = '';
        car.name = '';
        car.price = '';
        selectedImage.value = null;
      }
    }
  });

    return{
        router,
        showModal,
        employeeModal,
        managerObject,
        store,
        car,
        closeModal,
        handleSubmit,
        handleImage
    }

  }
};
  </script>
  
  <style scoped>
  /* Modal Overlay */
  .car-create-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  /* Modal Container */
  .modal-container {
    position: relative;
    z-index: 2;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    animation: modalFadeIn 0.3s ease;
  }
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Modal Header */
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #111827;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #6b7280;
    cursor: pointer;
    transition: color 0.2s;
    padding-right: 25px;
  }
  
  .close-btn:hover {
    color: #ef4444;
  }
  
  /* Modal Body */
  .modal-body {
    padding: 1.5rem;
  }
  
  /* Form Styles */
  .form-group {
    margin-bottom: 1.25rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
  }
  
  .form-group input,
  .form-group select {
    width: 95%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }
  
  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  /* Form Actions */
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }
  
  .cancel-btn,
  .submit-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .cancel-btn {
    background-color: #f3f4f6;
    color: #374151;
    border: none;
  }
  
  .cancel-btn:hover {
    background-color: #e5e7eb;
  }
  
  .submit-btn {
    background-color: #3b82f6;
    color: white;
    border: none;
  }
  
  .submit-btn:hover {
    background-color: #2563eb;
  }
  
  /* Responsive Design */
  @media (max-width: 640px) {
    .modal-container {
      width: 95%;
      margin: 0 auto;
    }
    
    .modal-header {
      padding: 1rem;
    }
    
    .modal-body {
      padding: 1rem;
    }
    
    .form-actions {
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .cancel-btn,
    .submit-btn {
      width: 100%;
    }
  }
  </style>