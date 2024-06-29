import { Api } from "@/api/api";
import ProductInterface from '@/interfaces/product-interface';

const Product = (() => {
  const crearProducto = async (producto: ProductInterface) => {
    try {
      console.log(producto);
      const token = sessionStorage.getItem('TOKEN');
      if (!token) throw new Error(`No se encontró el token de autenticación`);
  
      const response = await Api.post('/products', producto, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201)
        return response.data;

      else 
        console.log(response.statusText);

    } catch (error) {
      throw error;
    }
  };

  return {
    crearProducto
  }
})();

export default Product;