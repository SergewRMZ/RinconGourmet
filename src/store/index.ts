import { createStore } from "vuex";
import userStore from "../modules/users/store/user-store";
import ReservationStore from "@/modules/reservation/store/reservation-store";
import CategoryStore from "@/modules/menu/store/category-store";
import ProductStore from "@/modules/menu/store/product-store";
import inventoryStore from "@/modules/inventory/store/inventory-store";
import OrderStore from "@/modules/order/store/order-store";

export default createStore({
  modules: {
    user: userStore,
    reservation: ReservationStore,
    category: CategoryStore,
    product: ProductStore,
    inventory: inventoryStore,
    order: OrderStore
  }
});