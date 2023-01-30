import { UserState } from "./state";
import { IState } from "..";
import { GetterTree } from "vuex";

const getters: GetterTree<UserState, IState> = {
    getUser(state) {
        return state.user;
    }

};
export default getters;
