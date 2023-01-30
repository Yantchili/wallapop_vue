
import { User } from "@/models/user";
import { UserState } from "./state";
import { IState } from "..";
import { ActionTree } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDoc, doc, query, where, getDocs } from "firebase/firestore";
const actions: ActionTree<UserState, IState> = {
    async fetchUsers({ commit }: { commit: any }) {
        const auth = getAuth()
        const db = getFirestore()
        const user = auth.currentUser;
        let userInfo
        if (user) {
            const q = query(collection(db, "users"), where("uid", "==", user.uid))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                userInfo = doc.data()
                console.log(userInfo)
            })
        }

        commit("setUsers", userInfo);

    }


};

export default actions;
