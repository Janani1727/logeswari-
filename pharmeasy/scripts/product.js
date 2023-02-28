

let productdata=JSON.parse(localStorage.getItem("productlist"))||[]
// console.log(productdata)
displayproduct(productdata)


function displayproduct(el){

    // console.log(el)

    let box=document.getElementById("product")
    box.innerHTML=null
   
    let card=document.createElement("div")
     card.setAttribute("id","card")
    
     let left=document.createElement("div")
     left.setAttribute("id","left")

     let right=document.createElement("div")
     right.setAttribute("id","right")
    

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
      
    left.append(image)

    right.append(tit,pri,offer,addcart)
    
     card.append(left,right)
     box.append(card)

  
    }