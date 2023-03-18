<template>
    <nav>
        <div>
            <h2 style="color: #42b983">Market Place</h2>
        </div>

        <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link v-if="isLoggedIn" to="/products">Products</router-link>
            <router-link v-if="!isLoggedIn" to="/login">Log In</router-link>
            <router-link v-if="!isLoggedIn" to="/signup">Sign Up</router-link>
            <p class="display-name" v-if="displayName">{{ displayName }}</p>
            <button class="sign-out" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
        </div>
    </nav>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router'
    import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

    const router = useRouter()
    const isLoggedIn = ref(false)
    const displayName = ref('')
    let auth

    onMounted(() => {
        auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true
                displayName.value = user.displayName
            } else {
                isLoggedIn.value = false
            }
        })
    })

    const handleSignOut = () => {
        signOut(auth).then(() => {
            displayName.value = ''
            router.push('/')
        })
    }
</script>

<style scoped>
    nav {
        padding: 10px 0;
        display: flex;
        gap: 39em;
        align-items: center;
        width: 83%;
        margin: 0 auto;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        padding: 10px;
        border-radius: 4px;
    }

    nav a:hover {
        color: #42b983;
    }

    nav a.router-link-exact-active {
        color: white;
        background: #42b983;
    }

    nav a.router-link-exact-active:hover {
        color: white;
    }


    .nav-links {
        display: flex;
        gap: 1.5em;
    }

    .display-name {
        font-size: 0.8em;
        font-weight: bold;
    }

    .sign-out {
        border: 1px solid #54d098;
        padding: 0.5em 1em;
        border-radius: 5px;
        background: none;
        color: #8e9a9f;
        font-weight: bold;
    }

    .sign-out:hover {
        cursor: pointer;
        color: #54d098;
    }

    @media only screen and (max-width: 768px) {
        nav {
            width: 100%;
            padding: 0;
            gap: 5em;
        }

        nav a {
            font-size: 0.5em;
        }

        .display-name {
            font-size: 0.5em;
        }

        .sign-out {
            padding: 0em 0.5em;
            font-size: 0.5em;
        }

        .nav-links {
            gap: 0em;
        }

        h2 {
            font-size: 0.7em;
        }
    }
</style>