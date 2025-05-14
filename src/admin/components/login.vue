<template>
    <div class="login-page">
      <div class="login-container">
        <div class="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to login</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              id="email" 
              type="email" 
              v-model="form.email" 
              required 
              placeholder="Enter your email"
              @focus="focusInput"
              @blur="blurInput"
            />
            <span class="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
          </div>
    
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              id="password" 
              type="password" 
              v-model="form.password" 
              required 
              placeholder="Enter your password"
              @focus="focusInput"
              @blur="blurInput"
            />
            <span class="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
          </div>
    
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox" v-model="rememberMe" />
              <span>Remember me</span>
            </label>
          </div>
    
          <button type="submit" :disabled="loading" class="login-button">
            <span v-if="!loading">Login</span>
            <span v-else class="loading-spinner"></span>
          </button>
          
          <div class="login-footer">
            <p>@Rental Mobil Jakarta</p>
          </div>
        </form>
      </div>
      
      <div class="login-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useToast } from 'vue-toastification';
  import '@/admin/style/login.css'; // Import the external CSS file
  
  export default {
    name: 'LoginAdmin',
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        rememberMe: false,
        loading: false,
        error: ''
      };
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.error = '';
        
        const toast = useToast();
  
        axios.post('http://localhost:8000/api/login', this.form)
          .then((response) => {
            localStorage.setItem('token', response.data.token);
            if (this.rememberMe) {
              localStorage.setItem('rememberedEmail', this.form.email);
            }
            this.$router.push('/admin-dashboard');
            toast.success('Login successful!');
          })
          .catch((err) => {
            this.error = err.response?.data?.message || 'Login failed. Please try again.';
            toast.error(this.error);
          })
          .finally(() => {
            this.loading = false;
          });
      },
      focusInput(event) {
        event.target.parentNode.classList.add('focused');
      },
      blurInput(event) {
        event.target.parentNode.classList.remove('focused');
      }
    },
    mounted() {
      const rememberedEmail = localStorage.getItem('rememberedEmail');
      if (rememberedEmail) {
        this.form.email = rememberedEmail;
        this.rememberMe = true;
      }
    }
  };
  </script>
