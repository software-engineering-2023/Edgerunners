let cntCreditCards = 0;
let cntLoans = 0;
let cntAccounts = 0;

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
            'Refaat', 'Marawan', 'Yahia'];
    let charactersLength = names.length;
    result += names[Math.floor(Math.random() * charactersLength)] + " ";
    result += names[Math.floor(Math.random() * charactersLength)];
    return result;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

function randomAmount(){
    return '$' + Math.floor(Math.random() * 100000);
}

var creditCards = new Array(20);
var loans = new Array(20);
var accounts = new Array(20);


function randomCreditCards(){
    for(let i = 0; i < 20; ++i){
        creditCards[i] = [];
        let data = [makeID(), randomDate(new Date(2012, 0, 1), new Date()), randomName(), randomAmount(), 'Pending'];
        for(let j = 0; j < 5; ++j){
            creditCards[i][j] = data[j];;
        }
    }
}

function randomLoans(){
    for(let i = 0; i < 20; ++i){
        loans[i] = [];
        let data = [makeID(), randomDate(new Date(2012, 0, 1), new Date()), randomName(), randomAmount(), 'Pending'];
        for(let j = 0; j < 5; ++j){
            loans[i][j] = data[j];;
        }
    }
}

function randomAccounts(){    
    for(let i = 0; i < 20; ++i){
        accounts[i] = [];
        let data = [makeID(), randomDate(new Date(2012, 0, 1), new Date()), randomName(), 'Pending'];
        for(let j = 0; j < 4; ++j){
            accounts[i][j] = data[j];
        }
    }
}

function addAccounts(){
    randomAccounts();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(accounts[i][3] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = accounts[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = accounts[i][1];
            var s3 = document.createElement('SPAN');
            s3.innerHTML = accounts[i][2];
            var b = document.createElement('BUTTON');
            b.setAttribute("class", accounts[i][0]);
            b.setAttribute("class", 'pending-btn');
            b.innerText = 'Pending';
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", accounts[i][0]);
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(s3);
            di.appendChild(b);
            di.appendChild(b1);
            d.append(di);
        }
    }
}

function addCreditCards(){
    randomCreditCards();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(creditCards[i][4] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = creditCards[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = creditCards[i][1];
            var s3 = document.createElement('SPAN');
            s3.innerHTML = creditCards[i][2];
            var s4 = document.createElement('SPAN');
            s4.innerHTML = creditCards[i][3];
            var b = document.createElement('BUTTON');
            b.setAttribute("class", creditCards[i][0]);
            b.setAttribute("class", 'pending-btn');
            b.innerText = 'Pending';
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", creditCards[i][0]);
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(s3);
            di.appendChild(b);
            di.appendChild(b1);
            d.append(di);
        }
    }
}

function addLoans(){
    randomLoans();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(loans[i][4] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = loans[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = loans[i][1];
            var s3 = document.createElement('SPAN');
            s3.innerHTML = loans[i][2];
            var s4 = document.createElement('SPAN');
            s4.innerHTML = loans[i][3];
            var b = document.createElement('BUTTON');
            b.setAttribute("class", loans[i][0]);
            b.setAttribute("class", 'pending-btn');
            b.innerText = 'Pending';
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", loans[i][0]);
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(s3);
            di.appendChild(b);
            di.appendChild(b1);
            d.append(di);
        }
    }
}