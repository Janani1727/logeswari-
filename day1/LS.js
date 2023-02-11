
document.getElementById("form").addEventListener("submit",day1)



function day1(e){
    e.preventDefault()
    // console.log("hi")

    let Nam=document.getElementById("name").value

    let Cour=document.getElementById("course").value

    let data={
         Nam,
        Cour
    }

arr.push(data)

    localStorage.setItem("loge",JSON.stringify(arr))

}


let arr=JSON.parse(localStorage.getItem("loge"))||[]


hello(arr)

function hello(arr){
console.log(arr)

let addedData=document.getElementById("data")

let count=0

arr.forEach((el) => {
   
    count++

    let line1=document.createElement("h4")
    line1.innerText=el.Nam

    let line2=document.createElement("h4")
    line2.innerText=el.Cour
    
addedData.append(line1,line2)

let countedData= document.getElementById("dataCount")
countedData.innerText=count

});

}




