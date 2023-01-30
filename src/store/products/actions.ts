import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ProductSate } from "./state";
import { IState } from "..";
import { ActionTree } from "vuex";
const actions: ActionTree<ProductSate, IState> = {
    async fetchProducts({ commit }: { commit: any }) {
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);

        // obtenemos los datos de manera asíncrona
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
            "/products"
        );

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state users
        commit("setProducts", data);
    },
    async fetchProductById({ commit }: { commit: any }, productId: number) {
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);

        // obtenemos los datos de manera asíncrona
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
            `/products/${productId}`
        );

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);
        // usamos la mutación para volcar los datos obtenidos en la variable del state users
        commit("setSelectedProduct", data);
    },
    async searchProduct({ commit }: { commit: any }, title: string) {
        commit("setIsLoading", true);
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
            `/products/?title=${title}`
        );
        commit("setIsLoading", false);
        commit("setSearchedProduct", data);
    },

};

export default actions;
