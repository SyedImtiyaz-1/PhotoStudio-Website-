function sendMail(){
    let form ={
        name: document.getElementById('name').value , 
        email : document.getElementById('email').value ,
        number : document.getElementById('number').value ,
        message : document.getElementById('message').value ,
    };

const s_ID = "service_b1d1aw8";
const t_ID = "template_rfvuell";

emailjs.send(s_ID,t_ID,form)
.then(
    res=>{
        name: document.getElementById('name').value = "";
        email : document.getElementById('email').value = "";
        number : document.getElementById('number').value = "";
        message : document.getElementById('message').value = "";
        alert("Submit Successfully");
    })
    .catch((err)=>console.log(err));

}
