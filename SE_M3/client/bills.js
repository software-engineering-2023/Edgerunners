
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

function randombill(){
    const billDiv = document.getElementById("cost");
    const dropdown = document.getElementById("name")
    let num = Math.floor(Math.random() * 2700)+300;

    cost.innerHTML = "";
    if(dropdown.value == "bill"){
        document.getElementById("cost").innerHTML = "";
        }
    else {
        billDiv.innerHTML ="Bill cost: EGP " +num;
    }
}

function bill(){
    const cost = document.getElementById("cost").textContent
    const dropdown = document.getElementById("name")
    if(dropdown.value == "bill"){
        alert("Please choose bill type")
    }
    else{
    alert("Account debited by " + cost);
}
}