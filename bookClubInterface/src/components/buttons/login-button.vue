<template>
    <button @click="handleLogin">Login</button>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: '/books',
        },
    });
    console.log(useAuth0)
};

</script>