
let navbarbtn = document.querySelector("#n3btn")

let b123btn = document.querySelector("#b123")

let closepoup = document.querySelector(".popup-close-btn");

navbarbtn.addEventListener("click", function(){
    document.body.classList.add("popup-active");
})

b123btn.addEventListener("click", function(){
    document.body.classList.add("popup-active");
})

closepoup.addEventListener("click", function(){
    document.body.classList.remove("popup-active");
})













document.getElementById("sidebar-toggle-btn").addEventListener("click",function(){
    document.getElementById("sidebar").classList.toggle("active");
})

document.getElementById("n11").addEventListener("click",function(){
    document.getElementById("sidebar").classList.toggle("active");
})

