import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { UserState } from "./state";

const mutations: MutationTree<UserState> = {
    setUsers(state: UserState, user: User[]) {
        state.user = user;
    },
}

export default mutations;
