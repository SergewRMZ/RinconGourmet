import { Api } from "@/api/api";
import OrderInterface from "@/interfaces/order-interface";

const Order = (() => {
  const registerOrder = async (order: OrderInterface) => {
    try {
      const token = sessionStorage.getItem('TOKEN');
      if (!token) throw new Error ('Token de autorización no encontrado');

      const response = await Api.post('/order', order, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response)

      if (response.status === 201) return response.data;
      else throw new Error(response.statusText);
    } catch (error) {
      throw error;
    }
  }

  return {
    registerOrder
  }
})();

export default Order;