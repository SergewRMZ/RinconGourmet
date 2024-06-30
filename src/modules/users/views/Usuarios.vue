<template>
  <div class="container">
    <h1 class="lobster-two-regular mt-4">Gestión de Empleados</h1>

    <div class="card w-50 mx-auto mt-3">
      <div class="card-body">
        <h5 class="card-title">Registrar Empleado</h5>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <input
              v-model="employee.name"
              type="text"
              class="form-control"
              placeholder="Nombre Completo"
              required
            />
          </div>
          <div class="mb-3">
            <input
              v-model="employee.email"
              type="email"
              class="form-control"
              placeholder="Correo"
              required
            />
          </div>
          <div class="mb-3">
            <input
              v-model="employee.password"
              type="password"
              class="form-control"
              placeholder="Contraseña"
              required
            />
          </div>
          <div class="mb-3">
            <select v-model="employee.role" class="form-select" required>
              <option value="" disabled selected>Seleccionar Rol</option>
              <option value="Personal de cocina">Personal de cocina</option>
              <option value="Personal de limpieza">Personal de limpieza</option>
              <option value="Personal de sala">Personal de sala</option>
            </select>
          </div>
          <button class="btn btn-primary" type="submit">Guardar</button>
        </form>
      </div>
    </div>

    <div class="lobster-two-regular mt-4">
      <h2>Lista de Empleados</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.role }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editEmployee(employee)">Editar</button>
              <button class="btn btn-danger btn-sm" @click="deleteEmployee(employee.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      employees: [],
      editing: false,
      editingId: null
    };
  },
  methods: {
    submitForm() {
      if (this.editing) {
        const index = this.employees.findIndex(emp => emp.id === this.editingId);
        if (index !== -1) {
          this.employees.splice(index, 1, { ...this.employee, id: this.editingId });
        }
        this.resetForm();
      } else {
        const newEmployee = { ...this.employee, id: Date.now().toString() };
        this.employees.push(newEmployee);
        this.resetForm();
      }
    },
    editEmployee(employee) {
      this.employee = { ...employee };
      this.editing = true;
      this.editingId = employee.id;
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter(emp => emp.id !== id);
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
    }
  }
};
</script>


