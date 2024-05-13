import { reservationsApi } from "@/api/api";
import ReservationInterface from "@/interfaces/reservation-interface";

interface ReservationState {
  reservations: ReservationInterface[] | null,
  isLoading: boolean | null,
  error: string | null,
};


const ReservationStore = {
  namespaced: true,

  state: (): ReservationState => ({
    reservations: [],
    isLoading: false,
    error: null
  }),

  mutations: {
    setReservations (state: ReservationState, reservations: ReservationInterface[]) {
      state.reservations = reservations;
    }
  },

  actions: {
    async getReservations ({ commit }:any) {
      try {
        const response = await reservationsApi.get('');
        const reservations = response.data.reservations;
        commit('setReservations', reservations);
      } catch (error:any) {
        commit('error', error.response.data.error);
      }
    },
  },
}

export default ReservationStore;