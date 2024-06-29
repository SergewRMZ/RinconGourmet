<template>
 <div class="container text-center">
  <!-- <div class="row">
    <div class="col-md">
      <Alimento 
        v-bind:name="nombre"
        v-bind:price="price"
        v-bind:description="description"/>
    </div>
    
  </div> -->

  <table class="table table-striped table-hover caption-top table-bordered">
      <caption>Menú</caption>
      <thead class="roboto-condensed-regular">
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripción</th>
          <th>Disponible</th>
          <th>Eliminar</th>
        </tr>
      </thead>

      <tbody class="table-group-divider">
        <!-- <tr v-for="reservation in reservations" :key="reservation.id"> -->
        <tr>
          <!-- <td>{{ reservation.id }}</td>
          <td>{{ reservation.user ? reservation.user.name : 'None'}}</td>
          <td>{{ reservation.date }}</td>
          <td>{{ reservation.time }}</td>
          <td>{{ reservation.numberPeople}}</td>
          <td>
            <button class="btn btn-danger" @click="deleteRes(reservation.id)">
              Eliminar
            </button>
          </td> -->
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import Alimento from "../components/Alimento.vue"

export default {
  components: { 
    Alimento 
  },

  data() {
    return {
      nombre: 'Hamburguesa Británica',
      price: '200',
      description: 'Hamburguesa con doble carne, tocino y extra queso' 
    }
  }
  
}
</script>

<style>

</style>