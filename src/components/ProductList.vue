<template>
    <div v-if="products" class="product-list">
        <div v-for="product in products" :key="product.id">
            <SingleProduct :product="product"/>
        </div>
    </div>
    <div v-else>
        <Loader />
    </div>
</template>

<script>
    import SingleProduct from './SingleProduct.vue'
    import Loader from './Loader.vue'

    export default {
        props: ['products'],
        components: {
            SingleProduct,
            Loader
        }
    }
</script>

<style>

    .product-list {
        display: flex;
        flex-wrap: wrap;
    }

</style>