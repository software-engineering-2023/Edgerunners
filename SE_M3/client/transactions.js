

function makeID(){
    let result = '#';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for(let i = 0; i < 6; ++i){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomName(){
    let result = '';
    const names = ['Ahmed', 'Mohamed', 'Hazem', 'Mahmoud', 'Mazen', 'Ashraf', 'Ramzy', 'Abdo', 'Hamoda', 'Yasmeen', 'Khaled',
             'Rasha', 'Sara', 'Heba', 'Mai', 'Malak', 'John', 'Hamada', 'Abd ElGawad', 'Metwaly', 'Abd ElMeguid', 'Ghaloum',
            'Refaat', 'Marawan', 'Yahia','Jonathan','Joestar','Joseph'];
    let charactersLength = names.length;
    result += names[Math.floor(Math.random() * charactersLength)] + " ";
    result += names[Math.floor(Math.random() * charactersLength)];
    return result;
}
function randomTransaction(){
    let result = '';
    const shops = ['Zara', 'TBS', 'Pizza Hut', 'starbucks', 'KFC', 'Mac', 'Tommy Hilfiger', 'GUC', 'عم سعد', 'Sultan', 'Dolato',
             'Pronto', 'Arabiata', 'American Eagle', 'السراج', 'Bershka', 'Adidas', 'Nike', 'Michael Jordan','Recieved Money From '+randomName()
            ,'EdgeRunners Monthly fee' , 'Loan Recieved' , 'Gas bill' ,'Electricity bill' ,'Water bill' , 'Telephone bill' , 'Loan Installment'
        ,'Recieved Money From '+randomName(),'Recieved Money From '+randomName(),'Recieved Money From '+randomName(),'Recieved Money From '+randomName()
        ,'Recieved Money From '+randomName()
        ,'Transferred Money to '+randomName(),'Transferred Money to '+randomName(),'Transferred Money to '+randomName(),'Transferred Money to '+randomName()];
    let charactersLength = shops.length;
    result += shops[Math.floor(Math.random() * charactersLength)] + " ";
    return result;
}
function randomTransaction2(){
    let result = '';
    const shops = ['Zara', 'TBS', 'Pizza Hut', 'starbucks', 'KFC', 'Mac', 'Tommy Hilfiger', 'GUC', 'عم سعد', 'Sultan', 'Dolato',
             'Pronto', 'Arabiata', 'American Eagle', 'السراج', 'Bershka', 'Adidas', 'Nike', 'Michael Jordan' ,
              'Gas bill' ,'Electricity bill' ,'Water bill' , 'Telephone bill' ,'Added Credit' ,'Interest For Late payment'
              ,'Added Credit','Added Credit','Added Credit','Added Credit','Added Credit'];
    let charactersLength = shops.length;
    result += shops[Math.floor(Math.random() * charactersLength)] + " ";
    return result;
}
function randomCreditCard(){    
    let date  = new Date().toISOString().slice(0,10);
    let c =0 ;
    for(let i = 0; i < 20; ++i){
        reports[i] = [];
        let trans =randomTransaction2() ;
        let money= randomMoney();
        if(trans.includes('Added')){
            money = '+ '+money;
        }else{
            money = '- '+money;
        }
        let data = [makeID(), date, trans,money];
        date = new Date(2023,4 ,30-c ).toISOString().slice(0,10);
        c++;
        for(let j = 0; j < 5; ++j){
            reports[i][j] = data[j];
        }
    }
}

function randomMoney(){
    let result = '';
    const problems = [Math.floor(Math.random() * 1000)+1 , Math.floor(Math.random() * 100)+1, Math.floor(Math.random() * 10000)+1];
    let problemslength = problems.length;
    result += problems[Math.floor(Math.random() * problemslength)];
    result += " EGP";
    return result;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

var reports = new Array(20);

function randomAccounts(){
    let date  = new Date().toISOString().slice(0,10);
    let c =0 ;
    for(let i = 0; i < 20; ++i){
        reports[i] = [];
        let trans = randomTransaction();
        let money = randomMoney()
        if(trans.includes('Recieved')){
            money = '+ '+money;
        }else{
            money = '- '+money;
        }
        
        let data = [makeID(), date,trans ,money];
        date = new Date(2023,4 ,30-c ).toISOString().slice(0,10);
        c++;
        for(let j = 0; j < 5; ++j){
            reports[i][j] = data[j];
        }
    }
}


function addBank(){
    document.getElementById('LabelID').innerText="Back Account Transactions"
    randomAccounts();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        var di = document.createElement('div');
        var s1 = document.createElement('SPAN');
        s1.innerHTML = reports[i][0];
        var s2 = document.createElement('SPAN');
        s2.innerHTML = reports[i][1];
        var s3 = document.createElement('SPAN');
        s3.innerHTML = reports[i][2];
        var s4 = document.createElement('SPAN');
        s4.innerHTML = reports[i][3];
        var b1 = document.createElement('BUTTON');
        b1.innerText = '>';
        b1.setAttribute("class", 'click-btn');
        di.setAttribute("class", "content");
        di.appendChild(s1);
        di.appendChild(s2);
        di.appendChild(s3);
        di.appendChild(s4);
        di.appendChild(b1);
        d.append(di);        
    }
}
function addCreditCard(){
    document.getElementById('LabelID').innerText="Credit Card Transactions"
    randomCreditCard();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        var di = document.createElement('div');
        var s1 = document.createElement('SPAN');
        s1.innerHTML = reports[i][0];
        var s2 = document.createElement('SPAN');
        s2.innerHTML = reports[i][1];
        var s3 = document.createElement('SPAN');
        s3.innerHTML = reports[i][2];
        var s4 = document.createElement('SPAN');
        s4.innerHTML = reports[i][3];
        var b1 = document.createElement('BUTTON');
        b1.innerText = '>';
        b1.setAttribute("class", 'click-btn');
        di.setAttribute("class", "content");
        di.appendChild(s1);
        di.appendChild(s2);
        di.appendChild(s3);
        di.appendChild(s4);
        di.appendChild(b1);
        d.append(di);        
    }
}
document.addEventListener('click', (e) =>{
    if(e.target.className == 'pending-btn' || e.target.className == 'accepted-btn'){
        change(e);
    }
});

function change(e){
    if(e.target.className == 'pending-btn'){
        var t = document.getElementById(e.target.id);
        t.removeAttribute('class');
        t.setAttribute("class", "accepted-btn");
        t.innerHTML = 'handled';
    }else if(e.target.className == 'accepted-btn'){
        var t = document.getElementById(e.target.id);
        t.removeAttribute('class');
        t.setAttribute("class", "pending-btn");
        t.innerHTML = 'unhandled';
    }
}