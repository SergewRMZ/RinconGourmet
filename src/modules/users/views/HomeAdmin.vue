<template>
  <div class="container mt-5">
    <div class="card text-center">
      <div class="card-header">
        <h2 class="lobster-two-regular">Bienvenido, {{ name }}</h2>
      </div>
      <div class="card-body">
        <font-awesome-icon :icon="['fas', 'user-circle']" class="text-primary"
              style="width: 200px; height: 200px;" />
        <p class="card-text fs-2 lobster-two-regular">Nos alegra verte por aquí.</p>
        <p class="card-text text-start"><span class="text-success fw-bold">ID de Empleado: </span>{{ userId }}</p>
        <p class="card-text text-start"><span class="text-success fw-bold">Email:</span> {{ email }}</p>
        <p class="card-text text-start"><span class="text-success fw-bold">Nombre:</span> {{ name }}</p>
        <p class="card-text text-start"><span class="text-success fw-bold">Email Validated:</span> {{ email_validated }}</p>
      </div>

      <button class="btn btn-success" @click="validarCorreo">
        VALIDAR CORREO
      </button>
      <div class="card-footer text-muted">
        Disfruta tu estancia
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

  methods: {
    ...mapActions('user', ['validateEmail']),
    async validarCorreo () {
      try {
        const response = await this.validateEmail();
      } catch (error) {
        mostrarError('Error', 'error al validar el correo')
      }

    }
  },

  mounted() {
    console.log(this.name);
  },
}
</script>

<style scoped>
.user-icon {
  font-size: 4em;
  color: #007bff;
}
</style>
