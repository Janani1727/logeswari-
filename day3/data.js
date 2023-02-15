
let cartdata=JSON.parse(localStorage.getItem("List")) || [];

console.log(cartdata)

display(cartdata)

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

        let delbtn=document.createElement("button")
        delbtn.setAttribute("id","lh")
        delbtn.innerText="Delete";

        // delbtn.onclick=()=>{
        //    removeItem(id)
        // }

        

        card.append(imag,tit,categ,pric,delbtn)
        container.append(card)
      
    });

}


// let removeItem=(id)=>{

//     card.splice(id,1);

//     localStorage.setItem("products",JSON.stringify(card));

//     display();
// }
