

let cartdata=JSON.parse(localStorage.getItem("cartlist"))||[]
// console.log(productdata)
cartproduct(cartdata)


function cartproduct(el){
    console.log(el)

    let box=document.getElementById("cart")
    box.innerHTML=null
   
    let card=document.createElement("div")
     card.setAttribute("id","card")
     card.style.border="1px solid black"
     card.style.width="400px"
    
     let image=document.createElement("img")
     image.src=el.img
     image.style.width="200px"
     image.style.height="200px"

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price
    
     let offer=document.createElement("p")
     offer.innerText=el.price

     

     card.append(image,tit,pri,offer)
     box.append(card)

  
    }