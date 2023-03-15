<template>
    <div v-if="error">
        {{ error }}
        <router-link to="/products">Back to Products</router-link>
    </div>

    <div v-else-if="product">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
    </div>

    <div v-else>
        Loading...
    </div>
</template>

<script>
    import getProduct from '@/composables/getProduct'
    export default {
        props: ['id'],
        setup(props) {
            const {product, error, load} = getProduct(props.id)

            load()

            return { product, error }
        }
    }
</script>