<template>
  <div class="card">
    <img src="@/assets/products/hamburguesa.webp" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <p>Precio <span class="fw-bold precio__alimento">${{price}}</span></p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

  }
}
</script>

<style lang="scss">
  .precio__alimento {
    color: var(--color__secundario);
  }
</style>