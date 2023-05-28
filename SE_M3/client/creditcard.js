function requestalert(){
      const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const mobile = document.getElementById('mobile').value
        const city = document.getElementById('city').value
        if(name=="" ||email=="" || mobile==""||  city=="" ){
            alert("Please fill missing data");
           }
           else{
             alert("Credit card request submitted");
    }
    }