<template>
    <div class="container-fluid">
        <div v-if="isLoading">
            <CarGando></CarGando>
        </div>

        <div v-else>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="container mt-5 col-8 text-center">
                        <div class="row row-cols-lg-4  row-cols-md-2 row-cols-1">
                            <allProductsList v-for="product in products" :key="product.id" :product="product"
                                @goDetail="goDetail" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import useProducts from "@/composables/useProduct";
import { defineComponent } from "vue";
import allProductsList from "@/components/allProductsList.vue";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";
import CarGando from "@/components/CarGando.vue";

export default defineComponent({
    name: "allProducts",
    components: {
        allProductsList, CarGando
    },
    setup() {
        const { products, isLoading, fetchProducts } = useProducts();
        const router = useRouter();
        fetchProducts();
        return {
            products,
            isLoading,
            goDetail: (product: Product) => {
                console.log("click")
                router.push({ name: "detail", params: { id: product.id } })
            }

        };
    },
});
</script>
