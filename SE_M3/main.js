const admin = [{username:"admin",password:"admin"}]
const client = [{username:"client",password:"client"}]
const banker = [{username:"banker",password:"banker"}]
const pages = {
    adminpage: 'admin.html',
    clientpage: 'client.html',
    bankerpage: 'banker.html',
};
function login(){
    const name = document.getElementById('username').value
    const pass = document.getElementById('password').value
    if(name==admin[0].username && pass==admin[0].password){ 
        window.location.replace(pages.adminpage);
        return
    }
    for(var i = 0 ; i<banker.length ; ++i){
        if(name==banker[i].username && pass==banker[i].password){
            window.location.replace(pages.bankerpage);
            return
        }
    }
    for(var i = 0 ; i<client.length ; ++i){
        if(name==client[i].username && pass==client[i].password){
            window.location.replace(pages.clientpage);
            id=0;
            return
        }
    }
    alert("Invalid username or password");
}