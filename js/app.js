var navlinks = document.getElementById("navlinks");
var navclose = document.getElementById("navclose");
function showmenu(){
    navlinks.style.display = "block";
    navlinks.style.width = "50%";
    navclose.style.display = "block";
    navclose.style.textAlign = "right";
    navclose.style.marginRight = "15px";
    navclose.style.marginTop = "15px";
    navclose.style.fontSize = "30px";

}
function hidemenu(){
    navlinks.style.display = "none";

}