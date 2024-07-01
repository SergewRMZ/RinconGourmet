<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-color ">
    <div class="container">
      <router-link class="navbar-brand" :to="isLogged ? {name: 'HomeAdministrador'} : { name: 'login-admin'}">
        <img src="@/assets/logo.png"
          class="img-fluid img-logo--navbar rounded float-start">
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link v-if="!this.isLogged" :to="{ name: 'login-admin' }">Iniciar Sesión</router-link>
          </li>

          <li class="nav-item">
            <router-link v-if="this.isLogged" :to="{ name: 'HomeAdministrador' }" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link v-if="this.isLogged" :to="{ name: 'Reservation' }" class="nav-link">Reservaciones</router-link>
          </li>

          <li class="nav-item">
            <router-link v-if="this.isLogged" :to="{ name: 'CrearInventario' }" class="nav-link">Inventario</router-link>
          </li>

          <li class="nav-item">
            <router-link v-if="this.isLogged" :to="{ name: 'Usuarios' }" class="nav-link">Usuarios</router-link>
          </li>

          <li class="nav-item">
            <router-link v-if="this.isLogged" :to="{ name: 'CrearProducto' }" class="nav-link">Menú</router-link>
          </li>
          
          <li class="nav-item">
            <router-link v-if="this.isLogged" v-on:click="logoutAction" :to="{ name: 'login-admin'}" class="nav-link">Cerrar Sesión</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <LogoutVue
    v-bind:isLoading="isLoading"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LogoutVue from './Logout.vue'
export default {
  components: {
    LogoutVue
  },

  data() {
    return {
      isLoading: false  
    }
  },

  computed: {
    ...mapState('user', ['message_error', 'isLogged', 'token']),

  },

  methods: {
    ...mapActions('user', ['logout']),
    
    async logoutAction () {
      this.isLoading = true;
      await this.logout();
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
  div a {
    margin: 0 20px;
    text-decoration: none;
    font-weight: bold;
    color: white;
  }

  div .router-link-exact-active {
    color: #fff58c;
  }
</style>