function myfun(){
    
   
    let btn=document.getElementById("btn2")
    btn.style.backgroundColor= "#10a310"
    btn.style.color="#fff"

  
}
function btnfun(){

var res=document.getElementById("query").value
// console.log(res)

localStorage.setItem("ram" ,JSON.stringify(res))


window.location.href="index.html"
document.getElementById("btn").style.backgroundColor="black"

}


function cityfun(){
window.location.href="Trip.html"



}

function redriect(){
window.location.href="main.html"
}

