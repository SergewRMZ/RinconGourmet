import InventoryInterface from "@/interfaces/inventory-interface";
import Inventory from "../helpers/Inventory";

interface InventoryState {
  inventories: InventoryInterface[];
}

const inventoryStore = {
  namespaced: true,

  state: (): InventoryState => ({
    inventories: [],
  }),

  mutations: {
    setInventories (state: InventoryState, inventories: InventoryInterface[]) {
      state.inventories = inventories;
    }
  },

  actions: {
    async createInventory({ commit }: any, inventory: InventoryInterface) {
      try {
        const data = await Inventory.createInventory(inventory);
        console.log(data);
      } catch (error) {
        throw error;
      }
    }
  }
}

export default inventoryStore;
