<template>
  <div v-if="isLoading" class="loader__background">
    <span class="loader text-primary"></span>
    <p class="text__processing">Procesando solicitud</p>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>

</style>