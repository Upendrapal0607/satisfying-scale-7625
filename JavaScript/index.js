



let mockapis =  document.getElementById("mock")

async function fetchdata(){
    let resp = await fetch("https://63f612b5ab76703b15b79655.mockapi.io/avatar")
    let data = await resp.json()
    console.log(data)
    displaycards(data)
}

fetchdata()


function displaycards(data){
    mockapis.innerHTML = ""
    data.forEach(el=>{
        let card = document.createElement("div")
        card.classList.add("mockgrid")
        
        let image = document.createElement("img")
        image.setAttribute("src",el.avatar)
        

        card.append(image)
        mockapis.append(card)
    })
}


let thumbnail2 = document.getElementsByClassName("thumbnail2")
let slider2 = document.getElementById("slider2")
let buttonRight2 = document.getElementById("slide-right2")
let buttonLeft2 = document.getElementById("slide-left2")


buttonLeft2.addEventListener("click",() => {

    slider2.scrollLeft -= 150;

  })

  buttonRight2.addEventListener("click",() => {

    slider2.scrollLeft += 150;
 
  })
  
 
  const maxScrollLeft2 =  slider2.scrollWidth - slider2.clientWidth


  function autoPlay1(){
    if(slider2.scrollLeft > (maxScrollLeft2 - 1)){
        slider2.scrollLeft -= maxScrollLeft2;

    //  maxScrollLeft -= slider.scrollLeft
    }else{
        slider2.scrollLeft += 1;
        
    }
}



let thumbnail1 = document.getElementsByClassName("thumbnail1")
let slider1 = document.getElementById("slider1")
let buttonRight1 = document.getElementById("slide-right1")
let buttonLeft1 = document.getElementById("slide-left1")


buttonLeft1.addEventListener("click",() => {

    slider1.scrollLeft -= 150;

  })

  buttonRight1.addEventListener("click",() => {

    slider1.scrollLeft += 150;
 
  })
  
 
  const maxScrollLeft1 =  slider1.scrollWidth - slider1.clientWidth


  function autoPlay1(){
    if(slider1.scrollLeft > (maxScrollLeft1 - 1)){
        slider1.scrollLeft -= maxScrollLeft1;

    //  maxScrollLeft -= slider.scrollLeft
    }else{
        slider1.scrollLeft += 1;
        
    }
}



  
  //product

  let thumbnail = document.getElementsByClassName("thumbnail")
  let slider = document.getElementById("slider")
  let buttonRight = document.getElementById("slide-right")
  let buttonLeft = document.getElementById("slide-left")

  buttonLeft.addEventListener("click",() => {

    slider.scrollLeft -= 150;

  })

  buttonRight.addEventListener("click",() => {

    slider.scrollLeft += 150;
 
  })


  const maxScrollLeft =  slider.scrollWidth - slider.clientWidth
//   alert(maxScrollLeft)
 
// AutoPlaySlider
function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft - 1)){
        slider.scrollLeft -= maxScrollLeft;

    //  maxScrollLeft -= slider.scrollLeft
    }else{
        slider.scrollLeft += 1;
        
    }
}

let play = setInterval(autoPlay,30)


// Pause the slider

for(let i=0; i<thumbnail.length; i++){
    thumbnail[i].addEventListener("mouseover", ()=>{
          clearInterval(play)
    })
    thumbnail[i].addEventListener("mouseout", ()=>{
        return play = setInterval(autoPlay,30)
  })
}


