<template>
    <div class="details-container">
        <div v-if="error">
            <div class="not-found">
                <p>
                    {{ error }}
                </p>
                <img src="../assets/not-found.png" alt="not found">
                <router-link to="/products">
                    <button>
                        Back to Products
                    </button>
                </router-link>
            </div>
        </div>
    
        <div v-else-if="product" class="product-details">
                <div class="image-container">
                    <div>
                        <img class="main-image" :src="mainImage ? mainImage : product.thumbnail" alt="thumbnail main image">
                    </div>
    
                    <div class="other-images">
                        <div v-for="image in product.images" :key="image">
                            <img ref="img" @click="changeMainImage(image)" class="image" :src="image" alt="other images">
                        </div>
                    </div>
                </div>
    
                <div class="details-text-container">
                    <p class="title"> {{ product.title }}</p>
                    <p class="description">{{ product.description }}</p>
    
                    <div class="disc-price">
                        <p class="price">${{ product.price.toLocaleString() }}</p>
                        <p class="discount">{{ product.discountPercentage }}%</p>
                    </div>
    
                    <div class="rate">
                        <span class="rate-label">Rating: </span>
                        <span class="rate-figure">{{ product.rating }} / 5.0</span>
                    </div>
    
                    <p class="text">Amount in Stock: {{ product.stock }} units</p>
    
                    <p class="text">Brand: {{ product.brand }}</p>
    
                    <p class="text">Category: {{ product.category }}</p>

                    <div style="display: flex">
                        <router-link to="/products"><button class="back-products">Back to Products</button></router-link>
                    </div>
                </div>
        </div>
    
        <div v-else>
            <Loader />
        </div>
    </div>
</template>

<script>
    import getProduct from '@/composables/getProduct'
    import Loader from '@/components/Loader.vue'
    import { ref } from 'vue'

    let mainImage = ref('')
    
    export default {
        props: ['id'],
        components: {
            Loader
        },
        setup(props) {
            const {product, error, load} = getProduct(props.id)
            
            load()

            mainImage.value = product.thumbnail

            const changeMainImage = (image) => {
                mainImage.value = image
            }


            return { product, error, mainImage, changeMainImage }
        }
    }
</script>

<style scope>
    .not-found {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.3em;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        width: 35em;
        margin: 0 auto;
        padding: 1em;
    }

    .not-found > p {
        color: #42b983;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }

    .not-found > img {
        width: 30em;
        height: 30em;
        border-radius: 10px;
    }

    .not-found > a > button {
        background: #42b983;
        padding: 10px 40px;
        outline: 2px solid #42b983;
        border: none;
        color: white;
        border-radius: 5px;
        font-size: 20px;
        transition: 1s;
    }

    .not-found > a > button:hover {
        opacity: 0.9;
        cursor: pointer;
        transform: translateY(-8px);
    }

    .details-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .product-details {
        display: flex;
        gap: 4em;
        padding: 20px;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }

    .image-container {
        display: flex;
        flex-direction: column;
    }

    .main-image {
        width: 25em;
        height: 20em;
    }

    .other-images {
        display: flex;
        flex-direction: row;
        gap: 1.6em;
    }

    .image {
        padding: 3px;
        width: 75px;
        height: 75px;
        transition: 0.5s;
        border-radius: 5px;
    }

    .image:hover{
        cursor: pointer;
        outline: 2px solid #12b669;
    }

    .details-text-container {
        display: flex;
        gap: 1em;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        font-size: 1.8em;
        padding: 0;
        margin: 0;
    }

    .description {
        color: black;
        font-size: 1em;
        width: 35em;
        text-align: left;
    }

    .disc-price {
        display: flex;
        gap: 0.5em;
        align-items: center;
    }

    .price {
        font-size: 2em;
        font-weight: bold;
        margin: 0;
    }

    .discount {
        font-size: large;
        font-weight: bold;
        background: #dbffee;
        color: #12b669;
        padding: 5px 5px;
        border-radius: 5px;
        margin: 0;
    }

    .rate {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .rate-label {
        font-size: 1.2em;
        font-weight: bold;
    }

    .rate-figure {
        font-size: large;
        font-weight: bold;
        background: #dbffee;
        color: #12b669;
        padding: 5px 5px;
        border-radius: 5px;
        margin: 0;
    }

    .text {
        display: flex;
        font-size: large;
        font-weight: bold;
        margin: 0;
    }

    .back-products {
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

    .back-products:hover {
        cursor: pointer;
        background: #54d098;
    }

    @media only screen and (max-width: 768px) {
        .not-found {
            width: 20em;
        }

        .not-found > p {
            font-size: medium;
        }

        .not-found > img {
            width: 15em;
            height: 15em;
        }

        .product-details {
            flex-direction: column;
            gap: 1em;
        }

        .image-container {
            align-items: center;
        }

        .main-image {
            width: 15em;
            height: 10em;
        }

        .other-images {
            gap: 0em;
        }

        .image {
            width: 43px;
            height: 43px;
        }

        .details-text-container {
            gap: 0em;
            width: 5em;
            flex-wrap: wrap;
        }

        .title {
            font-size: 1em;
        }

        .description {
            width: 15em;
        }

        .price, .discount, .rate-label, .rate-figure, .text {
            font-size: 1em;
        }

        .back-products {
            width: 14em;
            font-size: 0.7em;
            padding: 1em 2em;
        }
    }
</style>