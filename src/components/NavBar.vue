<template>
    <nav class="navbar bg-white border-bottom border-secundary mx-5 row ">
        <div class=" col-lg-4 col-md-3 ">
            <a class="navbar-brand " href="/">
                <img src="@/assets/logo.png" alt="" class="d-inline-block"
                    style="border-radius: 10px;max-height: 3rem;">
                <img src="@/assets/letra.png" alt="" class="d-inline-block" style="max-height: 7rem;">
            </a>
        </div>
        <div class="col-lg-4 col-md-3">
            <router-link :to="{ name: 'register' }"><button type="button" class="btn btn-primary rounded-pill  mx-1"
                    style="width:10rem" v-if="!isLooggedIn">Registro</button></router-link>
            <router-link :to="{ name: 'login' }"><button type="button" class="btn btn-primary rounded-pill  mx-1"
                    style="width:10rem" v-if="!isLooggedIn">Login</button></router-link>
            <button @click="handleSignOut" type="button" class="btn btn-primary rounded-pill mx-1" style="width:10rem"
                v-if="isLooggedIn">Sigout</button>
            <router-link :to="{ name: 'perfil' }"><button type="button" class="btn btn-primary rounded-pill  mx-1"
                    style="width:10rem" v-if="isLooggedIn">Perfil</button></router-link>

        </div>

    </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { RouterLink } from 'vue-router';
import router from '@/router';
export default defineComponent(
    {
        name: "NavBar",
        setup() {
            const isLooggedIn = ref(false)
            let auth: any;
            onMounted(() => {
                auth = getAuth()
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        isLooggedIn.value = true
                    }
                    else {
                        isLooggedIn.value = false
                    }
                })
            });
            const handleSignOut = () => {
                signOut(auth).then(() => {
                    router.push("/")
                })
            };
            return {
                isLooggedIn, handleSignOut
            }

        }

    }
)
</script>