
  
(function(){
  emailjs.init("uRkW9Md_w7fcph_i4");
})();
function sendEmail()
{
   var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var message=document.getElementById("message").value;

var template_params=
{
    "fname":fname,
    "lname":lname,
    "email":email,
    "phone":phone,
    "message":message
};
const serviceID = "service_27l1qqk";
const templateID = "template_7nd341a";
if(!fname && !lname)
{
  alert("please enter the fields");
}
else{
emailjs.send(serviceID, templateID, template_params)
    .then(function(response) {
      alert("Your message has been sent!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("An error occurred while sending your message. Please try again later.");
    });
  }
   
}