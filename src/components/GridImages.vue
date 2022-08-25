<template>
    <div>
        <div class="row">
            <div class="col-md-6 gridimage">
              <img src="../assets/img1.jpg">
              <div class="bespoke">
                <h2>Bespoke Developments</h2>
                <button class="btn btn-primary">Read More</button>
              </div>
            </div>
            <div class="col-md-6 gridimage">
              <img src="../assets/img2.jpg">
              <div class="bespoke">
                 <h2>Bespoke Construction</h2>
                 <button class="btn btn-primary">Read More</button>
              </div>        
            </div>           
        </div>
        <div class="row">
            <div class="col-md-6 gridimage">
              <img src="../assets/img3.jpg">
              <div class="bespoke">
                 <h2>Bespoke Interiors</h2>
                 <button class="btn btn-primary">Read More</button>
              </div>
            </div>
            <div class="col-md-6 gridimage">
              <img src="../assets/img4.jpg">
              <div class="bespoke">
                 <h2>Bespoke Heritage</h2>
                 <button class="btn btn-primary">Read More</button>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
.gridimage{
  position:relative;
  padding: 0;
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
.gridimage .btn{
  background: white;
    color: black;
    width: 48%;
    margin:10px 0 0 92px;
}
.row img:hover{
 transform: scale(1.1); 
}
</style>