import { Api } from "@/api/api";
import ProductInterface from '@/interfaces/product-interface';

const Product = (() => {
  const crearProducto = async (producto: ProductInterface) => {
    try {
      const token = sessionStorage.getItem('TOKEN');
      if (!token) throw new Error(`No se encontró el token de autenticación`);
      console.log('Datos a envíar', producto);
      const response = await Api.post('/products', producto, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201)
        return response.data;

      else 
        throw new Error(response.statusText);

    } catch (error: any) {
      const response = error.response.data.error;
      console.log(response);
      throw response;
    }
  };


  const getProducts = async (page: number, limit: number) => {
    try {
      const token = sessionStorage.getItem('TOKEN');
      if (!token) throw new Error ('No se encontró token de autenticación');

      const response = await Api.get('/products', {params: {page, limit} });

      if (response.status === 201) return response.data;
      else throw new Error (response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    crearProducto,
    getProducts
  }
})();

export default Product;