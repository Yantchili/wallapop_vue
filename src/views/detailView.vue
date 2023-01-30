<template>
    <div class="row mt-5" v-if="!isLoading && product">
        <div class="col container"></div>
        <div class="card col-6 " style="border: 0ch;">
            <div class="row justify-content-center mt-2">
                <img :src="product.images" class="cols" alt="..." style="border-bottom: 0ch; border-radius: 10%;">
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    {{ product.title }}
                </h5>
                <p class="card-text">
                    #{{ product.category.name }}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bold fs-4">
                    {{ product.price }}€
                </li>
            </ul>
            <div class="card-body">
                <div class="rol mt-2">
                    <p> {{ product.description }}</p>
                </div>
            </div>
        </div>
        <div class="col"></div>
    </div>
    <div v-else>
        <CarGando />
    </div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProduct";
import { defineComponent } from "vue";
import CarGando from "@/components/CarGando.vue";

export default defineComponent({
    components: {
        CarGando
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const { product, fetchProductById, isLoading } = useProducts();
        fetchProductById(props.id);
        return {
            product,
            isLoading
        };
    },
});
</script>

