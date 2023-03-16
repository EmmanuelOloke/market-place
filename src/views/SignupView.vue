<template>
    <div class="signup-container">
      <p>Sign up for Market Place</p>
      <div>
        <input type="text" placeholder="Email" v-model="email">
      </div>

      <div>
        <input type="password" placeholder="Password" v-model="password">
      </div>

      <button class="login-button" @click="signup">Sign Up</button>
      <button class="google-signup" @click="signInWithGoogle">
        <img class="logo" src="../assets/google-icon.png" alt="google icon"/>
        Sign Up With Google
      </button>
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

  <style>
    .signup-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 100px auto;
      width: 300px;
      padding: 40px 30px 60px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      border-radius: 5px;
    }

    .google-signup {
      margin-top: 20px;
      border: none;
      font-weight: bold;
      font-size: 1em;
      width: 17em;
      padding: 0.3em 0;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: #8e9a9f;
    }

    .google-signup:hover {
      cursor: pointer;
      background: #e3f3fa;
    }

    .logo {
      width: 40px;
      height: 40px;
    }
  </style>
  