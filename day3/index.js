
async function getData(){

    try{
         let res=await fetch(`https://mock-server-f2z5.onrender.com/luxury`) 
        
         let data= await res.json()

      let soln=data

         display(soln)

         console.log(soln)
            }
            catch(err){
                console.log(err)
            }
}

getData()


function display(soln){

    let container=document.getElementById("fetchedData")
    container.innerHTML=null;
    


    soln.forEach((el,id) => {

        let card=document.createElement("div")
        card.setAttribute("id","cards")
        // card.style.border="1px solid red"

        
        let imag=document.createElement("img")
        imag.src=el.img

        let tit=document.createElement("h3")
        tit.innerText=el.name
         
    
        
        let categ=document.createElement("p")
        categ.innerText=el.category

        let pric=document.createElement("p")
        pric.innerText=el.price

        // let delbtn=document.createElement("button")
        // delbtn.setAttribute("id","lh")
        // delbtn.innerText="Delete";

        // delbtn.onclick=()=>{
        //    removeItem(id)
        // }

        let addbtn=document.createElement("button")
        addbtn.setAttribute("id","lh")
        addbtn.innerText="ADD TO CART";
        
       addbtn.onclick=()=>{
            addtocart(el); 
        }


        card.append(imag,tit,categ,pric,addbtn)
        container.append(card)
      
    });

}


let cartdata=JSON.parse(localStorage.getItem("CartList")) || [];

function addtocart(el){
    
cartdata.push(el);

localStorage.setItem("List",JSON.stringify(cartdata));

alert("Item Added To Cart Successfully")


}



async function low(){

    let res= await fetch(`https://mock-server-f2z5.onrender.com/luxury?_sort=price&_order=asc`)

    let soln=await res.json()
    console.log(soln)

    display(soln)
}

async function high(){

    let res= await fetch(`https://mock-server-f2z5.onrender.com/luxury?_sort=price&_order=desc`)

    let soln=await res.json()
    console.log(soln)

    display(soln)
}



