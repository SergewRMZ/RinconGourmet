<template>
  <div>
    <div class="row">
      <nav class="col-md-3 bg-black sidebar">
        <div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link btn btn-primary pt-3 pb-3" :to="{ name: 'RegistrarEmpleado'}" exact>Registrar Empleado</router-link>
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
}

.nav-link.router-link-exact-active {
  color: #479aff;
}

.sidebar {
  height: 100vh;
  padding: 20px 20px;
}
</style>
