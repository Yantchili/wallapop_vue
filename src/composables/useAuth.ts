import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
    const store = useStore();
    return {
        users: computed(() => store.getters["users/getUser"]),
        fetchUsers: () => store.dispatch("users/fetchUsers"),
    };
};

export default useAuth;
