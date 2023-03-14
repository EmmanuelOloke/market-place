<template>
    <div class="product-container">
        <router-link :to="{name: 'productDetails', params: {id: product.id}}">
            <div class="product-card">
                <img class="prod-img" :src="product.thumbnail" alt="product thumbnail">
                <h3>{{ product.title }}</h3>
                <h4>{{ product.price }}</h4>
                <h4>{{ product.discountPercentage }}</h4>
                <h4>{{ product.rating }}</h4>
                <h4>{{ product.brand }}</h4>
                <h4>{{ product.category }}</h4>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['product'],
    }
</script>

<style>
    template {
        display: flex;
    }
    .product-container {
        display: flex;
        flex-direction: row;
    }

    .product-card {
        width: 30%;
        margin: 20px;
        padding: 10px;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }

    .prod-img {
        width: 26em;
        border-radius: 10px;
    }
</style>