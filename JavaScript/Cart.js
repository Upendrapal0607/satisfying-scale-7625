// let Total_price=document.getElementById('Total')
// let Saving_money=document.querySelector('.saving-money')
// let Sub_total=document.querySelector('.Sub-total')
// let shiping_charge=document.querySelector('.Shiping-charge')
// let oreder_discount=document.querySelector('.Order-discount')
// let Your_Saving=document.querySelector('.Your-saving')
// totalPrice();

// let data = JSON.parse(localStorage.getItem("items"));
// function totalPrice() {
//   let total = 0;
//   let items = JSON.parse(localStorage.getItem("items"));
// console.log(items);
//   for (let i = 0; i < items.length; i++) {
//     total += Number(items[i].price);
//   }

//   let h2 = document.getElementById("cart_total");
//   h2.innerText = total;
// }


// function append() {
//     let data=JSON.parse(localStorage.getItem("items"));
//     let container = document.getElementById("items");
//     data.map((el, index) => {
      
  
//       btn.onclick = () => {
//         addToCart(el);
//       };
  
//       div.append();
//       container.appendChild(div);
//     });
//   }

// function removeproduct(){
//     let data = JSON.parse(localStorage.getItem("items"));
   
//     data = data.filter((el) => {
//        if(el.id!==id){
//        return el
//       }
     
//     });
  
//     localStorage.setItem("items", JSON.stringify(data));
//     append();
//     totalPrice();
// }





function SendPaymentPage(){
  // console.log('upendra');
  window.location.assign('../HTML/Order.html')
}