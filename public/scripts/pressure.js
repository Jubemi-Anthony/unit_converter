//GETTING THE DIV FOR THE RESULTS
const resultsC = document.querySelector('.results');

//GETTING THE UNIT SELECT FROM THE HTML
const pressureS = document.querySelector('#pressure-s');

// CONVERTING PASCAL
const pascalToBarr = (pascal) =>{
    const barr= pascal / 100000 ;
    return barr;
}
const pascalToMmhg = (pascal) =>{
    const mmhg = pascal / 101325;
    return mmhg;
}
const pascalToTorr = (pascal) =>{
    const torr= pascal / 133.322368 ;
    return torr;
}

//CONVERTING BARR
const barrToMmhg = (barr) =>{
    const mmhg = barr / 1.01325 ;
    return mmhg;
}
const barrToTorr = (barr) =>{
    const torr= barr * 750.061685 ;
    return torr;
}
const barrToPascal = (barr) =>{
    const pascal = barr * 100000 ;
    return pascal;
}

//CONVERTING STANDARD ATP
const mmghToBarr = (mmhg) =>{
    const barr = mmhg * 1.01325;
    return barr;
}
const mmghToTorr = (mmhg) =>{
    const torr = mmhg * 760.000002;
    return torr;
}
const mmghToPascal = (mmhg) =>{
    const pascal = mmhg * 101325;
    return pascal;
}

//CONVERTING TORR
const torrToBarr = (torr) =>{
    const barr= torr / 750.061685 ;
    return barr;
}
const torrToMmhg = (torr) =>{
    const mmhg = torr / 760.000002;
    return mmhg;
}
const torrToPascal = (torr) =>{
    const pascal = torr * 133.322368;
    return pascal;
}

export const choosePressure = ()=>{
    const x = input.value;

    const divsL = [];
    const results= [];
    const labels = [];
    for(let i=0; i<4; i++){
        //CREATING DIVS FOR EACH RESULT
        divsL.push(document.createElement('div'));
        divsL[i].setAttribute('class', 'result');
    
        //CREATING PARAGRAPHS FOR EACH RESULT
        results.push(document.createElement('p'));
        labels.push(document.createElement('p'));
    
        //APPENDING THE ELEMENTS TO THE BODY
        divsL[i].appendChild(results[i]);
        divsL[i].appendChild(labels[i]);
    
        resultsC.appendChild(divsL[i]);
    }

    switch (pressureS.value) {
        case 'Pascal':
            //SETTING THE LABELS
            labels[0].textContent = 'PASCAL:'
            labels[1].textContent = 'BARR:'
            labels[2].textContent = 'STANDARD ATP:'
            labels[3].textContent = 'TORR:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = pascalToBarr(x);
            results[2].textContent = pascalToMmhg(x);
            results[3].textContent = pascalToTorr(x);
        break;
        case 'Torr':
            //SETTING THE LABELS
            labels[0].textContent = 'TORR:'
            labels[1].textContent = 'BARR:'
            labels[2].textContent = 'STANDARD ATP:'
            labels[3].textContent = 'PASCAL:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = torrToBarr(x);
            results[2].textContent = torrToMmhg(x);
            results[3].textContent = torrToPascal(x);
        break;
        case 'Barr':
            //SETTING THE LABELS
            labels[0].textContent = 'BARR:'
            labels[1].textContent = 'PASCAL:'
            labels[2].textContent = 'STANDARD ATP:'
            labels[3].textContent = 'TORR:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = barrToPascal(x);
            results[2].textContent = barrToMmhg(x);
            results[3].textContent = barrToTorr(x);
        break;
        case 'Standard Atmospheric Pressure':
            //SETTING THE LABELS
            labels[0].textContent = 'STANDARD ATP:'
            labels[1].textContent = 'BARR:'
            labels[2].textContent = 'PASCAL:'
            labels[3].textContent = 'TORR:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = mmghToBarr(x);
            results[2].textContent = mmghToPascal(x);
            results[3].textContent = mmghToTorr(x);
        break;
    }
}