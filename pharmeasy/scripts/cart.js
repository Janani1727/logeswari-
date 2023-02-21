

let cartdata=JSON.parse(localStorage.getItem("cartlist"))||[]
// console.log(productdata)
cartproduct(cartdata)


function cartproduct(el){
    console.log(el)

    let box=document.getElementById("cart")
    box.innerHTML=null
   
    let card=document.createElement("div")
     card.setAttribute("id","card")
    
     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price
    
     let offer=document.createElement("p")
     offer.innerText=el.price

     

     let addcart=document.createElement("button")
     addcart.innerText="Delete"


    //  addcart.addEventListener("click",function(){
      
     
    // })

     card.append(image,tit,pri,offer,addcart)
     box.append(card)

  
    }