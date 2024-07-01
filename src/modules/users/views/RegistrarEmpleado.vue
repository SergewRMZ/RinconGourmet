<template>
  <div>
    <h5 class="card-title">Registrar Empleado</h5>
    <form @submit.prevent="submitForm" ref="form" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Nombre Completo</label>
        <input
          v-model="employee.name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Nombre Completo"
          required
        />
        <div class="invalid-feedback">
          Por favor ingresa el nombre completo.
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo</label>
        <input
          v-model="employee.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Correo"
          required
        />
        <div class="invalid-feedback">
          Por favor ingresa un correo válido.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          v-model="employee.password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Contraseña"
          required
        />
        <div class="invalid-feedback">
          Por favor ingresa una contraseña.
        </div>
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Seleccionar Rol</label>
        <select v-model="employee.role" class="form-select" id="role" required>
          <option value="" disabled>Seleccionar Rol</option>
          <option value="Personal de cocina">Personal de cocina</option>
          <option value="Personal de limpieza">Personal de limpieza</option>
          <option value="Personal de sala">Personal de sala</option>
        </select>
        <div class="invalid-feedback">
          Por favor selecciona un rol.
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        name: '',
        email: '',
        password: '',
        role: ''
      },
      editing: false,
      editingId: null
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form && this.$refs.form.checkValidity()) {
        if (this.editing) {
          this.$emit('edit-employee', { ...this.employee, id: this.editingId });
          this.resetForm();
        } else {
          this.$emit('add-employee', { ...this.employee, id: Date.now().toString() });
          this.resetForm();
        }
      } else {
        if (this.$refs.form) {
          this.$refs.form.classList.add('was-validated');
        }
      }
    },
    resetForm() {
      this.employee = {
        name: '',
        email: '',
        password: '',
        role: ''
      };
      this.editing = false;
      this.editingId = null;
      if (this.$refs.form) {
        this.$refs.form.classList.remove('was-validated');
      }
    }
  }
};
</script>
