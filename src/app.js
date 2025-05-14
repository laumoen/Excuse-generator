window.onload = function() {
    let who = ['my mom ', 'my boyfriend ', 'my sister ', 'my dad '];
    let action = ['ate ', 'drank ', 'fixed ', 'broke '];
    let what = ['my tv ', 'my laptop ', 'my car ', 'my phone '];
    let when = ['during class ', 'when I was sleeping ', 'while I was exercising ', 'while eating '];
    let where = ['at my house', 'at the park', 'on an airplane', 'in september'];
        let person = Math.floor(Math.random() * who.length);
        let move = Math.floor(Math.random() * action.length);
        let object = Math.floor(Math.random() * what.length);
        let time = Math.floor(Math.random() * when.length);
        let place = Math.floor(Math.random() * where.length);
    document.querySelector("#excuse").innerHTML = who[person] + action[move] + what[object] + when[time] + where[place];
}