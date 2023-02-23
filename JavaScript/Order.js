let Name_inp=document.querySelector('.Name-inp')
let p_=document.querySelector('.Enter-name')
let pincode=document.querySelector('.Enter-Pincode')
let pincode_inp=document.getElementById('pine-code')
let address_inp=document.getElementById('address')
let Address=document.querySelector('.Enter-address')
let Landmark_inp=document.getElementById('Landmark')
let Landmark=document.querySelector('.Enter-landmark')
let phone_inp=document.getElementById('phone-number')
let phone_number=document.querySelector('.Enter-Number')
 
let Popup=document.getElementById('popup')
        
        Name_inp.addEventListener('input',()=>{
        let Name_inp_value=Name_inp.value
        
        if(Name_inp_value.length<4){
          p_.innerHTML='Name is reuired'
         }
 
     else{
       p_.innerHTML=''
     }
   })
   
   pincode_inp.addEventListener('input',()=>{
     let pincode_value=pincode_inp.value
     
     if(pincode_value.length<6||pincode_value.length>6){
     pincode.innerHTML='Please input your valid Pincode'
   }
   else{
     pincode.innerHTML=''
   }
         })  

         address_inp.addEventListener('input',()=>{
           let address_value=address_inp.value
           
           if(address_value.length<7){
             Address.innerHTML='Please input your valid address. Your order will be delivered here.'
   }
   else{
     Address.innerHTML=''
   }
         })  

         Landmark_inp.addEventListener('input',()=>{
           let Landmark_inp_value=Landmark_inp.value

           if(Landmark_inp_value.length<5){
             Landmark.innerHTML='Please input your any nearest famouse place.'
           }
           else{
     Landmark.innerHTML=''
   }
         })  

         phone_inp.addEventListener('input',()=>{
           let phone_inp_value=phone_inp.value

           if(phone_inp_value.length<10||phone_inp_value.length>10){
             phone_number.innerHTML='Please input your valid Phone No.'
           }
   else{
     phone_number.innerHTML=''
   }
         })  

         function sendnextPage(){
   let phone_inp_value=phone_inp.value
   let Name_inp_value=Name_inp.value
   let pincode_value=pincode_inp.value
   let address_value=address_inp.value
   if(phone_inp_value.length==10&&Name_inp_value.length>=4&&pincode_value.length==6&&address_value.length>5){
 
     
     Popup.classList.add('open-popup')

   }
   else{
     alert('Your Order can not place without filling address & Phone No.')
   }
   
 }
 function closepopup(){
 Popup.classList.remove('open-popup')

 setTimeout(() => {
  window.location.assign('/index.html')

     }, 2000);

}   
         