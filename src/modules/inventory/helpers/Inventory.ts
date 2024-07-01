import { Api } from "@/api/api";
import InventoryInterface from '@/interfaces/inventory-interface';

const Inventory = (() => {
  const createInventory = async (inventory: InventoryInterface) => {
    try {
      const token = sessionStorage.getItem('TOKEN');
      if (!token) throw new Error(`No se encontró el token de autenticación`);
      const response = await Api.post('/inventory', inventory, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201)
        return response.data;

      else 
        throw new Error(response.statusText);
    } catch (error) {
      throw error;
    }
  }

  return {
    createInventory
  }
})();

export default Inventory;