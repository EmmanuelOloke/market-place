<template>
    <div v-if="error">
        {{ error }}
    </div>

    <div v-if="product">
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

            console.log(product)
            console.log(props.id)

            return { product, error }
        }
    }
</script>