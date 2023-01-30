<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="card mb-3 col-5 border-0 mt-5 ">
                <h4 class="card-title md-5" v-modal="">Bienvenido, {{ users.name }} ...</h4>
                <div class="row justify-content-center mt-5"><img src="
                https://picsum.photos/500/500" class="card-img-top img-thumbnai" alt="..." style="width: 50%;"></div>
                <div class="card-body">
                    <p class="card-text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolores
                        quod.
                        Nam impedit reiciendis unde quasi similique laudantium. Sunt cum fuga natus dolorem architecto
                        corrupti expedita illo adipisci harum molestias!</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>

</template>
<script lang="ts">
import useAuth from "@/composables/useAuth"
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
    name: "PerfilView",
    setup() {
        const { fetchUsers, users } = useAuth()
        fetchUsers()
        return {
            users
        }



        // const db = getFirestore()
        // const user = getAuth().currentUser;
        // let userInfo
        // onAuthStateChanged(getAuth(), async (user: any) => {
        //     const q = query(collection(db, "users"), where("uid", "==", user.uid))
        //     const querySnapshot = await getDocs(q)
        //     querySnapshot.forEach((doc) => {
        //         userInfo = doc.data()
        //         console.log("in", userInfo.name)
        //     });

        // })
        // return {
        //     db, user, userInfo

        // }

    }
}
);
</script>