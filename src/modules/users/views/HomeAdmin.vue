<template>
  <div class="container">
    <h2 class="lobster-two-regular mt-4">Bienvenido</h2>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

  export default {
    components: {
      NavbarAdmin: defineAsyncComponent(() => import(/* webpackChuckName: "NavbarAdmin" */ '@/modules/users/components/NavbarAdmin.vue'))
    }
  }
</script>

<style scoped>

</style>
