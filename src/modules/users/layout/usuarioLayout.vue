<template>
  <div>
    <div class="row">
      <nav class="col-md-3 sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link btn btn-primary py-2 px-3 mb-2" :to="{ name: 'RegistrarEmpleado'}" exact>Registrar Empleado</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-9 px-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  border-radius: 10px;
}

.nav-link.router-link-exact-active {
  background-color: #479aff;
}

.sidebar {
  background-color: #000; /* Cambia el color de fondo de la barra lateral */
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
}

.sidebar-sticky {
  position: sticky;
  top: 20px; /* Ajusta la posición del contenido para que no quede pegado al borde superior */
}

.nav-item {
  margin-bottom: 10px; /* Espacio entre elementos de la lista */
}

.main-content {
  padding-top: 20px; /* Ajusta el espacio superior del contenido principal */
}
</style>
