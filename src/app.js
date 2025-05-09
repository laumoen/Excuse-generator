window.onload = function() {
    let who = ['my cat ', 'my boyfriend ', 'my sister ', 'my dog '];
    let action = ['ate ', 'peed on ', 'fixed ', 'broke '];
    let what = ['the homework ', 'my phone ', 'my car ', 'the tv '];
    let when = ['before class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch '];
    let where = ['at my house', 'at the park', 'on an airplane', 'in september'];
        let person = Math.floor(Math.random() * who.length);
        let move = Math.floor(Math.random() * action.length);
        let object = Math.floor(Math.random() * what.length);
        let time = Math.floor(Math.random() * when.length);
        let place = Math.floor(Math.random() * where.length);
    document.querySelector("#excuse").innerHTML = who[person] + action[move] + what[object] + when[time] + where[place];
}