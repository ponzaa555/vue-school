<template>
    <div>
        <h1>Hello👋 , {{ username }}</h1>
        <button class="btn" @click="logout">Logout</button>
        <AppLink :to="{name:'invoices'}" >
            <button class="btn">
                Invoice
            </button>
        </AppLink>
    </div>
</template>

<script>
export default{
    data(){
        return{
            username:window.user
        }
    },
    methods:{
        logout(){
            window.user = null
            this.$router.push({name:'Home',hash:'#logout'})
        }
    }
}
</script>