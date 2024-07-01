import { reservationsApi } from "@/api/api";
import OrderInterface from "@/interfaces/order-interface";
import ProductInterface from "@/interfaces/product-interface";
import Order from "../helpers/Order";

interface OrderState {
};


const OrderStore = {
  namespaced: true,

  state: (): OrderState => ({
  }),

  mutations: {
    
  },

  actions: {
    async registerOrder ({ commit }: any, order: OrderInterface) {
      try {
        const data = await Order.registerOrder(order);
        console.log(data);
      } catch (error) {
        throw error;
      }
    }
  },
}

export default OrderStore;