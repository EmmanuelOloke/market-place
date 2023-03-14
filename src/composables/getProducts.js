import { ref } from 'vue';

const getProducts = () => {
  const products = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('https://dummyjson.com/products/');

      if (!data.ok) {
        throw Error('No data available');
      }

      products.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { products, error, load };
};

export default getProducts;
