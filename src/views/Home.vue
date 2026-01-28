<template>
    <div class="home">
        <h1>All Destination</h1>
        <div class="destinations">
            <router-link
                v-for="destiantion in destiantions"
                :key="destiantion.id"
                :to="{name:'destination.show',params:{id:destiantion.id , slug:destiantion.slug}}"
            >
            <h2>{{ destiantion.name }}</h2>
            <img :src="`/images/${destiantion.image}`" :alt="destiantion.name"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import sourceData from "@/data.json"
console.log(sourceData)
export default{
    data(){
        return {
            destiantions : sourceData.destinations
        }
    }
}
</script>