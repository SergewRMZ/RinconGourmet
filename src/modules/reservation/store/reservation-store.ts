import { reservationsApi } from "@/api/api";
import ReservationInterface from "@/interfaces/reservation-interface";

interface ReservationState {
  total: number | null,
  reservations: ReservationInterface[] | null,
  isLoading: boolean | null,
  error: string | null,
};


const ReservationStore = {
  namespaced: true,

  state: (): ReservationState => ({
    total: 0,
    reservations: [],
    isLoading: false,
    error: null
  }),

  mutations: {
    setReservations (state: ReservationState, reservations: ReservationInterface[]) {
      state.reservations = reservations;
    },

    setTotal (state: ReservationState, total: number) {
      state.total = total;
    },

    setError (state: ReservationState, error: string) {
      state.error = error;
    }
  },

  actions: {
    async getReservations ({ commit }:any, {page, limit}: {page:number, limit:number}) {
      try {
        const response = await reservationsApi.get('', { params: {page, limit} });
        const reservations = response.data.reservations;
        commit('setReservations', reservations);
        commit('setTotal', response.data.total);
      } catch (error:any) {
        commit('setError', error.response.data.error);
        console.log(error);
      }
    },

    async deleteReservation ({ commit }: any, id:string) {
      try {
        console.log('ID recibida', id);
        const token = sessionStorage.getItem('TOKEN');

        if (!token) {
          throw new Error('Token not found');
        }

        const response = await reservationsApi.delete(`${ id }`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
}

export default ReservationStore;