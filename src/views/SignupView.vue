<template>
    <div class="signup-container">
      <h1>This is the signup page....</h1>
      <div>
        <input type="text" placeholder="Email" v-model="email">
      </div>

      <div>
        <input type="password" placeholder="Password" v-model="password">
      </div>

      <button @click="signup">Sign Up</button>
      <button @click="signInWithGoogle">Sign in With Google</button>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
    import { useRouter } from 'vue-router';

    const email = ref("")
    const password = ref("")
    const router = useRouter()

    const signup = () => {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          console.log("Successfully Registered")
          console.log(auth.currentUser)
          router.push('/products')
        })
        .catch((error) => {
          console.log(error.code)
          alert(error.message)
        })
    }

    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user)
          router.push("/products")
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

  </script>
  