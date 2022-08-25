<template>
<div class="contactmain">
    <img src="../assets/contact.jpg">
    <div class="contact">
        <h1>Contact Us</h1>
        <p>
            Should you wish to contact us and discuss an upcoming project then we would be delighted to hear from you.
        </p>
    </div>
    <div class="touch">
       <h1>Get In Touch</h1>
       <div class="row">
        <div class="col-md-4 one">
            <i class="fa-solid fa-location-dot"></i>
             <pre>
                Ace Worldwide Limited,
                6 Roedean Avenue,
                Enfield, EN3 5QJ
             </pre>


        </div>
        <div class="col-md-4">
                  <i class="fa-solid fa-phone"></i>
                         <span>0208 058 1701</span>
        </div>
        <div class="col-md-4">
            <i class="fa-solid fa-envelope"></i>
                         <span>info@aceworldwide.co.uk</span>
        </div>
       </div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2474.8152177250035!2d-0.05097168422428488!3d51.66321947966109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAce%20Worldwide%20Limited%2C6%20Roedean%20Avenue%2CEnfield%2CEN3%205QJ!5e0!3m2!1sen!2sin!4v1634531087344!5m2!1sen!2sin" width="100%" height="450px"></iframe>
    </div>
</div>
</template>

<style>
.contactmain{

    margin: 0;

}
.contact{
        background: black;
  text-align: center;
      color: orange;
}
.contact h1{
    font-weight: bold;
    font-size:34px;
     padding:10px 0 10px 0;
}
.contact p{
    text-align: justify;
    padding:5px 100px 20px 250px;
    margin: 0;
}
i{
    color: orange;
}
.one{
    display: flex;
}
pre{
        margin-left: -125px;
}
.touch h1{
    text-align: center;
}
</style>