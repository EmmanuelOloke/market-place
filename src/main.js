import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgXjMVzkMdfy3nHX43h3W3VkaM9ZTMYOM',
  authDomain: 'market-place-669f5.firebaseapp.com',
  projectId: 'market-place-669f5',
  storageBucket: 'market-place-669f5.appspot.com',
  messagingSenderId: '692069685750',
  appId: '1:692069685750:web:36c52800b66abed28f4fd7',
  measurementId: 'G-3G4GVR2V61',
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
