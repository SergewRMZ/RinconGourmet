import User from "@/helpers/User";
import TypeUser from "@/interfaces/user-interface";

interface UserState {
  isLogged: boolean,
  token: string | null,
  message_error: string | null
}

const userStore = {
  namespaced: true,

  state: (): UserState => ({
    isLogged: localStorage.getItem('logged') === 'true',
    token: sessionStorage.getItem('TOKEN') || null,
    message_error: '',
  }),

  mutations: {
    setLoggedIn(state: UserState, isLogin: boolean) {
      state.isLogged = isLogin;
      localStorage.setItem('logged', isLogin.toString());
    },
    
    setToken(state: UserState, token:string | null) {
      state.token = token;
      sessionStorage.setItem('TOKEN', token!);
    },

    setMessage(state: UserState, message:string | null) {
      state.message_error = message;
    }
  },

  actions: {
    async login ({ commit }:any, user:TypeUser) {
      try {
        const data = await User.loginUser(user);
        commit('setToken', data.token);
        commit('setLoggedIn', true); // Establece estado de autenticación
      } 
      
      catch (error:any) {
        commit('setMessage', error.response.data.error);
        throw error;
      }
    },

    async logout ({ commit }: any) {
      sessionStorage.removeItem('TOKEN');
      commit('setLoggedIn', false);
      await new Promise (resolve => setTimeout(resolve, 500));
    }
  }
};

export default userStore;
