<template>
    <div>
        <p>
            Page Not Found
        </p>
        <img src="../assets/not-found.png" alt="not found">
        <router-link to="/">
            <button>
                Back to home
            </button>
        </router-link>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.3em;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        width: 35em;
        margin: 0 auto;
        padding: 1em;
    }
    p {
        color: #42b983;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }

    img {
        width: 30em;
        height: 30em;
        border-radius: 10px;
    }

    button {
        background: #42b983;
        padding: 10px 40px;
        outline: 2px solid #42b983;
        border: none;
        color: white;
        border-radius: 5px;
        font-size: 20px;
        transition: 1s;
    }

    button:hover {
        opacity: 0.9;
        cursor: pointer;
        transform: translateY(-8px);
    }
</style>