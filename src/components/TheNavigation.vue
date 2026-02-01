<template>
    <div id="nav">
    <AppLink id="logo" to="/">Vue School Travel App</AppLink>
    <AppLink 
        v-for="des in destinations"
        :key="des.id"
        :to="{name:'destination.show' , params:{id:des.id , slug:des.slug}}">
        {{ des.name }}
    </AppLink>
    <AppLink :to="{name:'protected'}">Dashboard</AppLink>
    <AppLink to="https://vueschool.io">Vue School</AppLink>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
    data(){
        return {
            destinations:sourceData.destinations
        }
    }
}
</script>

<style lang="css">
    #nav .vue-school-active-link{
        color: red;
        border-bottom: 2px solid red;
    }
</style>