var balance = 5000;
document.getElementById("balance").innerHTML = "  "+balance+"  ";
function sendMoney(){
    var sent = document.getElementById("enterAmount").value;
    var sentTO = document.getElementById("enterName").value;
    if(sent != "" && sentTO != "" && !isNaN(sent)){
        if(balance-sent< 0){
            alert("Not Enough Balance");
            return;
        }
        balance = balance - sent;
        document.getElementById("balance").innerHTML =balance;
        window.location.replace("success.html");
    }else{
        alert("Please Enter Correct Values");
    }
}