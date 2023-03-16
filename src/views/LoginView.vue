<template>
  <div class="login-container">
    <p>Log in to your account</p>
    <div>
      <input type="text" placeholder="Email" v-model="email">
    </div>

    <div>
      <input type="password" placeholder="Password" v-model="password">
    </div>

    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>

    <button class="login-button" @click="login">Log In</button>
    <button class="google-signup" @click="signInWithGoogle">
        <img class="logo" src="../assets/google-icon.png" alt="google icon"/>
        Sign In With Google
      </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    width: 300px;
    padding: 40px 30px 60px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;
  }
  p {
    margin-bottom: 0 0 10px 0;
    font-size: 1.6em;
  }
  input {
    padding: 15px;
    margin-bottom: 20px;
    width: 18em;
    border: 1px solid #42b983;
    border-radius: 5px;
  }
  input:focus {
    outline: 1px solid #42b983;
  }
  .error {
    color: crimson;
    font-size: 1em;
    margin-top: 0px;
  }
  .login-button {
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
  .login-button:hover {
    cursor: pointer;
    background: #54d098;
  }
</style>
