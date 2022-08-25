<template>
    <div class="footer">
       <div class="row">
        <div class="col-lg-4 first">
          <img src="../assets/ACE.svg">
          <div>
            <p>
                Our vision was to create a vast unparalleled monopoly of luxurious companies, so as we could provide a full suite of development services to cater for all of our clienteles pacific needs.
            </p>
          </div>
        </div>

         
        <div class="col-lg-4 second">
           <h2>Information</h2>
           <div class="navlist">
            <ul>
                <li>Home</li>
                <li>Our Services</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
           </div>
        </div>


        <div class="col-lg-4 third">
          <h2>Our Office</h2>
          <div class="office">
            <span><i class="fa-solid fa-location-dot"></i></span>
          <p>
            Ace Worldwide Limited,6 Roedean Avenue, Enfield, EN3 5QJ
          </p>
          </div>
         <div class="office">
             <span><i class="fa-solid fa-phone"></i></span>
          <p>
            0208 058 1701
          </p>
         </div>
         <div class="office">
            <span><i class="fa-solid fa-envelope"></i></span>
          <p>
            info@aceworldwide.co.uk
          </p>
         </div>
         
        </div>
       
       </div>
    </div>
</template>

<style scoped>
.footer{
    background: black;
    padding-top: 20px;
    margin: 0;
}
.row h2{
    font-weight: bold;
    color:white;
    font-size:24px;
}
.third{
  padding-left:-20px;
}
.third span i{
    color: orange;
}
.office{
    display: flex;
}
.office p{
    color:white;
    padding-left:10px;
    font-size:14px
}
.first img{
    width: 100%;
    height: 80px;
}
.first p{
    color:white;
}
.navlist ul li{
    list-style-type: '>';
    color:white;
    padding:6px;
}
.second{
    padding-left: 30px;
}
.second ul li:hover{
    color:orange;
    cursor:pointer;
}
</style>