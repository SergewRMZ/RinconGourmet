<template>
  <div class="container">
    <h1 class="lobster-two-regular mt-4">Inventario</h1>    <div class="content">
      
      <div class="inventory-form mt-4">
        <h2>Agregar Producto</h2>
        <div class="form-group">
          <input v-model="newItem.nombre" placeholder="Nombre del Producto">
        </div>
        <div class="form-group">
          <label>Precio Unitario ($)</label>
          <input v-model.number="newItem.precio" type="number" placeholder="Precio Unitario">
        </div>
        <div class="form-group">
          <label>Cantidad</label>
          <input v-model.number="newItem.cantidad" type="number" placeholder="Cantidad (kg)">
        </div>
        <div>
          <button class="btn btn-success mt-3 me-2" @click="addNewItem">Agregar Producto</button>
          <button class="btn btn-primary mt-3 me-2" @click="generateReport">Generar reporte</button>
        </div>
      </div>


      <div class="inventory-list mt-4" v-if="inventory.length > 0">
        <table class="table table-hover table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Costo Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in inventory" :key="item.id">
              <td>{{ item.nombre }}</td>
              <td class="text-success fw-bold">\${{ item.precio.toFixed(2) }}</td>
              <td>{{ item.cantidad }} kg</td>
              <td>\${{ (item.precio * item.cantidad).toFixed(2) }}</td>
              <td class="d-flex justify-content-center">
                <button class="btn btn-primary me-2" @click="removeItem(item.id)">-</button>
                <button class="btn btn-primary me-2" @click="addItem(item.id)">+</button>
                <button class="btn btn-danger" @click="deleteItem(item.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="mt-4 container w-50">
        <p class="fw-bold fs-4 text-danger">No hay productos en el inventario.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarError, mostrarMensaje } from '@/alerts/alerts';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      // inventory: [
      //   { id: 1, nombre: 'Manzanas', precio: 2.5, cantidad: 10 },
      //   { id: 2, nombre: 'Naranjas', precio: 3.0, cantidad: 8 },
      //   { id: 3, nombre: 'Plátanos', precio: 1.2, cantidad: 15 },
      // ],
      inventory: [],
      newItem: {
        nombre: '',
        precio: 0,
        cantidad: 0
      },

      month: '',
    };
  },

  methods: {
    ...mapActions ('inventory', ['createInventory']),

    addItem(id) {
      const item = this.inventory.find(item => item.id === id);
      item.cantidad++;
    },

    removeItem(id) {
      const item = this.inventory.find(item => item.id === id);
      if (item.cantidad > 0) {
        item.cantidad--;
      }
    },

    deleteItem(id) {
      this.inventory = this.inventory.filter(item => item.id !== id);
    },

    getCurrentDate () {
      const date = new Date();
      return date.toISOString().split('T')[0];
    },    

    addNewItem() {
      if (this.newItem.nombre && this.newItem.precio > 0 && this.newItem.cantidad > 0) {
        const newItem = { ...this.newItem, id: Date.now() };
        this.inventory.push(newItem);
        this.newItem = { nombre: '', precio: 0, cantidad: 0 };
      }
    },

    async generateReport () {
      try {
        const data = {
          month: this.getCurrentDate(),
          products: this.inventory,
        };

        await this.createInventory(data);
        mostrarMensaje('Operación exitósa', 'Inventario registrado correctamente');
      } catch (error) {
        mostrarError('Error', error.response.data.error);
      }
    }
  }
};
</script>

<style>
.inventory-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.inventory-form {
  flex: 1;
  max-width: 500px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.inventory-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.inventory-list {
  flex: 2;
}

.inventory-list table {
  width: 100%;
  border-collapse: collapse;
}

.inventory-list th, .inventory-list td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #333;
}

.inventory-actions button {
  padding: 5px 10px;
  margin: 0 5px;
}

p {
  font-size: 18px;
  color: #555;
}
</style>
