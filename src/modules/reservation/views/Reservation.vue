<template>
  <div class="container">
    <h2 class="lobster-two-regular mt-4">Reservaciones</h2>

    <!-- Campo de búsqueda por nombre -->
    <!-- <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Buscar reservación..." v-model="searchTerm">
      <button class="btn btn-outline-secondary" type="button" @click="searchReservations">Buscar</button>
    </div> -->

    <!-- Campo de búsqueda por fecha -->
    <!-- <div class="mb-3">
      <label for="filterDate" class="form-label">Filtrar por fecha: </label>
      <input type="date" class="form-control" id="filterDate" v-model="dateFilter">
    </div> -->

    <div v-if="reservations && reservations.length > 0" class="table-responsive-md">
      <table class="table table-striped table-hover caption-top table-bordered">
        <caption>Lista de Reservaciones</caption>
        <thead class="roboto-condensed-regular" >
          <tr>
            <th>Id. Reservación</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>No. Personas</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody class="table-group-divider">
          <tr v-for="reservation in reservations" :key="reservation.id">
            <td>{{ reservation.id }}</td>
            <td>{{ reservation.user ? reservation.user.name : 'None'}}</td>
            <td>{{ reservation.date }}</td>
            <td>{{ reservation.time }}</td>
            <td>{{ reservation.numberPeople}}</td>
            <td>
              <button class="btn btn-danger" @click="deleteRes(reservation.id)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{'disabled': page === 1}">
            <button class="page-link"
              @click="previousPage">
              <font-awesome-icon icon="arrow-left"/>
            </button>
          </li>
          
          <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: pageNumber === page}">
            <button class="page-link" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
          </li>

          <li class="page-item" :class="{'disabled':!hasNextPage}">
            <button class="page-link"
              @click="nextPage">
              <font-awesome-icon icon="arrow-right"/>
            </button>
          </li>
        </ul>
      </nav>

    </div>
    <div v-else>
      No hay reservaciones disponibles.
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { defineComponent, defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
  components: {
    NavbarAdmin: defineAsyncComponent(() => import(/* webpackChuckName: "NavbarAdmin" */ '@/modules/users/components/NavbarAdmin.vue'))
  },

  data() {
    return {
      page: 1,
      limit: 10
    };
  },

  computed: {
    ...mapState('reservation', ['reservations', 'total']),

    hasNextPage () {
      return this.page * this.limit < this.total;
    },

    totalPages () {
      return Math.ceil(this.total / this.limit);
    }
  },

  methods: {
    ...mapActions('reservation', ['getReservations', 'deleteReservation']),


    async previousPage () {
      if (this.page > 1) {
        this.page--;
        await this.getReservations({ page: this.page, limit: this.limit });
      }
    },

    async goToPage (numberPage) {
      this.page = numberPage;
      await this.getReservations({ page: numberPage, limit: this.limit });
    },

    async nextPage () {
      if (this.page * this.limit < this.total) {
        this.page++;
        await this.getReservations({ page: this.page, limit: this.limit });
      }
    },

    async deleteRes (idReservation) {
      const data = await this.deleteReservation(idReservation);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Reservación eliminada correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      await this.getReservations({ page: this.page, limit: this.limit });
    }
  },

  mounted() {
    try {
      this.getReservations({ page: this.page, limit: this.limit });
    } catch (error) {
      
    }
  }
})
</script>

<style scoped>
.table-color {
  background-color: var(--color__secundario);
}
</style>
