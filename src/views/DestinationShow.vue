<template>
    <div>
        <section class="destination" v-if="destination">
        <h1>{{ destination.name }}</h1>
        <GoBack/>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name"/>
            <p>{{ destination.description}}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experience in {{ destination.name }} </h2>
            <div class="cards">
                <AppLink 
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{name:'experience.show', params:{experienceSlug:experience.slug}}">
                    <ExperienceCard
                        :experience="experience"/>
                </AppLink>
            </div>
            <router-view/>
    </section>
    </div>
</template>

<script>

import sourceData from "@/data.json"
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue"
export default{
    components:{ExperienceCard , GoBack},
    props:{
        id:{ type:Number , required:true },
        slug:{type: String , required:true}
    },
    computed:{
        // ถ้าจะเรียกใช้ ค่าใน Compute ต้องเรียกด้วย this. หรือ ถ้าเรียกใช้ใน template จะเรียกผ่าน {{}}
        destination(){
            return sourceData.destinations.find(des => des.id === this.id)
        }
    }
}
</script>