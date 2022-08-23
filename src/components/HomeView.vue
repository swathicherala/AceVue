<template>
    <div>
        <CarousalView/>
        <div class="homepage">
           <h1>
            Home
           </h1>
           <div class="container">
             <p>
                Ace Worldwide Limited creates exquisite homes and projects designed to enchant and Inspire, methodically approached and completed meticulously where every detail has been considered. Our complete offering of services enables us to provide our clientele for all of their development requirements within one organisation. Our highly professional and experienced teams work seamlessly together to produce our uncompromising quality and exacting standards.
             </p>
           </div>
        </div>
        <GridImages/>
    </div>
</template>

<script>
import CarousalView from './CarousalView.vue'
import GridImages from './GridImages.vue'

export default{
    name:'HomeView',
    components:{
        CarousalView,
        GridImages
    }
}
</script>

<style scoped>
.homepage{
    background: black;
}
.homepage h1{
    text-align: center;
    font-weight: 700;
    font-size:35px;
    color:orange;
    padding-top:10px;
}
.homepage p{
    color:orange;
    text-align: justify;
    font-size: 20px;
    padding-bottom:20px;
        margin: 0;
}
</style>