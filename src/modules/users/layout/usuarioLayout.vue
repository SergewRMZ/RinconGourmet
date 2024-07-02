<template>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar">
      <ul class="list-unstyled components">
        <li>
          <a href="#homeSubMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Usuarios</a>
          <ul class="collapse list-unstyled" id="homeSubMenu">
            <li class="nav-item">
              <router-link class="nav-link py-2 px-3 mb-2" :to="{ name: 'RegistrarEmpleado'}" exact>Registrar Empleado</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-9 px-4">
      <router-view />
    </main>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="btn">
            <i class="fas fa-align-left"></i>
            <span>Esconder Menú</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  background: #0B0B2C; /* Azul marino más oscuro */
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
}

body {
  font-family: 'Poppins', sans-serif;
  background: #fafafa;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a, a:hover, a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
  color: #fff; /* Color de las letras */
}

#sidebar ul li a:hover, #sidebar ul li.active > a, a[aria-expanded="true"] {
  color: #fff;
  background: #1f3285;
  box-shadow: inset 0 0 10px #000; /* Sombra de color negro */
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #1f3285;
}

.btn {
  background: #0B0B2C; /* Mismo color que el menú lateral */
  color: #fff;
  border: none;
}

.btn:hover, .btn:focus {
  background: #0B0B2C;
  color: #fff;
}
</style>

<script>
export default {
  mounted() {
    var sidebarCollapse = document.getElementById('sidebarCollapse');
    var sidebar = document.getElementById('sidebar'); // Suponiendo que tu menú lateral tiene el id 'sidebar'

    sidebarCollapse.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        var span = sidebarCollapse.querySelector('span');
        span.textContent = sidebar.classList.contains('active') ? 'Mostrar Menú' : 'Esconder Menú';
    });
  }
};
</script>
