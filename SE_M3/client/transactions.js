

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
             'Pronto', 'Arabiata', 'American Eagle', 'السراج', 'Bershka', 'Adidas', 'Nike', 'Michael Jordan'];
    let charactersLength = shops.length;
    result += shops[Math.floor(Math.random() * charactersLength)] + " ";
    return result;
}
function randomMoney(){
    let result = '';
    const problems = [Math.floor(Math.random() * 1000) , Math.floor(Math.random() * 100), Math.floor(Math.random() * 10000)];
    let problemslength = problems.length;
    result += problems[Math.floor(Math.random() * problemslength)];
    result += " EGP";
    return result;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

function randomproblem(){
    let result = '';
    const problems = ['my fish stuck in the tank' , 'credit card theft' , 'how do I pay taxes?','help I cant pay my loan' 
            , 'the send money button doesnt work','my friend Qotoz says banks are evil','how do I steal a bank?','send me the admin login info!',
                'if I have a negative balance what could happen?','my daughter just bought the borj khalifa help!',
                'give me a million dollars and I promise I wont tell anyone']
    let problemslength = problems.length
    result += problems[Math.floor(Math.random() * problemslength)];
    return result;
}

var reports = new Array(20);


function randomAccounts(){    
    for(let i = 0; i < 20; ++i){
        reports[i] = [];
        let data = [makeID(), randomDate(new Date(2012, 0, 1), new Date()), randomTransaction(),randomMoney()];
        for(let j = 0; j < 5; ++j){
            reports[i][j] = data[j];
        }
    }
}

function addBank(){
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
    randomAccounts();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(reports[i][4] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = reports[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = reports[i][1];
            var s3 = document.createElement('SPAN');
            s3.innerHTML = reports[i][2];
            var s4 = document.createElement('SPAN');
            s4.innerHTML = reports[i][3];
            var b = document.createElement('BUTTON');
            b.setAttribute("id", reports[i][0]);
            b.setAttribute("class", 'pending-btn');
            b.innerText = 'unhandled';
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(s3);
            di.appendChild(s4);
            di.appendChild(b);
            di.appendChild(b1);
            d.append(di);
        }
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