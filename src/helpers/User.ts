import { usersApi } from "@/api/api";
import User from "@/interfaces/user-interface";

const User = (() => {

  const loginUser = async (user: User) => {
    try {
      const response = await usersApi.post('/login', user);
      if (response.status === 200)
        return response.data;

      else 
        console.log(response.statusText);

    } catch (error) {
      console.error('Error al iniciar sesión');
      throw error;
    }
  };

  const registerUser = async (user: User) => {
    try {
      const token = sessionStorage.getItem('TOKEN');
      if(!token) throw new Error('No se encontró el token de autenticación');
      const response = await usersApi.post('/register', user, {
        headers:{
          'Authorization' : `Bearer ${token}`
        }
      })
      if(response.status === 200)
          return response.data;
      else
          console.log(response.statusText);
    } catch (error) {
      console.error('Error al registrar usuario');
      throw error;
    }
  };

  const validateEmail = async () => {
    try {
      const token = sessionStorage.getItem('TOKEN');
      if(!token) throw new Error('No se encontró el token de autenticación');
      const response = await usersApi.get(`/validate-email/${token}`)
      
     return response.data;
    } catch (error) {
      console.error('Error al registrar usuario');
      throw error;
    }
  }


  return {
    loginUser,
    registerUser,
    validateEmail
  }

})();

export default User;