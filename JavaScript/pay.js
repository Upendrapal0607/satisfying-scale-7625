let card_Name=document.querySelector('.Card-name')
let card_Number=document.querySelector('.Card-Number')
let Cvv_Number=document.querySelector('.cvv')
let Expiry_YY=document.querySelector('.Expiry-YY')
let Expiry_mm=document.querySelector('.Expiry-mm')
let card_Name_error=document.querySelector('.Sow-Error')
let card_Number_error=document.querySelector('.Sow-Error2')
let upi_popup=document.getElementById('upi-popup')
let replace=document.getElementById('upi-option-2')
let replace2=document.getElementById('upi-option-3')
let massage=document.querySelector('.your')
let Upi_inp=document.getElementById('Upi-id')
let Cash_Dilivery=document.querySelector('.Delivery')
card_Name.addEventListener('input',()=>{
  let card_Name_value=card_Name.value
  if(card_Name_value.length<3){
    card_Name_error.innerHTML='Reqired Car name'
    card_Number_error.innerHTML='Card Number is reqired'
  }
  else{
    card_Name_error.innerHTML=''

  }
})
card_Number.addEventListener('input',()=>{
  let card_Number_value=card_Number.value
  if(card_Number_value.length<11){
    card_Number_error.innerHTML='Card Number is reqired'
  }
  else{
    card_Number_error.innerHTML=''

  }
})

function sendnextpage(){
let card_Number_value=card_Number.value
let Cvv_Number_value=Cvv_Number.value
let Expiry_mm_value=Expiry_mm.value
let Expiry_YY_value=Expiry_YY.value
let card_Name_value=card_Name.value
if(card_Number_value.length>=11&&Cvv_Number_value.length==3&&Expiry_YY_value.length==2&&Expiry_mm_value<=12&&Expiry_mm_value>0&&card_Name_value.length>3){
alert('Your order will be placed')
setTimeout(() => {
  window.location.assign('/index.html')
}, 2000);

}
else{
alert('Please fill correct value')
}
}

function upi(){

upi_popup.classList.add('upi-box-popup-1')
replace.classList.add('u')
replace2.classList.remove('u1')
upi_popup.classList.remove('upi-box-popup-3')
upi_popup.classList.remove('upi-box-popup-2')
replace2.classList.remove('u2')
massage.innerHTML='Enter your UPI id'
}



function remove(){
let Upi_inp_value=Upi_inp.value
if(Upi_inp_value.includes('@')){
upi_popup.classList.remove('upi-box-popup-1')
upi_popup.classList.remove('upi-box-popup-3')
upi_popup.classList.remove('upi-box-popup-2')
replace2.classList.remove('u1')
replace.classList.remove('u')
replace2.classList.remove('u2')
alert('Your order will be placed')
setTimeout(() => {
  window.location.assign('/index.html')
}, 2000);
}
else{
alert('please inter correct UPI')
}
}

function Google(){
massage.innerHTML='Enter your google Pay upi'
upi_popup.classList.remove('upi-box-popup-1')
upi_popup.classList.add('upi-box-popup-2')
replace2.classList.add('u1')
replace.classList.remove('u')
replace2.classList.remove('u2')
upi_popup.classList.remove('upi-box-popup-3')
}

function Payment(){
massage.innerHTML='Enter your Paytm UPI upi ID'
upi_popup.classList.remove('upi-box-popup-2')
upi_popup.classList.remove('upi-box-popup-1')
replace.classList.remove('u')
replace2.classList.remove('u1')
upi_popup.classList.add('upi-box-popup-3')
replace2.classList.add('u2')

}

Cash_Dilivery.addEventListener('click',()=>{
alert('Your order will be placed')
setTimeout(() => {
  window.location.assign('/index.html')
}, 2000);

})

