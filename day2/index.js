// https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products


// <---------  async function ----------->

// const getData=async()=>{

//     try{
//              let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`) 

//              let data=res.json()
//     }
//     catch(err){
//         console.log(err)
//     }
// }


async function getData(){

    try{
         let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`) 
        
         let data= await res.json()

         let soln=data.data

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
    
    //  let lowbtn=document.createElement("button")
    //  lowbtn.innerText="low to high" 
    //  lowbtn.style.width="100px"
    //  lowbtn.style.height="50px"


    //  let highbtn=document.createElement("button")
    //  highbtn.innerText="high to low"
    //  highbtn.style.width="100px"
    //  highbtn.style.height="50px"

    soln.forEach((el) => {

        let card=document.createElement("div")
        card.setAttribute("id","cards")
        // card.style.border="1px solid red"

        
        let imag=document.createElement("img")
        imag.src=el.image

        let tit=document.createElement("h3")
        tit.innerText=el.title
         
        let bran=document.createElement("p")
        bran.innerText=el.brand

        let categ=document.createElement("p")
        categ.innerText=el.category

        let pric=document.createElement("p")
        pric.innerText=el.price


      
        card.append(imag,tit,bran,categ,pric)
    container.append(card)
      
    });

}



//  async function low(){

//     // let res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products_sort=price&_order=asc`)

//     // let soln=await res.json()

//     let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)

//     let sort = res.sort((a , b) => a.price - b.price)

//     display(sort)
// }