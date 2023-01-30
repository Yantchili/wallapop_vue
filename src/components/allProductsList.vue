<template>
    <div class="user-item">
        <div class="card mb-3 col " style="border: 0ch;">
            <div class="">
                <div class="row">
                    <img @click="$emit('goDetail', product)" style="width: 222px;height: 220px; border-radius: 16px;"
                        :src="product.images[0]" :alt="product.title" />
                </div>
            </div>
        </div>
        <div class="user-info">
            <div class="card-body">
                <h6 class="card-title fw-bold">
                    {{ product.title }}
                </h6>
                <h6 class="card-title fw-normal">
                    {{ product.price }}€
                </h6>

            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { Product } from "@/models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "allProductsList",
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
    },
});
</script>