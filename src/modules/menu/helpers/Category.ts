import { Api } from "@/api/api";
import CategoryInterface from "@/interfaces/category-interface";

const Category = (() => {
  const getCategories = async () => {
    try {
      const token = sessionStorage.getItem('TOKEN');

      if (!token) {
        throw new Error(`No se encontró el token de autenticación`);
      }

      const response = await Api.get('/categories', { params: {page: 1, limit: 10} });
      if (response.status === 200)
        return response.data;

      else 
        console.log(response.statusText);

    } catch (error) {
      throw error;
    }
  };

  return {
    getCategories
  }
})();

export default Category;