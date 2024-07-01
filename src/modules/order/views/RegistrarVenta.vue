<template>
  <div class="container">
    <h2 class="mt-3 fw-bold lobster-two-regular text-center">Registrar Venta</h2>

    <!-- Sección del Cliente -->
    <div class="row justify-content-center mt-3">
      <div class="w-75">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h5 class="card-title lobster-two-regular">Datos del Cliente</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="RegistrarVenta">
              <div class="mb-3">
                <label for="clientName" class="form-label">Nombre del Cliente</label>
                <input type="text" v-model="clientName" id="clientName" class="form-control" placeholder="Nombre del cliente" required>
              </div>

              <div class="mb-3">
                <label for="saleDate" class="form-label">Fecha</label>
                <input type="date" v-model="saleDate" id="saleDate" class="form-control" required>
              </div>

              <div class="mb-3">
                <label for="saleTime" class="form-label">Hora</label>
                <input type="time" v-model="saleTime" id="saleTime" class="form-control" required>
              </div>

              <div class="mb-3">
                <label for="paymentMethod" class="form-label">Método de Pago</label>
                <select v-model="paymentMethod" id="paymentMethod" class="form-control" required>
                  <option value="" disabled selected>Seleccione el método de pago</option>
                  <option value="cash">Efectivo</option>
                  <option value="credit">Tarjeta de Crédito</option>
                </select>
              </div>

              <!-- Sección de Productos Seleccionados -->
              <div v-if="productsSelected.length > 0">
                <ul class="list-unstyled text-start">
                  <li v-for="(product, index) in productsSelected" :key="index">
                    {{ product.name }} - ${{ product.price }}
                  </li>
                </ul>
              </div>
              <!-- Fin de Sección de Productos Seleccionados -->

              <button class="btn btn-success" type="submit">
                Registrar Venta
              </button>
            </form>

            

          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Productos -->
    <div class="row justify-content-center mt-3">
      <div class="w-75">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="productName" class="form-label">Buscar Producto</label>
              <input type="text" v-model="searchProduct" @input="searchProducts" id="productName" class="form-control" placeholder="Buscar producto...">
            </div>

            <div class="list-group">
              <a class="list-group-item list-group-item-action text-start" v-for="product in filteredProducts" :key="product.id" @click="selectProduct(product)">
                {{ product.name }} - <span class="text-success fw-bold">${{ product.price }}</span>
              </a>
            </div>

            <!-- Modal flotante con CSS -->
            <div class="modal" v-if="selectedProduct">
              <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <h5>Producto Seleccionado:</h5>
                <div class="text-start">
                  <p><strong>ID:</strong> {{ selectedProduct.id }}</p>
                  <p><strong>Categoría:</strong> {{ selectedProduct.category.name }}</p>
                  <p><strong>Nombre:</strong> {{ selectedProduct.name }}</p>
                  <p><strong>Precio:</strong> <span class="text-success fw-bold">${{ selectedProduct.price }}</span></p>
                </div>
                <button type="button" class="btn btn-primary" @click="addItem">Agregar Producto</button>
              </div>
            </div>
            <!-- Fin de Modal flotante con CSS -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      clientName: '',
      searchProduct: '',
      saleDate: '',
      saleTime: '',
      paymentMethod: '',
      page: 1,
      limit: 10,
      filteredProducts: [],
      selectedProduct: null,
      productsSelected: [],
      total: 100
    };
  },

  computed: {
    ...mapState('product', ['products', 'total']),
  },

  methods: {
    ...mapActions('product', ['getProducts']),
    ...mapActions('order', ['registerOrder']),

    searchProducts() {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchProduct.toLowerCase())
      );
    },

    selectProduct(product) {
      this.selectedProduct = product;
    },

    addItem() {
      if (this.selectedProduct) {
        this.productsSelected.push(this.selectedProduct);
        this.closeModal(); // Cerrar el modal después de agregar el producto
      }
    },

    closeModal() {
      this.selectedProduct = null;
      document.body.style.overflow = ''; // Restaurar scroll cuando se cierra el modal
    },

    async RegistrarVenta () {
      try {
        const productsId = this.productsSelected.map(product => product.id);
        console.log(productsId)
        const data = {
          date: this.saleDate,
          time: this.saleTime,
          paymentMethod: this.paymentMethod,
          total: this.total,
          products: productsId
        }


        await this.registerOrder(data);
      } catch (error) {
        
      }
    }
  },

  async mounted () {
    await this.getProducts({ page: this.page, limit: this.limit });
  }
};
</script>

<style scoped>
/* Estilos específicos de Vue.js */
.list-group {
  margin-top: 10px;
}

/* Estilos del modal flotante */
.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  overflow: auto;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
