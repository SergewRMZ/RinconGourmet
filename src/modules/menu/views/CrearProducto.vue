<template>
  <div class="container">

    <div class="card w-50 mx-auto mt-5">
      <div class="card-body">
        <h5 class="card-title mt-3">Crear Producto</h5>
        <form @submit.prevent="crearProducto">
          <div class="mb-5">
            <input
              v-model="name"
              type="text"
              class="form-control mt-3"
              placeholder="Nombre del producto"
              required
            />

            <input
              v-model="description"
              type="text"
              class="form-control mt-3"
              placeholder="Descripción"
              required
            />

            <input
              v-model="price"
              type="number"
              class="form-control mt-3"
              placeholder="Precio"
              required
            />

            <select class="form-select mt-3" v-model="idCategory" aria-label="Default select example">
              <option value="" disabled selected>Seleccionar categoría</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{  category.name }}
              </option>
            </select>

            <div class="mt-3">
              <label for="image" class="form-label">Subir Imagen</label>
              <input 
                @change="onFileChange"
                class="form-control" 
                type="file" 
                id="image"
                accept="image/*"
              />
            </div>

            <button class="btn btn-primary mt-5 w-100" type="submit">
              Envíar
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<script>
import { Api } from '@/api/api';
import { mapActions, mapState } from 'vuex';
import Product from '../helpers/Product';
import { mostrarError, mostrarMensaje } from '@/alerts/alerts';

export default {
  data () {
    return {
      name: 'Pay de Limón',
      description: 'Pay de limón delicioso',
      price: 50,
      idCategory: '',
      image: null,
    }
  },

  computed: {
    ...mapState({
      categories: state => state.category.categories,
      token: state => state.user.token
    })
  },

  methods: {
    ...mapActions('category', ['getCategories']),
    async crearProducto () {
      const formData = new FormData();
      formData.append('file', this.image);

      try {
        const response = await Api.post('/upload/single/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const data = {
          name: this.name,
          description: this.description,
          price: this.price,
          category: this.idCategory,
          img: response.data.fileName
        }

        const responseProducto = await Product.crearProducto(data);
        console.log(responseProducto);
      } catch (error) {
        console.log(error);
        mostrarError('Error', error);
      }
    },

    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.image = file;
      }
    },
  },

  mounted() {
    try {
      this.getCategories();
    } catch (error) {
      
    }
  }
}
</script>
