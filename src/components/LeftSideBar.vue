<template>
    <ul>
        <li><router-link :to="{name:'protected'}">Dashboard</router-link></li>
        <li><router-link :to="{name:'invoices'}">Invoice</router-link></li>
    </ul>
</template>

<style scoped>
ul{
    background-color: white;
    padding: 10px;
    list-style: none;
    padding-right: 20px;
    margin-right: 20px;
}
</style>