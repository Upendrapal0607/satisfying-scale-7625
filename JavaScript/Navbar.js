function new1() {
    document.getElementById("popup-1").classList.toggle("active");
    
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onmouseout = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var moda = document.getElementById("mymode");
var btn1 = document.getElementById("mybt");

var span = document.getElementsByClassName("close1")[0];

btn1.onmouseover = function () {
    moda.style.display = "block";
}

span.onmouseout = function () {
    moda.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == moda) {
        moda.style.display = "none";
    }
}

function submit2(){


    let addToCart=JSON.parse(localStorage.getItem('cartData'))||[]
if(addToCart.length>0){
  window.location.assign("../HTML/Cart.html");
       }

    else{
        window.location.assign("../HTML/Empty.html");
      
    }
}