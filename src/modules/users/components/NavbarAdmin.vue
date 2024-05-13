<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <router-link :to="{ name: 'HomeAdministrador' }" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Reservation' }" class="nav-link">Reservaciones</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Inventory' }" class="nav-link">Inventario</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Menu' }" class="nav-link">Menú</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavbarAdmin'
})
</script>

<style scoped>
  div a {
    margin: 0 20px;
    text-decoration: none;
    font-weight: bold;
    color: rgb(0, 0, 0);
  }

  div .router-link-exact-active {
    color: #0675c9;
  }

  div a:hover {
    color: var(--color__secundario);
  }
</style>