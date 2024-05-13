<template>
 <div class="text_center lobster-two-bold">
  Menú
 </div>

 <div class="container text-center">
  <div class="row">
    <div class="col-md">
      <Alimento 
        v-bind:name="nombre"
        v-bind:price="price"
        v-bind:description="description"/>
    </div>
    <div class="col-md">
      <Alimento 
        v-bind:name="nombre"
        v-bind:price="price"
        v-bind:description="description"/>
    </div>
    <div class="col-md">
      <Alimento 
        v-bind:name="nombre"
        v-bind:price="price"
        v-bind:description="description"/>
    </div>
    <div class="col-md">
      <Alimento 
        v-bind:name="nombre"
        v-bind:price="price"
        v-bind:description="description"/>
    </div>
  </div>
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