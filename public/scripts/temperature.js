//GETTING THE DIV FOR THE RESULTS
const resultsC = document.querySelector('.results');

//GETTING THE UNIT SELECT FROM THE HTML
const tempS = document.querySelector('#temperature-s');

//CONVERTING CELCIUS
const celcuisToKelvin = (celcius) =>{
    const kelvin = (celcius * 1) + 273.15
    return kelvin;
}
const celcuisToFahrenheit = (celcius) =>{
    const fahrenheit = (celcius * (9/5) + 32)
    return fahrenheit
}
const celcuisToRankine = (celcius) =>{
 const rankine = (celcius * (9/5) + 32) + 491.67
 return rankine
}

//CONVERTING FAHRENHEIT
const fahrenheitToCelcius = (fahrenheit) =>{
    const celcius = fahrenheit - 32* (5/9)
    return celcius
}
const fahrenheitToKelvin = (fahrenheit) =>{
    const kelvin = (fahrenheit - 32 *(5/9)) + 273.15
    return kelvin;
}
const fahrenheitToRankine = (fahrenheit) =>{
    const rankine = fahrenheit + 459.67
    return rankine
}

//CONVERTING KELVIN
const kelvinToCelcius = (kelvin) =>{
 const celcius = kelvin - 273.15
 return celcius
}
const kelvinToFahrenheit = (kelvin) =>{
    const fahrenheit = 1.8 * (kelvin-273.15) + 32
    return fahrenheit
}
const kelvinToRankine = (kelvin) =>{
    const rankine = (1.8 * (kelvin-273.15) + 32) + 459.67
    return rankine
}

//CONVERTING RANKINE
const rankineToCelcius = (rankine) =>{
    const celcius = ((rankine - 459.67) - 32 * (5/9))
    return celcius
}
const rankineToKelvin = (rankine) =>{
    const kelvin = (((rankine - 459.67)- 32* (5/9)) + 273.15)
    return kelvin;
}
const rankineToFahrenheit = (rankine) =>{
    const fahrenheit = (rankine - 459.67)
    return fahrenheit
}

export const chooseTemperature = ()=>{
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

    switch (tempS.value) {
        case 'Celcius':
            //SETTING THE LABELS
            labels[0].textContent = 'CELCIUS:'
            labels[1].textContent = 'KELVIN:'
            labels[2].textContent = 'FAHRENHEIT:'
            labels[3].textContent = 'RANKINE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = celcuisToKelvin(x);
            results[2].textContent = celcuisToFahrenheit(x);
            results[3].textContent = celcuisToRankine(x);
        break;
        case 'Fahrenheit':
            //SETTING THE LABELS
            labels[0].textContent = 'FAHRENHEIT:'
            labels[1].textContent = 'CELCIUS:'
            labels[2].textContent = 'KELVIN:'
            labels[3].textContent = 'RANKINE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = fahrenheitToCelcius(x);
            results[2].textContent = fahrenheitToKelvin(x);
            results[3].textContent = fahrenheitToRankine(x);
        break;
        case 'Kelvin':
            //SETTING THE LABELS
            labels[0].textContent = 'KELVIN:'
            labels[1].textContent = 'CELCIUS:'
            labels[2].textContent = 'FAHRENHEIT:'
            labels[3].textContent = 'RANKINE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = kelvinToCelcius(x);
            results[2].textContent = kelvinToFahrenheit(x);
            results[3].textContent = kelvinToRankine(x);
        break;
        case 'Rankine':
            //SETTING THE LABELS
            labels[0].textContent = 'RANKINE:'
            labels[1].textContent = 'CELCIUS:'
            labels[2].textContent = 'KELVIN:'
            labels[3].textContent = 'FAHRENHEIT:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = rankineToCelcius(x);
            results[2].textContent = rankineToKelvin(x);
            results[3].textContent = rankineToFahrenheit(x);
        break;
    }
}