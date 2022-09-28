var data = JSON.parse(localStorage.getItem("userdata")) || [];
  console.log(data);
  document.querySelector("#arrow").addEventListener("click", function () {
    window.location.assign("index.html");
  });


  document
    .querySelector(".continue")
    .addEventListener("click", function () {
       var mobile = document.querySelector("#mobile_no").value;
    
      var a = 0;
   
      if (a == 0) {
        alert("NEW USER PLEASE REGISTER FIRST");
        localStorage.setItem("New_number", mobile);
        window.location.assign("email.html");
      } else {
        localStorage.setItem("New_number", mobile);
        window.location.assign("login_pass.html");
      }
    })
    
    



    function mob(){
      let mynum= document.getElementById('mobile_no').value
      console.log(mynum)

      if(mynum.length==10){
       let box2=document.querySelector('#invalid')
       var box=document.querySelector('.continue')
       box.setAttribute("id","conti")
       if(mynum.length==10){
           box2.innerHTML=""
       }
        
      }
  
      else if(mynum.length>10 || mynum.length<10){

       let box1=document.querySelector('#invalid')
       box1.innerHTML=null
       
       var para=document.createElement("p")
       para.innerText="please enter valid number"

       box1.append(para)
      }
   }
