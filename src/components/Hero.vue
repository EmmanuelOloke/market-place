<template>
    <div class="hero">
        <div class="hero-content">
            <div class="hero-text">
                Buy quality products with confidence for the best price.
            </div>
            <div>
              <div v-if="isLoggedIn">
                <router-link to="/products">
                  <button class="signup" @click="goToProducts">View Products</button>
                </router-link>
              </div>

              <div v-else class="hero-buttons">
                <button @click="handleLogin" class="login">Login</button>
                <button @click="handleSignup" class="signup">Signup</button>
              </div>
            </div>
        </div>

        <div>
            <img src="../assets/hero-image.gif" alt="hero gif image">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { getAuth, onAuthStateChanged } from 'firebase/auth'

    const router = useRouter()
    const isLoggedIn = ref(false)
    let auth = getAuth()

    const goToProducts = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true
        }
      })
    }

    goToProducts()

    const handleLogin = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/')
        } else {
          router.push('/login')
        }
      })
    }

    const handleSignup = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/')
        } else {
          router.push('/signup')
        }
      })
    }

</script>

<style>
    .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    margin-top: 3em;
    width: 83%;
    border-radius: 30px;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .hero-text {
    width: 12em;
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 70px;
    font-family: "PT Serif", serif;
  }

  .hero-buttons {
    display: flex;
    gap: 2em;
  }

  .login {
    background: white;
    padding: 10px 40px;
    border: none;
    color: #42b983;
    outline: 2px solid #42b983;
    border-radius: 5px;
    font-size: 20px;
    transition: 1s;
  }

  .login:hover {
    outline: 1px solid #42b983;
    cursor: pointer;
    transform: translateY(-8px);
  }

  .signup {
    background: #42b983;
    padding: 10px 40px;
    outline: 2px solid #42b983;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    transition: 1s;
  }

  .signup:hover {
    opacity: 0.9;
    cursor: pointer;
    transform: translateY(-8px);
  }

  img {
    width: 35rem;
  }

  @media only screen and (max-width: 768px) {
    .hero {
      flex-direction: column-reverse;
    }

    .hero-text {
      font-size: 1.2rem;
      line-height: 30px;
    }

    .hero-buttons {
      flex-direction: column;
    }

    img {
      width: 15rem;
    }
  }
</style>