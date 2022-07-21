const welcomeEl = document.getElementById('welcome-el');
const myName = 'Dilu';
welcomeEl.innerText = `Hello, ${myName}👋
Welcome back.`;


let el = document.getElementById('glass-count');

console.log(el);
let count = 0;
const increment = () => {
    count += 1;
    el.innerHTML = count;
    // console.log(count);
} 
const save = () => {
    console.log(count)
}

const reset = () => {
    count = 0;
    el.innerHTML = count;
}

document.getElementById('save-btn').addEventListener('click', () => {alert('Saved')})

document.getElementById('reset-btn').addEventListener('click', () => {alert('No. of drinks have been reset')});

const saveEl = document.getElementById('save-el');
const saveEntries = () => {
    // let saveEnt = count + ' -\xa0'; // --> \xa0 for a single space in JS
    // saveEl.innerText += saveEnt;
    
    //We can also use .textContent to avoid writing '\xa0' extra space.
    //For refrence visit -  https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext 
    
    let saveEnt = count + ' - ';
    saveEl.textContent += saveEnt;
    count = 0;
    el.textContent = count;
}

