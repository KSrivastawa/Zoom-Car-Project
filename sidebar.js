

document.getElementById("icon").addEventListener("click", icon)
var sidebar = document.querySelector("#sidebar")
sidebar.style.maxWidth = "0px";
sidebar.style.visibility = "hidden";

function icon() {

    if (sidebar.style.maxWidth == "0px") {
        sidebar.style.maxWidth = "1200px";
        sidebar.style.visibility = "visible";
    }
    else {
        sidebar.style.maxWidth = "0px"
        sidebar.style.visibility = "hidden";
    }
}