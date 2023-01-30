<template>
    <div class="container-fluid">
        <div v-if="isLoading">
            <CarGando></CarGando>
        </div>

        <div v-else>
            <div class="container-fluid" v-if="searchedproduct.length > 0">
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
            <div v-else>
                <NoResult></NoResult>
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
    </div>

</template>
<script lang="ts">
import useProducts from "@/composables/useProduct";
import { defineComponent } from "vue";
import allProductsList from "@/components/allProductsList.vue";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";
import CarGando from "@/components/CarGando.vue";
import NoResult from "@/components/NoResult.vue";
export default defineComponent({
    name: "searchedProduct",
    components: {
        allProductsList, CarGando, NoResult,

    },
    props: {
        title: {
            type: String,
            required: true,
        },
        // id: {
        //     type: Number,
        //     required: true,
        // },
    },
    setup(props) {
        const { product, searchedproduct, isLoading, searchProduct, fetchProducts, products } = useProducts();
        const router = useRouter();
        fetchProducts()
        searchProduct(props.title)
        return {
            searchedproduct,
            isLoading,
            product,
            products,
            goDetail: (product: Product) =>
                router.push({ name: "detail", params: { id: product.id } })
        };
    },
});
</script>
