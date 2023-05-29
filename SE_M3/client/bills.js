function requestalertpartial(){
    const partialBill = document.getElementById('partialBill').value
    if(partialBill=="" || isNaN(partialBill)){
        alert("Please enter valid data");
    }
    else{
        alert("Your account has been debited by " + partialBill);
    }
}

function requestalertfull(){
    alert("Your account has been debited by EGP 8972");
}