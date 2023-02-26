
let addToCart=JSON.parse(localStorage.getItem('cartData'))||[]
console.log(addToCart);
let appendcard=document.querySelector('.apaand-card')
let Total_price=document.getElementById('Total')
let select=document.getElementById('Select-product')

let sum=0


for(let el of addToCart){
  sum+= +el.price
}

Total_price.innerHTML=`₹ ${sum}`


let Saving_money=document.querySelector('.saving-money')
let save_money=document.querySelector('.save-money')
save_money.innerHTML= `₹ ${-Math.floor(sum*30/100)}`
 document.querySelector('.sub-total').innerHTML=`₹ ${Math.floor(sum*70/100)}`
 document.querySelector('.OredrTotal').innerHTML=`₹ ${Math.floor(sum*70/100)+55}`

 document.querySelector('.YOU-save').innerHTML=`₹ ${sum-Math.floor(sum*70/100)+55}`

addtoCart()




function addtoCart(){
  let addToCart=JSON.parse(localStorage.getItem('cartData'))||[]

  let total_cart=`${addToCart.map(item=>cartappand(item.avatar,item.description,item.id,item.price,item.rating)).join('')}`

  appendcard.innerHTML=total_cart
}

function cartappand(image,desc,ids,price,rating){
  let originalprice=Math.floor(price*70/100)
  let cart=
  
  `
  <div class="Add-product" style="height: 9rem">
                <div class="product-image">
                  <img
                    src="${image}"
                    alt=""
                  />
                </div>
                <div class="product-details">
                  <p>${desc}</p>
                  <select id="Select-product">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                 
                  <div class="remove-btn">
                    <button onclick="removeItem(${ids})">remove</button>
                    <button>Move to Wishlist</button>
                  </div>
                </div>
                <div class="product-price">
                  <p>${originalprice}</p>
                  <div class="off-price">
                    <p>₹ ${price}</p>
                    <span>30%off</span>
                  </div>
                </div>
              </div>
     
  `
  return cart
}  

function removeItem(ids){
  console.log(typeof ids)
  let addToCart=JSON.parse(localStorage.getItem('cartData'))||[]
 let data=addToCart.filter((item)=>{
  if(item.id!= ids){
    return item
  }
 })
 localStorage.setItem("cartData", JSON.stringify(data));
 addtoCart();
}




function SendPaymentPage(){
  window.location.assign('../HTML/Order.html')
}
