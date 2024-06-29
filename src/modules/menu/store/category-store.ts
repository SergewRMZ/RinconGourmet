import CategoryInterface from '@/interfaces/category-interface';
import Category from '../helpers/Category';

interface CategoryState {
  categories: CategoryInterface[] | null;
}

const CategoryStore = {
  namespaced: true,

  state: (): CategoryState => ({
    categories: null,
  }),

  mutations: {
    setCategories (state: CategoryState, categories: CategoryInterface[]) {
      state.categories = categories;
      // console.log('Categorías', state.categories);
    },
  },

  actions: {
    async getCategories ({ commit }:any) {
      const data = await Category.getCategories();
      commit('setCategories', data.categories)
    }
  }
};

export default CategoryStore;
