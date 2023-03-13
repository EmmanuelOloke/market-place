<template>
    <nav>
        <div>
            <h2>Market Place</h2>
        </div>

        <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/login">Log In</router-link>
            <router-link to="/signup">Sign Up</router-link>
        </div>
    </nav>
</template>

<script>
    export default {

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
</style>