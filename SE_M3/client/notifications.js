

function makeID(){
    let result = '#';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for(let i = 0; i < 6; ++i){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// function randomName(){
//     let result = '';
//     const names = ['Ahmed', 'Mohamed', 'Hazem', 'Mahmoud', 'Mazen', 'Ashraf', 'Ramzy', 'Abdo', 'Hamoda', 'Yasmeen', 'Khaled',
//              'Rasha', 'Sara', 'Heba', 'Mai', 'Malak', 'John', 'Hamada', 'Abd ElGawad', 'Metwaly', 'Abd ElMeguid', 'Ghaloum',
//             'Refaat', 'Marawan', 'Yahia','Jonathan','Joestar','Joseph'];
//     let charactersLength = names.length;
//     result += names[Math.floor(Math.random() * charactersLength)] + " ";
//     result += names[Math.floor(Math.random() * charactersLength)];
//     return result;
// }

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

function randomproblem(){
    let result = '';
    let num = Math.floor(Math.random() * 100000)
    const problems = ['credit bill is due amount : '+num+' EGP','loan installment is due amount : '+num+' EGP',
        'water bill is due amount : '+num+' EGP','electric bill is due amount : '+num+' EGP','gas bill is due amount : '+num+' EGP'
        ,'telephone bill is due amount : '+num+' EGP','2 days from now Edgerunners Bank will be under maintenance for a 24 hours']
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
