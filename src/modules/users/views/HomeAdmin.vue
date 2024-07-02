<template>
  <div class="bg-image">
    <div class="container w-50 mt-5">
      <div class="card text-center">
        <div class="card-header bg-dark">
          <h2 class="lobster-two-regular text-white">Bienvenido</h2>
        </div>
        <div class="card-body">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="text-primary"
                style="width: 200px; height: 200px;" />
          <p class="card-text fs-2 lobster-two-regular">Nos alegra verte por aquí.</p>
          <div class="d-flex gap-3">
            <font-awesome-icon :icon="['fas', 'user']" />
            <p class="card-text text-start"><span class="text-success fw-bold">ID de Empleado: </span>{{ userId }}</p>
          </div>

          <div class="d-flex gap-3">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <p class="card-text text-start"><span class="text-success fw-bold">Email:</span> {{ email }}</p>
          </div>
          
          <div class="d-flex gap-3">
            <span class="icon-placeholder"></span>
            <p class="card-text text-start"><span class="text-success fw-bold">Nombre:</span> {{ name }}</p>
          </div>

          <div class="d-flex gap-3">
            <span class="icon-placeholder"></span>
            <p class="card-text text-start"><span class="text-success fw-bold">Email Validated:</span> {{ email_validated }}</p>
          </div>
        </div>
        <div class="card-footer text-muted">
          Disfruta tu jornada!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarError } from '@/alerts/alerts';
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['name', 'userId', 'email', 'email_validated']),
  },
}
</script>

<style scoped>
.user-icon {
  font-size: 4em;
  color: #007bff;
}

.icon-placeholder {
  width: 1em; /* Ajusta el ancho para que coincida con el tamaño del icono */
  height: 1em; /* Ajusta la altura para que coincida con el tamaño del icono */
  display: inline-block;
}

.bg-image {
  background: url('@/assets/FotoRestaurante.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow: hidden
}
</style>
