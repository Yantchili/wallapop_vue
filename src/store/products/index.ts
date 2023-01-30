import { IState } from "..";
import { ProductSate } from "./state";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { Module } from "vuex";
const productsModule: Module<ProductSate, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default productsModule;