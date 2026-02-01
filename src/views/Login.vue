<template>
    <div class="login">
        <form action="" class="form" v-on:submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" name="username" type="text" class="input">
            <label for="password"></label>
            <input v-model="password" name="password" type="text" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute , useRouter } from 'vue-router';
export default {
    setup(){
        const username = ref('')
        const password = ref('')
        const router = useRouter('')
        const route = useRoute('')
        const login = () => {
             // Auth user with API
             window.user = username.value
            const redirectPath =  route.query.redirect || '/protected'
            router.push(redirectPath)
        }
        return {username , password, login}
    }

}
</script>