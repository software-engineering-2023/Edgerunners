
function requestalert(){
    const comments = document.getElementById("comments").value;
    if(comments == ""){
 alert("Please enter your issue.")
}else{
    alert("Your comments have been received by and admin and the issue will be solved as soon as possible.")

}
}

function requestalert2(){
    const dropdown = document.getElementById("name")
    if(dropdown.value == "bill"){
        alert("Please choose your problem")
    }
    else{
        alert("Your comments have been received by and admin and the issue will be solved as soon as possible.")
    }
}

