<template>
    <div class="home">
        <h1>All Destination</h1>
        <button @click="TriggleRouteError">Triggle Router Error</button>
        <div class="destinations">
            <AppLink
                v-for="destiantion in destiantions"
                :key="destiantion.id"
                :to="{name:'destination.show',params:{id:destiantion.id , slug:destiantion.slug}}"
            >
            <h2>{{ destiantion.name }}</h2>
            <img :src="`/images/${destiantion.image}`" :alt="destiantion.name"/>
            </AppLink>
        </div>
    </div>
</template>

<script>
import sourceData from "@/data.json"
import {NavigationFailureType , isNavigationFailure} from "vue-router"
export default{
    data(){
        return {
            destiantions : sourceData.destinations
        }
    },
    methods:{
        async TriggleRouteError(){
            const navigationFailure = await this.$router.push("/")
            if(isNavigationFailure(navigationFailure , NavigationFailureType.duplicated)){
                console.log(navigationFailure.to);
                console.log(navigationFailure.from);
            }else{
                
            }
        }
    }
}
</script>