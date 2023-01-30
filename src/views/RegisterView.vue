<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col"></div>
            <div class="col-md-4 col-lg-4">
                <form @submit.prevent="register">
                    <div class="mb-5 text-center">
                        <h1>Register</h1>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
                        <input v-model="userForm.name" type="text" class="form-control" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" v-model="userForm.email">

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input v-model="userForm.password" type="password" class="form-control">
                    </div>

                    <button type="submit" class="btn btn-primary"> Crear cuenta</button>
                </form>
                <div class="">
                    <router-link :to="{ name: 'login' }">¿Ya tienes cuenta?</router-link>
                </div>
            </div>
            <div class="col-md-4 col-lg-4"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
export default {
    name: "RegisterView",

    setup() {
        const router = useRouter()
        const userForm = ref({
            name: '',
            email: '',
            password: '',
        })
        const db = getFirestore()
        return {
            userForm, db,
            register: () => {
                createUserWithEmailAndPassword(getAuth(), userForm.value.email, userForm.value.password)
                    .then(async (cred) => {

                        const docRef = await addDoc(collection(db, "users"), {
                            name: userForm.value.name,
                            email: cred.user.email,
                            uid: cred.user.uid
                        })
                    })
                    .then(() => {
                        router.push({ name: 'perfil' })
                    })
            }

        }
    }

}
</script>

