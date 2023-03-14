<template>
    <div v-if="products">
        <div v-for="product in products" :key="product.id">
            <SingleProduct :product="product"/>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script>
    import SingleProduct from './SingleProduct.vue'

    export default {
        props: ['products'],
        components: {
            SingleProduct
        }
    }
</script>

<style>

</style>