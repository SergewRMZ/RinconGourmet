import { createStore } from "vuex";
import userStore from "../modules/users/store/user-store";
import ReservationStore from "@/modules/reservation/store/reservation-store";

export default createStore({
  modules: {
    user: userStore,
    reservation: ReservationStore,
  }
});