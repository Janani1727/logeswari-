
function submit(){

    let enteredNum=document.getElementById("number").value
     
    // localStorage.setItem("entered",JSON.stringify(enteredNum))

    if(enteredNum.length<10){
        alert("error")
    }
    else{
        let x = Math.floor((Math.random() * 100000) + 1);
        localStorage.setItem("otp",JSON.stringify(x))
        alert(`OTP is ${x}`)
        window.location.href='otp.html'
    }
}