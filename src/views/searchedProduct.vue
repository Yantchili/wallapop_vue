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
                            <allProductsList v-for="product in searchedproduct" :key="product.id" :product="product"
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
    name: "searchedProduct",
    components: {
        allProductsList, CarGando,

    },
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const { product, searchedproduct, isLoading, searchProduct } = useProducts();
        const router = useRouter();
        searchProduct(props.title)
        return {
            searchedproduct,
            isLoading,
            product,
            goDetail: (product: Product) =>
                router.push({ name: "detail", params: { id: product.id } })
        };
    },
});
</script>
