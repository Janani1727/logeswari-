

let productdata=JSON.parse(localStorage.getItem("productlist"))||[]
// console.log(productdata)
displayproduct(productdata)


function displayproduct(el){
    console.log(el)

    let box=document.getElementById("product")
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
     addcart.innerText="Add to Cart"


     addcart.addEventListener("click",function(){
        localStorage.setItem("cartlist",JSON.stringify(productdata))
     
    })

     card.append(image,tit,pri,offer,addcart)
     box.append(card)

  
    }