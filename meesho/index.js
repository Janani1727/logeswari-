 async function getdata(){

     let res=await fetch(`https://meesho-backend-3037.onrender.com/products?category=Jewellery`) 
     let data= await res.json()
    
     display(data)
}

getdata()


function display(data){
    // console.log("data",data)

    let cont= document.getElementById("main")
    cont.innerHTML=null

    data.forEach(el => {
        
        let card1= document.createElement("div")
        card1.setAttribute("id","card")
       
        let card2= document.createElement("div")
        card2.setAttribute("id","card2")

        let div1= document.createElement("div")
        div1.style.width="100px"
        div1.style.height="80px"
        let div2= document.createElement("div")
        div2.style.width="100px"
        div2.style.height="80px"
        let div3= document.createElement("div")
        div3.style.width="100px"
        div3.style.height="80px"


       


        


        let image1=document.createElement("img")
        image1.src=el.images[0]

        let image2=document.createElement("img")
        image2.src=el.images[1]
        
        let image3=document.createElement("img")
        image3.src=el.images[2]
        
        let image4=document.createElement("img")
        image4.src=el.images[3]
        
        
        
        // let name=document.createElement("h2")
        // name.innerText=el.title

        // let categ=document.createElement("h2")
        // categ.innerText=el.category

        // let price=document.createElement("h2")
        // price.innerText=el.original_price
       
        // let rat=document.createElement("h2")
        // rat.innerText=el.rating
          
div1.append(image2)
div2.append(image3)
div3.append(image4)

        
        card2.append(div1,div2,div3)
        card1.append(image1)
        cont.append(card2,card1)


    });
}