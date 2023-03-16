<template>
    <nav>
        <div>
            <h2>Market Place</h2>
        </div>

        <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link v-if="isLoggedIn" to="/products">Products</router-link>
            <router-link v-if="!isLoggedIn" to="/login">Log In</router-link>
            <router-link v-if="!isLoggedIn" to="/signup">Sign Up</router-link>
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
    let auth;

    onMounted(() => {
        auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true
            } else {
                isLoggedIn.value = false
            }
        })
    })

    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/')
        })
    }
</script>

<style>
    nav {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
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

    nav a.router-link-exact-active {
        color: white;
        background: #42b983;
    }

    .nav-links {
        display: flex;
        gap: 1.5em;
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
    }
</style>