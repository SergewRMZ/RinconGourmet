import ProductInterface from '@/interfaces/product-interface';
import Product from '../helpers/Product';

interface ProductState {
  products: ProductInterface[] | null;
  total: number | null;
}

const ProductStore = {
  namespaced: true,

  state: (): ProductState => ({
    products: null,
    total: null,
  }),

  mutations: {
    setProducts (state: ProductState, products: ProductInterface[]) {
      state.products = products;
    },

    setTotal (state: ProductState, total: number) {
      state.total = total;
    }
  },

  actions: {
    async getProducts ({commit}:any, {page, limit}: {page: number, limit: number}) {
      try {
        const data = await Product.getProducts(page, limit);
        commit('setProducts', data.products);
        commit('setTotal', data.total);

        console.log(data);
      } catch (error) {
        throw error;
      }
    }
  }
};

export default ProductStore;
