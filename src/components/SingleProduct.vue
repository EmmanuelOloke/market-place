<template>
    <div class="product-container">
        <div class="product-card">
            <img class="prod-img" :src="product.thumbnail" alt="product thumbnail">
            <p class="title">{{ product.title }}</p>
            <p class="rating">{{ product.rating }} / 5.00</p>
            <div class="single-price">
                <p class="amount">${{ product.price.toLocaleString() }}</p>
                <p class="discount">{{ product.discountPercentage }}% OFF</p>
            </div>
            <router-link :to="{name: 'productDetails', params: {id: product.id}}">
                <button class="view-details">View Details</button>
            </router-link>
            </div>
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
        width: 18em;
        margin: 20px;
        padding: 10px;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }

    .prod-img {
        width: 18em;
        height: 12em;
        border-radius: 10px;
    }

    .title {
        text-align: left;
        font-weight: bold;
        font-size: 1.3em !important
    }

    .rating {
        width: 6em;
        padding: 0.2em;
        font-size: 1em;
        font-weight: bold;
        text-align: center;
        background: #c5f7e0;
        border-radius: 5px;
        color: #4e6a76;
    }

    .single-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .amount {
        font-weight: bold;
        font-size: 1.5em;
    }

    .discount {
        font-size: large;
        font-weight: bold;
        background: #dbffee;
        color: #8e9a9f;
        padding: 5px 10px;
        border-radius: 5px;
    }

    .view-details {
        border: none;
        background: #42b983;
        color: white;
        font-weight: bold;
        font-size: 1em;
        width: 17em;
        padding: 1em 4em;
        border-radius: 5px;
        transition: all 0.5s;
    }

    .view-details:hover {
        cursor: pointer;
        background: #54d098;
    }
</style>