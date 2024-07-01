import User from "@/helpers/User";
import TypeUser from "@/interfaces/user-interface";

interface UserState {
  isLogged: boolean,
  token: string | null,
  userId: string | null, 
  name: string | null,
  email: string | null,
  message_error: string | null,
  email_validated: string | null
}

const userStore = {
  namespaced: true,

  state: (): UserState => ({
    isLogged: sessionStorage.getItem('logged') === 'true',
    token: sessionStorage.getItem('TOKEN') || null,
    message_error: '',
    userId: sessionStorage.getItem('userId') || null, 
    name: sessionStorage.getItem('nombre') || null,
    email: sessionStorage.getItem('email') || null,
    email_validated: sessionStorage.getItem('email_validated') || null,
  }),

  mutations: {
    setLoggedIn(state: UserState, isLogin: boolean) {
      state.isLogged = isLogin;
      sessionStorage.setItem('logged', isLogin.toString());
    },
    
    setToken(state: UserState, token: string | null) {
      state.token = token;
      sessionStorage.setItem('TOKEN', token!);
    },

    setUserId(state: UserState, id: string | null) {
      state.userId = id;
      sessionStorage.setItem('userId', id!);
    },

    setName(state: UserState, name: string | null) {
      state.name = name;
      sessionStorage.setItem('nombre', name!);
    },

    setEmail(state: UserState, email: string | null) {
      state.email = email;
      sessionStorage.setItem('email', email!);
    },

    setMessage(state: UserState, message: string | null) {
      state.message_error = message;
    },

    setEmailValidated (state: UserState, email_validated: string) {
      sessionStorage.setItem('email_validated', email_validated!);
    }
  },

  actions: {
    async login ({ commit }: any, user: TypeUser) {
      try {
        const data = await User.loginUser(user);
        if (data.user.role[0] !== 'ADMIN_ROLE') throw new Error('Acceso denegado, necesitas ser administrador');

        console.log(data);
        commit('setToken', data.token);
        commit('setName', data.user.name);
        commit('setEmail', data.user.email);
        commit('setUserId', data.user.id);
        commit('setLoggedIn', true); 
      } catch (error: any) {
        commit('setMessage', error.response ? error.response.data.error : error.message);
        commit('setLoggedIn', true);
        commit('setEmailValidated', data.user.emailValidated) 
      } 
      
      catch (error:any) {
        commit('setMessage', error.response ? error.response.data.error : error);
        throw error;
      }
    },

    async registerUser({ commit }: any, user: TypeUser) {
      try {
        const data = await User.registerUser(user);
        console.log(data);
        return data;
      } catch (error: any) {
        commit('setMessage', error.response ? error.response.data.error : error.message);
        throw error;
      }
    },

    async logout({ commit }: any) {
    async validateEmail ({ commit }: any) {
      try {
        const data = await User.validateEmail();
        console.log(data);
        return data;
      } catch (error) {
        
      }
    },

    async logout ({ commit }: any) {
      sessionStorage.removeItem('TOKEN');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('nombre');
      sessionStorage.removeItem('logged');
      
      commit('setLoggedIn', false);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
};

export default userStore;
