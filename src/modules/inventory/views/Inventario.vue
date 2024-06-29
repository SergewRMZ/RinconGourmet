<template>
  <div class="container">
    <h1 class="lobster-two-regular mt-4">Inventario</h1>    <div class="content">
      <div class="inventory-form">
        <h2>Agregar Nuevo Producto</h2>
        <div class="form-group">
          <label>Nombre del Producto</label>
          <input v-model="newItem.nombre" placeholder="Nombre del Producto">
        </div>
        <div class="form-group">
          <label>Precio Unitario ($)</label>
          <input v-model.number="newItem.precio" type="number" placeholder="Precio Unitario">
        </div>
        <div class="form-group">
          <label>Cantidad (kg)</label>
          <input v-model.number="newItem.cantidad" type="number" placeholder="Cantidad (kg)">
        </div>
        <button class="btn-add" @click="addNewItem">Agregar Producto</button>
      </div>
      <div class="inventory-list" v-if="inventory.length > 0">
        <table>
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
              <td>\${{ item.precio.toFixed(2) }}</td>
              <td>{{ item.cantidad }} kg</td>
              <td>\${{ (item.precio * item.cantidad).toFixed(2) }}</td>
              <td>
                <button class="btn-action" @click="removeItem(item.id)">-</button>
                <button class="btn-action" @click="addItem(item.id)">+</button>
                <button class="delete-button" @click="deleteItem(item.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No hay productos en el inventario.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: [],
      newItem: {
        nombre: '',
        precio: 0,
        cantidad: 0
      }
    };
  },
  methods: {
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
    addNewItem() {
      if (this.newItem.nombre && this.newItem.precio > 0 && this.newItem.cantidad > 0) {
        const newItem = { ...this.newItem, id: Date.now() };
        this.inventory.push(newItem);
        this.newItem = { nombre: '', precio: 0, cantidad: 0 };
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
  max-width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.inventory-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
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

.btn-add {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #218838;
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

.inventory-list th {
  background-color: #f2f2f2;
}

.inventory-actions button {
  padding: 5px 10px;
  margin: 0 5px;
}

.btn-action {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.btn-action:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: darkred;
}

p {
  font-size: 18px;
  color: #555;
}
</style>
