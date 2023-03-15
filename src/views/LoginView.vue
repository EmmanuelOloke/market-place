<template>
  <div class="login-container">
    <h1>This is the login page....</h1>
    <div>
      <input type="text" placeholder="Email" v-model="email">
    </div>

    <div>
      <input type="password" placeholder="Password" v-model="password">
    </div>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <button @click="login">Log In</button>
    <!-- <button @click="signInWithGoogle">Sign in With Google</button> -->
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router';

  const email = ref("")
  const password = ref("")
  const errorMessage = ref()
  const router = useRouter()

  const login = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully Logged In")
        console.log(auth.currentUser)
        router.push('/products')
      })
      .catch((error) => {
        console.log(error.code)
        
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage.value = "Invalid Email"
            break
          case "auth/user-not-found":
            errorMessage.value = "No account with this email was found"
            break
          case "auth/wrong-password":
            errorMessage.value = "Incorrect Password"
            break
          default:
            errorMessage.value = "Email or password was incorrect"
            break
        }
      })
  }

  const signInWithGoogle = () => {

  }

</script>
