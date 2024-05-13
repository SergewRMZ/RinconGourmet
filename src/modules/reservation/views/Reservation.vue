<template>
  <div class="container">
    <h2 class="lobster-two-regular mt-4">Reservaciones</h2>
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
              <button class="btn btn-danger" @click="deleteReservation(reservation.id)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-primary btn-lg">
          <font-awesome-icon icon="arrow-left"/>
        </button>
        
        <button class="btn btn-primary btn-lg">
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>

    </div>
    <div v-else>
      No hay reservaciones disponibles.
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
  components: {
    NavbarAdmin: defineAsyncComponent(() => import(/* webpackChuckName: "NavbarAdmin" */ '@/modules/users/components/NavbarAdmin.vue'))
  },

  computed: {
    ...mapState('reservation', ['reservations']),
  },

  methods: {
    ...mapActions('reservation', ['getReservations']),

    deleteReservation: async (reservationId) => {
      console.log('Eliminar reservación: ', reservationId);
    }
  },

  mounted() {
    this.getReservations(); // Llama a la acción getReservations cuando el componente se monta
  }
})
</script>

<style scoped>
.table-color {
  background-color: var(--color__secundario);
}
</style>
