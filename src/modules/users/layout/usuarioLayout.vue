<template>
  <div>
    <div class="row">
      <nav class="col-md-3 bg-black sidebar">
        <div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link btn btn-primary pt-3 pb-3" :to="{ name: 'RegistrarEmpleado'}" exact>Registrar Empleado</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link btn btn-primary pt-3 pb-3" :to="{ name: 'ListarEmpleado'}" exact>Listar Empleados</router-link>
            </li>

            <!-- <li class="nav-item">
              <router-link class="nav-link btn btn-primary pt-3 pb-3" :to="{ name: 'Inventory'}" exact>Registrar Inventario</router-link>
            </li> -->
          </ul>
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-9 px-4">
        <router-view :employees="employees" @add-employee="addEmployee" @edit-employee="editEmployee" @delete-employee="deleteEmployee" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: []
    };
  },
  methods: {
    addEmployee(newEmployee) {
      this.employees.push(newEmployee);
    },
    editEmployee(updatedEmployee) {
      const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
      if (index !== -1) {
        this.employees.splice(index, 1, updatedEmployee);
      }
    },
    deleteEmployee(employeeId) {
      this.employees = this.employees.filter(e => e.id !== employeeId);
    }
  }
};
</script>

<style scoped>
.nav-link {
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
}

.nav-link.router-link-exact-active {
  color: #479aff;
}

.sidebar {
  height: 100vh;
  padding: 20px 20px;
}
</style>
