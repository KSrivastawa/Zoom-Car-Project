var data = JSON.parse(localStorage.getItem("userdata"))||[];
     document.querySelector("#arrow").addEventListener("click", function () {
    window.location.assign("index.html");
  });
    var mobile=localStorage.getItem("New_number");
    var email =localStorage.getItem("New_email");
    console.log(mobile);
    document.querySelector("#mobile_no").value=mobile;
    document.querySelector("#email_id").value=email;

    document.querySelector("#arrow").addEventListener("click",function (){
        window.location.assign("mobile.html");
    })
    
    var a=0;
    if(mobile.length>0){
    document.querySelector(".continue").addEventListener("click",function (){
        var email=document.querySelector("#email_id").value;
        data.forEach(element => {
            if(element.email===email){
                a=1;
               return alert("Email already in use");
               
            }
        }); 

        if(a==0){
            var new_email=localStorage.setItem("New_email",email);
        window.location.assign("fullname.html");
        }

    })

}
else{

    document.querySelector(".continue").addEventListener("click",function (){
        var mobile =document.querySelector("#mobile_no").value;
        data.forEach(element => {
            if(element.mob===mobile){
                a=1;
               return alert("number already in use");
               
            }
        });

        if(a==0){
            localStorage.setItem("New_number",mobile);
        window.location.assign("fullname.html");
        }

    })

}




function mob(){
      let mynumm= document.getElementById('email_id').value
      console.log(mynumm)

      if(mynumm.length==10){
   
       var box=document.querySelector('.continue')
       box.setAttribute("id","conti")
    
        
      }
  
   }