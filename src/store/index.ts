
import usersModule from './users';
import { createStore } from 'vuex'
import productsModule from './products';
export interface IState {
  authUser: null;
}

export default createStore<IState>({
  modules: {
    products: productsModule,
    users: usersModule
  }
})
