let who = [ 'The dog', 'My grandma', 'His turtle', 'My bird' ]; 
let action = [ 'ate', 'peed', 'crushed', 'broke' ]; 
let what = [ 'my homework', 'the keys', 'the car' ]; 
let when = [ 'before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying' ]; 

const excuseGenerator = () => {
    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('excuse').innerText = excuseString(who[randomExcuse(who)], action[randomExcuse(action)], what[randomExcuse(what)], when[randomExcuse(when)]);
    })
};

const randomExcuse = (array) => {
    let min = 0;
    let max = array.length - 1;
    let random = Math.floor(Math.random() * (max - min + 1));
    return random;
};

const excuseString = (who, action, what, when) => {return `${who} ${action} ${what} ${when}.`};

excuseGenerator();