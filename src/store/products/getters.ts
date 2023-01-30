import { ProductSate } from "./state";
import { IState } from "..";
import { GetterTree } from "vuex";

const getters: GetterTree<ProductSate, IState> = {
    getProducts(state) {
        return state.products;
    },
    getIsLoading(state) {
        return state.isLoading;
    },
    getProduct(state) {
        return state.selectedProduct;
    },
    getSearchedProduct(state) {
        return state.searchedProduct
    }
};
export default getters;
