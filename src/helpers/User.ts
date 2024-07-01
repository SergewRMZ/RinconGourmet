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

  return {
    loginUser,

  }

})();

export default User;