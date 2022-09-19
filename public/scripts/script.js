import {chooseLength} from './length.js'
import {chooseWeight} from './weight.js';
import {chooseTemperature} from './temperature.js';
import {choosePressure} from './pressure.js';

//GETTING THE UNIT SELECT BOX FROM THE HTML
const unit = document.querySelector('#units');

//GETTING THE CANCEL IMAGE AND GIVING IT FUNCTION
const cancel = document.querySelector('#cancel');
cancel.addEventListener('click', ()=>{
    resultsC.innerHTML = '';
})

//GETTING THE UNIT SELECT FROM THE HTML
const lengthS = document.querySelector('#distance-s');
const weightS = document.querySelector('#weight-s');
const tempS = document.querySelector('#temperature-s');
const pressureS = document.querySelector('#pressure-s');

//GETTING THE DIV FOR THE RESULTS
const resultsC = document.querySelector('.results');

//GETTING THE INPUT FOR THE CONVERSION
const input = document.querySelector('#input');


//GETTING THE CONVERT BUTTON
const conv = document.querySelector('#conv');

const h = 'hidden';
const c = 'class';

unit.addEventListener('change', ()=>{
    switch (unit.value) {
        case 'Length':
            lengthS.removeAttribute(c);
            weightS.setAttribute(c,h);
            tempS.setAttribute(c,h);
            pressureS.setAttribute(c,h);
            break;
        case 'Weight':
            weightS.removeAttribute(c);
            lengthS.setAttribute(c,h);
            tempS.setAttribute(c,h);
            pressureS.setAttribute(c,h);
            break;
        case 'Temperature':
            tempS.removeAttribute(c);
            weightS.setAttribute(c,h);
            lengthS.setAttribute(c,h);
            pressureS.setAttribute(c,h);
            break;
        case 'Pressure':
            pressureS.removeAttribute(c);
            weightS.setAttribute(c,h);
            lengthS.setAttribute(c,h);
            tempS.setAttribute(c,h);
            break;
    }
})

conv.addEventListener('click', ()=>{
    //CLEARING THE FORMER RESULTS IF ANY
    resultsC.innerHTML = '';
    resultsC.appendChild(cancel);
    

    switch (unit.value) {
        case 'Length':
            chooseLength();
            break;
        case 'Weight':
             chooseWeight();
            break;
        case 'Temperature':
            chooseTemperature();
            break;
        case 'Pressure':
            choosePressure();
            break;
    }
})

//GETTING THE IMAGES, BUTTONS AND DIVS FOR MAIL,INFO AND ABOUT
const page = document.querySelector('#page');
const info = document.querySelector('#info');
const remove = document.querySelector('#remove');

const project = document.querySelector('#project');
const projects = document.querySelector('#projects');
const remove4 = document.querySelector('#remove4');

const aboutUs = document.querySelector('#aboutUs');
const remove2 = document.querySelector('#remove2');
const about = document.querySelector('#about');

const google = document.querySelector('#google');
const maill = document.querySelector('#maill');
const mail = document.querySelector('#mail');
const remove3 = document.querySelector('#remove3');

project.addEventListener('click', ()=>{
    projects.classList.toggle(h);
    about.setAttribute(c,h);
    info.setAttribute(c,h);
    maill.setAttribute(c,h);
    project.style.color = '#2648f6';
    page.style.color = 'black';
    aboutUs.style.color = 'black';
})

function sent(){
    maill.classList.toggle(h);
    about.setAttribute(c,h);
    info.setAttribute(c,h);
    projects.setAttribute(c,h);
    project.style.color = 'black';
    page.style.color = 'black';
    aboutUs.style.color = 'black';
}
mail.addEventListener('click', sent);
google.addEventListener('click', sent);

page.addEventListener('click', ()=>{
    info.classList.toggle(h);
    about.setAttribute(c,h);
    maill.setAttribute(c,h);
    projects.setAttribute(c,h);
    page.style.color = '#2648f6';
    project.style.color = 'black';
    aboutUs.style.color = 'black';
})

aboutUs.addEventListener('click', ()=>{
    about.classList.toggle(h);
    info.setAttribute(c,h);
    maill.setAttribute(c,h);
    projects.setAttribute(c,h);
    aboutUs.style.color = '#2648f6';
    page.style.color = 'black';
    project.style.color = 'black';
})

remove.addEventListener('click', ()=>{
    info.setAttribute(c,h);
    page.style.color = 'black';
})

remove2.addEventListener('click', ()=>{
    about.setAttribute(c,h);
    aboutUs.style.color = 'black';
})

remove3.addEventListener('click', ()=>{
    maill.setAttribute(c,h);
})

remove4.addEventListener('click', ()=>{
    projects.setAttribute(c,h);
    project.style.color = 'black';
})
