
var fun = document.getElementById("button").addEventListener("click", function () {
    button()
})
// var arr = JSON.parse(localStorage.getItem("place"))
function button() {

    var div = document.getElementById("city").value;

    localStorage.setItem("place", JSON.stringify(div))

}
// var div = document.getElementById("city")
// console.log(div)
// localStorage.setItem("place", JSON.stringify(div))
