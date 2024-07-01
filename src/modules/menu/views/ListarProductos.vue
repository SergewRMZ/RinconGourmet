<template>
 <div class="container text-center">
  <div class="d-flex justify-content-center align-items-center gap-3 mt-5">
    <div class="w-50">
      <input
        type="text"
        class="form-control"
        v-model="searchQuery"
        placeholder="Buscar por nombre o categoría"
      />
    </div>

    1

    <div class="btn btn-primary" @click="buscarProductos">Buscar</div>
  </div>

  <h3 class="mt-3 text-start text-primary">Registros: {{ total }}</h3>
  
  <table class="table table-striped table-hover caption-top table-bordered mt-3">
      <thead class="roboto-condensed-regular">
        <tr>
          <th>Id</th>
          <th>Categoría</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Disponible</th>
          <th>Eliminar</th>
        </tr>
      </thead>

      <tbody class="table-group-divider">
        <tr v-for="product in filteredProducts" :key="product.id">
          <td class="text-start">{{ product.id }}</td>
          <td class="text-start">{{ product.category.name }}</td>
          <td class="text-start">{{ product.name }}</td>
          <td class="text-success fw-bold">${{ product.price }}</td>
          <td>{{ product.available ? 'Si' : 'No' }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteProducto(product.id)">
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
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      page: 1,
      limit: 10,
      cantidad: 10,
      searchQuery: ''
    };
  },

  methods: {
    ...mapActions('product', ['getProducts']),

    async previousPage () {
      if (this.page > 1) {
        this.page--;
        await this.getProducts({ page: this.page, limit: this.limit })
      }
    },

    async goToPage (numberPage) {
      this.page = numberPage;
      await this.getProducts({ page: this.page, limit: this.limit })
    },

    async nextPage () {
      if (this.page * this.limit < this.total) {
        this.page++;
        await this.getProducts({ page: this.page, limit: this.limit });
      }
    },

    async buscarProductos() {
      await this.getProducts({ page: this.page, limit: this.cantidad });
    },
  },

  computed: {
    ...mapState('product', ['products', 'total']),

    hasNextPage () {
      return this.page * this.limit < this.total;
    },

    totalPages () {
      return Math.ceil(this.total / this.limit);
    },

    filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      if (!this.products) {
        return [];
      }
      return this.products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.name.toLowerCase().includes(query)
      );
    },

    paginatedFilteredProducts() {
      const start = (this.page - 1) * this.limit;
      const end = this.page * this.limit;
      return this.filteredProducts.slice(start, end);
    },
  },  

  async mounted() {
    await this.getProducts({ page: this.page, limit: this.limit });
  }
  
}
</script>

<style>

</style>