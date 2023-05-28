// const express = require('express');
// const path = require('path');
// const app = express();
//express Session
//const session = require('express-session');
//app.use(express.static(__dirname + '/public'));
// view engine setup
// var engines = require('consolidate');
// app.set('views', path.join(__dirname, 'views'));
// app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');
//app.set('view engine', 'html');

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(session({ secret: "abcdefghazem1234", resave: false, saveUninitialized: true }));

//setting up the server
// const port =3000;

// app.listen(port, function () {
//   console.log("server running");
//   console.log(`running on localhost: ${port}`);
// });
// app.get('/', function (req, res) {
//     res.render('index');
// });
// app.get('/admin', function (req, res) {
//     res.render('admin');
// });
// app.get('/banker', function (req, res) {
//     res.render('banker');
// });
const admin = [{username:"admin",password:"admin"}]
var client = [{username:"client",password:"client",NID:"0",Phone:"0",fullname:"client"}]
var banker = [{username:"banker1",password:"banker1"},{username:"banker2",password:"banker2"},{username:"banker3",password:"banker3"}]
const pages = {
    adminpage: 'admin.html',
    clientpage: 'client/client.html',
    bankerpage: 'banker.html',
};
function login(){
    const name = document.getElementById('username').value
    const pass = document.getElementById('password').value
    // console.log(name)
    // console.log(pass)
    if(name==admin[0].username && pass==admin[0].password){ 
        window.location.replace(pages.adminpage);
        //app.redirect('/admin');
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
function signup(){
    const namereg = document.getElementById('usernamereg').value
    const passreg = document.getElementById('passreg').value
    const nid = document.getElementById('nationalid').value
    const phone = document.getElementById('phone').value
    const fullnamereg = document.getElementById('fullname').value
    for(var i = 0 ; i<client.length ; ++i){
        if(namereg==client[i].username){
            alert("Username already exists");
            break;
        }
        else if(nid==client[i].NID){
            alert("National ID already exists");
            break;
        }
        else{
            client.push({username:namereg,password:passreg,NID:nid,Phone:phone,fullname:fullnamereg})
            alert("user registered successfully!")
        }
    }
}