<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name"/>
            <p>{{ destination.description}}</p>
        </div>
    </section>
</template>

<script>
import sourceData from "@/data.json"
export default{
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        // ถ้าจะเรียกใช้ ค่าใน Compute ต้องเรียกด้วย this. หรือ ถ้าเรียกใช้ใน template จะเรียกผ่าน {{}}
        destination(){
            return sourceData.destinations.find(des => des.id === this.destinationId)
        }
    }
}
</script>