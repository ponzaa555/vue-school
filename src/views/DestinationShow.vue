<template>
    <section class="destination" v-if="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name"/>
            <p>{{ destination.description}}</p>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return{
            destination : null
        }
    },
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        // ถ้าจะเรียกใช้ ค่าใน Compute ต้องเรียกด้วย this. หรือ ถ้าเรียกใช้ใน template จะเรียกผ่าน {{}}
    },
    methods:{
        async initData(){
            const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`)
            this.destination = await response.json()
        }
    },
    created(){
        this.initData();
    }
    // created() {
    // this.$watch(
    //     () => this.$route.params.slug,
    //     this.initData,
    //     { immediate: true }
    //     )
    // }
}
</script>