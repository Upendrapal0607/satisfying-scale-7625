


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
