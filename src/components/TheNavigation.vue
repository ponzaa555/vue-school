<template>
    <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link 
        v-for="des in destinations"
        :key="des.id"
        :to="{name:'destination.show' , params:{id:des.id , slug:des.slug}}">
        {{ des.name }}
    </router-link>
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