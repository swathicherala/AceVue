<template>
  <div class="servicemain">
    <img src="../assets/serviceimg.jpg" />
    <div class="service">
      <h1>Our Services</h1>
      <p>

Ace Worldwide Limited create a truly unique project for our clientele. If their has been a place in your life you have visited or moment you wish to capture that had significant meaning or impact on you or your family's lives, then we would discuss the experience with you to create a piece that embraces and reflects on the event and moment captured. Once discussed we would provide our professional thoughts and opinion, our design team would then prepare drawings to your exact requirements. We would demonstrate the various materials that we believe would work seamlessly with your vision. Our Unique projects are as individual as for whom they are created. These Unique projects are designed and created to tell a story in time of ones unforgettable experience or moment.
      </p>
    </div>
    <GridImages/>
    <div class="row">
            <div class="col-md-6 gridimage">
              <img src="../assets/serviceimg1.jpg">
              <div class="bespoke">
                 <h2>Bespoke Kitchen</h2>
                 <button class="btn btn-primary">Read More</button>
              </div>
            </div>
            <div class="col-md-6 gridimage">
              <img src="../assets/serviceimg2.jpg">
              <div class="bespoke">
                 <h2>Bespoke Bathroom</h2>
                 <button class="btn btn-primary">Read More</button>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import GridImages from './GridImages.vue'

export default{
    name:'ServicesView',
    components:{
        GridImages
    }
}
</script>

<style>
.servicemain{
    background: black;
    margin: 0;

}
.service{
  text-align: center;
      color: orange;
}
.service h1{
    font-weight: bold;
    font-size:34px;
     padding:10px 0 10px 0;
}
.service p{
    text-align: justify;
    padding:5px 60px 20px 60px;
    margin: 0;
}
.gridimage{
  position:relative;
  padding: 0;
}
.gridimage .btn{
  background: white;
    color: black;
    width: 48%;
    margin:10px 0 0 92px;
}
.bespoke{
    position:absolute;
    left: 15%;
    top:30%;
    z-index: 1;
    margin-left:44px;
}
.bespoke h2{
      background: white;
      font-weight: bold;
      padding:0 20px 0 54px;
      font-size: 25px;
}
.row img{

/* width: 100%; */
    /* height: 72%; */
                /* z-index: -1;
    position: absolute; */
    background-repeat: no-repeat;
        background-size: cover;
    width: 100%;
    height: 360px;
     transition: all 1s ease-in-out;
}
.row img:hover{
 transform: scale(1.1); 
}
</style>
