<template>
  <div class="">
    <h1>Shop from our list of products</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="products">
      <ProductList :products="products.products"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
  import ProductList from '@/components/ProductList.vue';
  import getProducts from '@/composables/getProducts';

  export default {
    name: 'ProductView',
    components: {
      ProductList
    },

    setup() {
      const {products, error, load} = getProducts()

      load()

      return { products, error }
    }
  }
</script>

<style>

</style>