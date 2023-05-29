

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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

function randomproblem(){
    let result = '';
    let issue = ['RESOLVED','SENT']
    let num = Math.floor(Math.random() * 2)
    const problems = ['cashback issue : '+issue[num],
                        'automatic bill payment error : '+issue[num],
                        'unrecognized charges : '+issue[num],
                        'incorrect interest calculation : '+issue[num],'credit card theft : '+issue[num],
                     'credit card loss : '+issue[num],'credit card damage (need replacement) : '+issue[num]]
    let problemslength = problems.length
    result += problems[Math.floor(Math.random() * problemslength)];
    return result;
}
function transrandom(){
    let result = '';
    let issue = ['successful','unsuccessful']
    let company = ['Water company','Electric company','Gas company', 'Telephone company']
    let companynum = Math.floor(Math.random() * 2)
    let num = Math.floor(Math.random() * 2)
    let number = Math.floor(Math.random() * 100000)
    const problems = ['transaction of '+number+' EGP to '+randomName()+' was : '+issue[num]
                    ,'transaction of '+number+' EGP to '+randomName()+' was : '+issue[num]
                    ,'your transaction of '+number+' to '+randomName()+' was : '+issue[num]
                    , 'your transaction of '+number+' to '+company[companynum]+' was : '+issue[num]
                    ,'your transaction of '+number+' to '+company[companynum]+' was : '+issue[num]]
    let problemslength = problems.length
    result += problems[Math.floor(Math.random() * problemslength)];
    return result;
}
function announceproblem(){
    let result = '';
    const problems = ['Low balance alert','Interest rate increased by 2%','Bank scheduled for 2 hours maintenance','Large ATM withdrawal alert','Unusual activity detected',
                        'New sign in attempt alert',' Exchange rate increased by 5%','Interest Rates decreased by 3%']
    let problemslength = problems.length
    result += problems[Math.floor(Math.random() * problemslength)];
    return result;
}

var reports = new Array(20);


function randomAccounts(){    
    for(let i = 0; i < 20; ++i){
        reports[i] = [];
        let data = [randomDate(new Date(2023, 0, 1), new Date()),randomproblem(), 'Pending'];
        for(let j = 0; j < 3; ++j){
            reports[i][j] = data[j];
        }
    }
}
function randomtransactions(){    
    for(let i = 0; i < 20; ++i){
        reports[i] = [];
        let data = [randomDate(new Date(2023, 0, 1), new Date()),transrandom(), 'Pending'];
        for(let j = 0; j < 3; ++j){
            reports[i][j] = data[j];
        }
    }
}
function randomannounce(){    
    for(let i = 0; i < 20; ++i){
        reports[i] = [];
        let data = [randomDate(new Date(2023, 0, 1), new Date()),announceproblem(), 'Pending'];
        for(let j = 0; j < 3; ++j){
            reports[i][j] = data[j];
        }
    }
}
function addreports(){
    randomAccounts();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(reports[i][2] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = reports[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = reports[i][1];
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(b1);
            d.append(di);
        }
    }   
}
function addtranscations(){
    randomtransactions();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(reports[i][2] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = reports[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = reports[i][1];
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(b1);
            d.append(di);
        }
    }   
}
function addannounce(){
    randomannounce();
    const d = document.getElementById("container");
    d.innerHTML = "";
    for(let i = 0; i < 10; ++i){
        if(reports[i][2] == 'Pending'){
            var di = document.createElement('div');
            var s1 = document.createElement('SPAN');
            s1.innerHTML = reports[i][0];
            var s2 = document.createElement('SPAN');
            s2.innerHTML = reports[i][1];
            var b1 = document.createElement('BUTTON');
            b1.innerText = '>';
            b1.setAttribute("class", 'click-btn');
            di.setAttribute("class", "content");
            di.appendChild(s1);
            di.appendChild(s2);
            di.appendChild(b1);
            d.append(di);
        }
    }   
}
