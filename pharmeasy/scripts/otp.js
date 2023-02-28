 function enter(){

    let enteredotp=document.getElementById("enteredotp").value

    let otpfromls=JSON.parse(localStorage.getItem("otp"))

    if(enteredotp==otpfromls){
        alert("login successful")
    }
    else{
        alert("enter valid otp")
        window.location.href='index.html'
    }
 }