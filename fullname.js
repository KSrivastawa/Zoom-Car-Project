var data = JSON.parse(localStorage.getItem("userdata")) || [];
  console.log(data);
  document.querySelector("#arrow").addEventListener("click", function () {
    window.location.assign("email.html");
  });

  document.querySelector(".continue").addEventListener("click",function (){

    window.location.assign("index.html")
  })

  
function mob(){
      let mynummpass= document.getElementById('pass_id').value
      console.log(mynummpass)

      if(mynummpass.length==8){
   
       var box=document.querySelector('.continue')
       box.setAttribute("id","conti")
    
        
      }
  
   }