import { Product } from "@/models/product";

export interface ProductSate {
    products: Product[]
    isLoading: boolean
    selectedProduct: Product | null;
    searchedProduct: Product | null
}

function state(): ProductSate {
    return {
        products: [],
        isLoading: false,
        selectedProduct: null,
        searchedProduct: null
    }
}
export default state;