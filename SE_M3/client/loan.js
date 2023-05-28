function requestalert(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const mobile = document.getElementById('mobile').value
    const employment = document.getElementById('employment').value
    const city = document.getElementById('city').value
    const residence = document.getElementById('residence').value
    const income = document.getElementById('income').value
    const obligations = document.getElementById('obligations').value
    const loan = document.getElementById('loan').value
    if(name=="" ||email=="" || mobile==""|| employment=="" || city==""
       || residence=="" || income==""||obligations==""||loan=="" ){
        alert("Please fill missing data");
       }
       else{
         alert("Loan request submitted");
}
}