let newlaunch=[
    {
        img:"https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1674482021.jpg?dim=1440x0",
        title:"Shelcal 500mg Strip Of 15 Tablets"   ,
         price:" MRP Rs.131.30",
         off:"5% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1672136925.jpg?dim=1440x0",
        title:"Acne Uv Spf 50 Gel 50gm"   ,
         price:" MRP Rs.875.30",
         off:"15% OFF" 
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
        title:"I Pill Emergency Contraceptive Pill"   ,
         price:" MRP Rs.110",
         off:"10% OFF" 
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
        title:"I Pill Emergency Contraceptive Pill"   ,
         price:" MRP Rs.10",
         off:"10% OFF" 
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1674482021.jpg?dim=1440x0",
        title:"Shelcal 500mg Strip Of 15 Tablets"   ,
         price:" MRP Rs.131.30",
         off:"5% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1672136925.jpg?dim=1440x0",
        title:"Acne Uv Spf 50 Gel 50gm"   ,
         price:" MRP Rs.875.30",
         off:"15% OFF" 
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
        title:"I Pill Emergency Contraceptive Pill"   ,
         price:" MRP Rs.180",
         off:"10% OFF" 
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
        title:"I Pill Emergency Contraceptive Pill"   ,
         price:" MRP Rs.810",
         off:"10% OFF" 
    }
]

localStorage.setItem("newlaunchcart",JSON.stringify(newlaunch))

let newlaunchdata=JSON.parse(localStorage.getItem("newlaunchcart"))||[]
console.log(newlaunchdata)
displayNewLaunch(newlaunchdata)



function displayNewLaunch(newlaunchdata){
    let container1=document.getElementById("newlaunches")
    newlaunchdata.forEach((el,index) => {
        
    let card=document.createElement("div")
     card.setAttribute("id","card")
     card.addEventListener("click",function(){
        localStorage.setItem("productlist",JSON.stringify(newlaunchdata[index]))
        window.location.href="product.html"
    })
    

     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price
    
     let offer=document.createElement("p")
     offer.innerText=el.price

     card.append(image,tit,pri,offer)
     container1.append(card)

    
    });
 
}
const lh=()=>{
    // console.log("LH");
    let sortdata = newlaunch.sort(function(a,b){
        return a.price - b.price ;
      });
      console.log(sortdata)
   displayNewLaunch(sortdata);
    }