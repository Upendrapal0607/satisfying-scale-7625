let showData = JSON.parse(localStorage.getItem("cartData")) || [];

let cartitems = document.getElementById("product_data")

let cartBtn = document.querySelector(".fa-cart-plus")
cartBtn.addEventListener("click",()=>{
    // window.location.href = "index.html"
})


let sortasc = document.getElementById("sort")
function sortascData(data){
    sortasc.addEventListener("change",(e)=>{
        let value = e.target.value
        if(value === ""){
         
            displayimagecards4(data)
        }else if(value == "price"){
            let pricesort = data.sort((a,b)=>{
                // Number(a.price) < Number(b.price)  ? -1 : Number(a.price) < Number(b.price) ? 1 : 0;
                if(Number(a.price) < Number(b.price)){
                    return -1
                }else if(Number(a.price) > Number(b.price)){
                    return 1
                }else{
                    return 0
                }
            })
            displayimagecards4(pricesort)
            // displayimagecards1(pricesort)
           
        }else if(value == "description"){
            let descsort = data.sort((a,b)=>{
                // Number(a.price) < Number(b.price)  ? -1 : Number(a.price) < Number(b.price) ? 1 : 0;
                if((a.description) < (b.description)){
                    return -1
                }else if((a.description) > (b.description)){
                    return 1
                }else{
                    return 0
                }
            })
            displayimagecards4(descsort)
            
        }else if(value == "rating"){
            let ratingsort = data.sort((a,b)=>{
                // Number(a.price) < Number(b.price)  ? -1 : Number(a.price) < Number(b.price) ? 1 : 0;
                if(Number(a.rating) < Number(b.rating)){
                    return -1
                }else if(Number(a.rating) > Number(b.rating)){
                    return 1
                }else{
                    return 0
                }
            })
            displayimagecards4(ratingsort)
           
        }
    })
} 




let pro_duct1 = document.getElementById("product_p")

let url1 = new URL ("https://63f9dda4897af748dcc4bfc7.mockapi.io/details?limit=4&page=1")


async function fetchgridDatas1(){
    let res = await fetch(url1)
    let data = await res.json()
    console.log(data)
    displayimagecards1(data)
}
fetchgridDatas1()



function displayimagecards1(data){
    pro_duct1.innerHTML = ""
    
    data.forEach(el=>{
  

     let carddiv = document.createElement("div")
     carddiv.classList.add("pro_div")

     let image = document.createElement("img")
     image.setAttribute("src",el.avatar)
     image.classList.add("imgesize")

     let desc = document.createElement("p")
     desc.textContent = el.description
 
     let price = document.createElement("h3")
     price.textContent = `₹ ${el.price}`
     price.style.fontSize = '20px'

     let rating = document.createElement("p")
     rating.textContent = ` Review : ${el.rating}`
 
     let span = document.createElement("span")
     span.style.display = "none"
     span.style.color = "green"
     span.style.marginLeft = "5px"
     span.style.backgroundColor = "#CFD8DC"
     span.style.padding = "3px"
     span.style.borderRadius = "3px"

     let add_button = document.createElement("button")
     add_button.textContent = "Add To Cart"
     add_button.classList.add("addbutton")
     add_button.addEventListener("click",()=>{
      
       
        if(checkDuplicates(el)){
            alert("Product Already in the cart")
        }else{
            showData.push({...el,quantity:1})
            cartitems.textContent = showData.length
            localStorage.setItem("cartData",JSON.stringify(showData))
            span.style.display = "inline"
            span.textContent = "Product Added to Cart"
            setTimeout(function(){
                 span.style.display = "none"
            },4000)
            if(showData.length){
                cartitems.style.display = "grid"
            }
            
        }
    
        
  })
  cartitems.textContent = showData.length
  if(showData.length){
    cartitems.style.display = "grid"
  }

    
     carddiv.append(image,desc,price,rating,add_button,span)
     pro_duct1.append(carddiv)
    
    })
 }


 let pro_duct2 = document.getElementById("product_p1")
 
let url2 = new URL ("https://63f9dda4897af748dcc4bfc7.mockapi.io/details?limit=4&page=2")

async function fetchgridDatas2(){
    let res = await fetch(url2)
    let data = await res.json()
    console.log(data)
    displayimagecards2(data)
}
fetchgridDatas2()



function displayimagecards2(data){
    pro_duct2.innerHTML = ""
    
    data.forEach(el=>{
  
     let carddiv = document.createElement("div")
     carddiv.classList.add("pro_div")

     let image = document.createElement("img")
     image.setAttribute("src",el.avatar)
     image.classList.add("imgesize")

     let desc = document.createElement("p")
     desc.textContent = el.description
 
     let price = document.createElement("h3")
     price.textContent = `₹ ${el.price}`
     price.style.fontSize = '20px'

     let rating = document.createElement("p")
     rating.textContent = ` Review : ${el.rating}`
  
     let span = document.createElement("span")
     span.style.display = "none"
     span.style.color = "green"
     span.style.marginLeft = "5px"
     span.style.backgroundColor = "#CFD8DC"
     span.style.padding = "3px"
     span.style.borderRadius = "3px"

     let add_button = document.createElement("button")
     add_button.textContent = "Add To Cart"
     add_button.classList.add("addbutton")
     add_button.addEventListener("click",()=>{
      
       
        if(checkDuplicates(el)){
            alert("Product Already in the cart")
        }else{
            showData.push({...el,quantity:1})
            cartitems.textContent = showData.length
            localStorage.setItem("cartData",JSON.stringify(showData))
            span.style.display = "inline"
            span.textContent = "Product Added to Cart"
            setTimeout(function(){
                 span.style.display = "none"
            },4000)
            if(showData.length){
                cartitems.style.display = "grid"
            }
            
        }
    
        
  })
  cartitems.textContent = showData.length
  if(showData.length){
    cartitems.style.display = "grid"
  }

    
     carddiv.append(image,desc,price,rating,add_button,span)
     pro_duct2.append(carddiv)
    
    })
 }

 
 let pro_duct3 = document.getElementById("product_p2")
 let url3 = new URL ("https://63f9dda4897af748dcc4bfc7.mockapi.io/details?limit=4&page=3")

async function fetchgridDatas3(){
    let res = await fetch(url3)
    let data = await res.json()
    console.log(data)
    displayimagecards3(data)
}
fetchgridDatas3()


function displayimagecards3(data){
    pro_duct3.innerHTML = ""
    
    data.forEach(el=>{
  
     let carddiv = document.createElement("div")
     carddiv.classList.add("pro_div")

     let image = document.createElement("img")
     image.setAttribute("src",el.avatar)
     image.classList.add("imgesize")

     let desc = document.createElement("p")
     desc.textContent = el.description
 
     let price = document.createElement("h3")
     price.textContent = `₹ ${el.price}`
     price.style.fontSize = '20px'

     let rating = document.createElement("p")
     rating.textContent = ` Review : ${el.rating}`

     
     let span = document.createElement("span")
     span.style.display = "none"
     span.style.color = "green"
     span.style.marginLeft = "5px"
     span.style.backgroundColor = "#CFD8DC"
     span.style.padding = "3px"
     span.style.borderRadius = "3px"
 
     let add_button = document.createElement("button")
     add_button.textContent = "Add To Cart"
     add_button.classList.add("addbutton")
     add_button.addEventListener("click",()=>{
      
       
        if(checkDuplicates(el)){
            alert("Product Already in the cart")
        }else{
            showData.push({...el,quantity:1})
            cartitems.textContent = showData.length
            localStorage.setItem("cartData",JSON.stringify(showData))
            span.style.display = "inline"
            span.textContent = "Product Added to Cart"
            setTimeout(function(){
                 span.style.display = "none"
            },4000)
            if(showData.length){
                cartitems.style.display = "grid"
            }
            
        }
    
        
  })
  cartitems.textContent = showData.length
  if(showData.length){
    cartitems.style.display = "grid"
  }

    
     carddiv.append(image,desc,price,rating,add_button,span)
     pro_duct3.append(carddiv)
    
    })
 }

 
 let pro_duct4 = document.getElementById("product_p3")
 let url4 = new URL ("https://63f9dda4897af748dcc4bfc7.mockapi.io/details?limit=8&page=3")

async function fetchgridDatas4(){
    let res = await fetch(url4)
    let data = await res.json()
    // console.log(data)
    displayimagecards4(data)
    sortascData(data)
}
fetchgridDatas4()

function displayimagecards4(data){
    pro_duct4.innerHTML = ""
    
    data.forEach(el=>{
  
     let carddiv = document.createElement("div")
     carddiv.classList.add("pro_div")

     let image = document.createElement("img")
     image.setAttribute("src",el.avatar)
     image.classList.add("imgesize")

     let desc = document.createElement("p")
     desc.textContent = el.description
 
     let price = document.createElement("h3")
     price.textContent = `₹ ${el.price}`

    price.style.fontSize = '20px'

     let rating = document.createElement("p")
     rating.textContent = ` Review : ${el.rating}`

     let span = document.createElement("span")
     span.style.display = "none"
     span.style.color = "green"
     span.style.marginLeft = "5px"
     span.style.backgroundColor = "#CFD8DC"
     span.style.padding = "3px"
     span.style.borderRadius = "3px"
 
     let add_button = document.createElement("button")
     add_button.textContent = "Add To Cart"
     add_button.classList.add("addbutton")
    //  let filter = showData.filter(ele => ele.title == el.title);
        // add_button.textContent = filter.length ? "Go to Cart" : "Add to Bag";
      add_button.addEventListener("click",()=>{
      
       
            if(checkDuplicates(el)){
                alert("Product Already in the cart")
            }else{
                showData.push({...el,quantity:1})
                cartitems.textContent = showData.length
                localStorage.setItem("cartData",JSON.stringify(showData))
                span.style.display = "inline"
            span.textContent = "Product Added to Cart"
            setTimeout(function(){
                 span.style.display = "none"
            },4000)
                if(showData.length){
                    cartitems.style.display = "grid"
                }
                
            }
        
            
      })
      cartitems.textContent = showData.length
      if(showData.length){
        cartitems.style.display = "grid"
      }
    

     carddiv.append(image,desc,price,rating,add_button,span)
     pro_duct4.append(carddiv)
    
    })


    

 }


 function checkDuplicates(product){
    for(let i=0; i<showData.length;i++){
        if(showData[i].id === product.id){
          return true;
        }
    }
    return false;
}


















 //navbar js
//  function new1() {
//     document.getElementById("popup-1").classList.toggle("active");
    
// }

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function () {
//     modal.style.display = "block";
// }


// span.onmouseout = function () {
//     modal.style.display = "none";
// }


// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// var moda = document.getElementById("mymode");
// var btn1 = document.getElementById("mybt");

// var span = document.getElementsByClassName("close1")[0];

// btn1.onmouseover = function () {
//     moda.style.display = "block";
// }

// span.onmouseout = function () {
//     moda.style.display = "none";
// }

// window.onclick = function (event) {
//     if (event.target == moda) {
//         moda.style.display = "none";
//     }
// }

// function submit2(){
//     if(0){
//         window.location.assign("../HTML/Cart.html");
//         console.log("shivam");
//     }
//     else{
//         window.location.assign("../HTML/Empty.html");
//         console.log("Upendr");
//     }
// }