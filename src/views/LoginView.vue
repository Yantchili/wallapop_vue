<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col"></div>
            <div class="col-md-4 col-lg-4">
                <form @submit.prevent="onSubmit">
                    <div class="mb-5 text-center">
                        <h1>Login</h1>
                    </div>
                    <div class=" mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input v-model="userForm.email" type="email" class="form-control">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input v-model="userForm.password" type="password" class="form-control"
                            id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
                <div class="mb-5 text-center">
                    <router-link :to="{ name: 'register' }">¿No tienes cuenta?</router-link>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
export default {
    setup() {
        const router = useRouter()
        const userForm = ref({
            name: '',
            email: '',
            password: '',
        })

        return {
            userForm,
            onSubmit: () => {
                console.log("login ok!")
                signInWithEmailAndPassword(getAuth(), userForm.value.email, userForm.value.password).then((data) => {
                    router.push({ name: 'perfil' })
                })
            }

        }
    }

}
</script>
<style scoped>

</style>