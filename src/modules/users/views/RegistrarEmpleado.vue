<template>
  <div class="container">
    <div class="card w-50 mx-auto mt-5">
      <div class="card-body">
        <h5 class="card-title mt-3">Registrar Empleado</h5>
        <form @submit.prevent="registrarEmpleado">
          <div class="mb-5">
            <input
              v-model="name"
              type="text"
              class="form-control mt-3"
              placeholder="Nombre Completo"
              required
            />

            <input
              v-model="email"
              type="email"
              class="form-control mt-3"
              placeholder="Correo"
              required
            />

            <input
              v-model="password"
              type="password"
              class="form-control mt-3"
              placeholder="Contraseña"
              required
            />

            <select class="form-select mt-3" v-model="role" aria-label="Default select example" required>
              <option value="" disabled selected>Seleccionar Rol</option>
              <option value="Personal de cocina">Personal de cocina</option>
              <option value="Personal de limpieza">Personal de limpieza</option>
              <option value="Personal de sala">Personal de sala</option>
            </select>

            <button class="btn btn-primary mt-5 w-100" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mostrarError, mostrarMensaje } from '@/alerts/alerts';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role: '',
    };
  },

  methods: {
    ...mapActions('user', ['registerUser']),
    async registrarEmpleado() {
      try {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        };

        const responseUser = await this.registerUser(data);
        console.log(responseUser);
        mostrarMensaje('Éxito', 'Empleado registrado exitosamente');
      } catch (error) {
        console.log(error);
        mostrarError('Error', error.response.data.error || 'Error al registrar el empleado');
      }
    }
  }
};
</script>
