<template>
  <div>
    <h2>Lista de Empleados</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Rol</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.role }}</td>
            <td>
              <button @click="editEmployee(employee)" class="btn btn-warning btn-sm">Editar</button>
              <button @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['employees'],
  methods: {
    editEmployee(employee) {
      this.$emit('edit-employee', employee); 
    },
    deleteEmployee(id) {
      this.$emit('delete-employee', id);
    }
  }
};
</script>
