import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ProductSate } from "./state";

const mutations: MutationTree<ProductSate> = {
    setProducts(state: ProductSate, products: Product[]) {
        state.products = products;
    },
    setIsLoading(state: ProductSate, value: boolean) {
        state.isLoading = value;
    },
    setSelectedProduct(state: ProductSate, product: Product) {
        state.selectedProduct = product;
    },
    setSearchedProduct(state: ProductSate, product: Product) {
        state.searchedProduct = product
    }
};

export default mutations;
