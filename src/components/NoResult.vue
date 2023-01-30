<template>
    <div class="container mt-5">
        <h1 class="fs-4 fw-semibold">Lo sentimos, no se encuentran anuncios relativos
        </h1>
        <div class="row mb-5">
            <div class="col"></div>
            <img class="col" src="../assets/sad.png" alt="" style="max-width: 250px;">
            <div class="col"></div>
        </div>

        <div class="row mt-5">
            <div class="col"></div>
            <h2 class="fs-5 fw-semibold mb-5">Te podrían interesar los siguientes
                artículos...
            </h2>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent(
    {
        name: "NoResult",
    }
)
</script>