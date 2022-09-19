//GETTING THE DIV FOR THE RESULTS
const resultsC = document.querySelector('.results');

//GETTING THE UNIT SELECT FROM THE HTML
const weightS = document.querySelector('#weight-s');

//CONVERTING GRAM
const gramToKilogram = (gram) => {
    const kilogram = gram / 1000;
    return kilogram; 
}
const gramToOunce = (gram) => {
    const ounce = gram / 28.3495231;
    return ounce;    
}
const gramToPound = (gram) => {
    const pound = gram / 453.59237;
    return pound;
}
const gramToTonne= (gram) => {
    const metricTon = gram / 1000000;
    return metricTon;
}
const gramToCarat = (gram) => {
    const carat = gram * 5;
    return carat;
}

//CONVERTING KILOGRAM
const kilogramToGram = (kilogram) => {
    const gram = kilogram * 1000;
    return gram;
}
const kilogramToOunce = (kilogram) => {
    const ounce = (kilogram * 1000) / 28.3495231;
    return ounce;
}
const kilogramToPound = (kilogram) => {
    const pound = (kilogram * 1000)/ 453.59237;
    return pound;
}
const kilogramToTonne= (kilogram) => {
    const metricTon = (kilogram * 1000)/ 1000000;
    return metricTon;
}
const kilogramToCarat = (kilogram) => {
    const carat =(kilogram * 1000)* 5 ;
    return carat;
}

//CONVERTING OUNCE
const ounceToGram = (ounce) => {
    const gram = ounce * 28.3495231 ;
    return gram;
}
const ounceToKilogram = (ounce) => {
    const kilogram = (ounce * 28.3495231)/1000;
    return kilogram; 
}
const ounceToPound = (ounce) => {
    const pound = ounce / 16;
    return pound;
}
const ounceToTonne = (ounce) => {
    const metricTon = ounce *  35273.962 ;
    return metricTon;
}
const ounceToCarat = (ounce) => {
    const carat = ounce * 141.747615;
    return carat;
}

//CONVERTING POUND
const poundToGram = (pound) => {
    const gram =  pound * 453.59237;
    return gram;
}
const poundToKilogram = (pound) => {
    const kilogram = (pound * 453.59237) / 1000;
    return kilogram; 
}
const poundToOunce = (pound) => {
    const ounce = pound * 16;
    return ounce;
}
const poundToTonne = (pound) => {
    const metricTon = pound / 2204.62262;
    return metricTon;
}
const poundToCarat = (pound) => {
    const carat = pound * 2267.96185;
    return carat;
}

//CONVERTING METRIC-TON
const tonneToGram = (metricTon) => {
    const gram =  metricTon * 1000000;
    return gram;
}
const tonneToKilogram = (metricTon) => {
    const kilogram = metricTon * 1000;
    return kilogram; 
}
const tonneToOunce = (metricTon) => {
    const ounce = metricTon * 35273.962;
    return ounce;
}
const tonneToPound = (metricTon) => {
    const pound = metricTon * 2204.62262 ;
    return pound;
}
const tonneToCarat = (metricTon) => {
    const carat = metricTon * 5000000;
    return carat;
}


//CONVERTING CARAT
const caratToGram = (carat) => {
    const gram = carat / 5;
    return gram;
}
const caratToKilogram = (carat) => {
    const kilogram = (carat / 5) / 1000;
    return kilogram;  
}
const caratToOunce = (carat) => {
    const ounce = carat / 141.747615;
    return ounce;
}
const caratToPound = (carat) => {
    const pound = carat / 2267.96185;
    return pound;
}
const caratToTonne = (carat) => {
    const metricTon = carat / 5000000;
    return metricTon;
}

export const chooseWeight = ()=>{
    const x = input.value;

    const divsL = [];
    const results= [];
    const labels = [];
    for(let i=0; i<6; i++){
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

    switch (weightS.value) {
        case 'Gram':
            //SETTING THE LABELS
            labels[0].textContent = 'GRAM:'
            labels[1].textContent = 'KILOGRAM:'
            labels[2].textContent = 'OUNCE:'
            labels[3].textContent = 'POUND:'
            labels[4].textContent = 'METRIC-TON:'
            labels[5].textContent = 'CARAT:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = gramToKilogram(x);
            results[2].textContent = gramToOunce(x);
            results[3].textContent = gramToPound(x);
            results[4].textContent = gramToTonne(x);
            results[5].textContent = gramToCarat(x);
        break;
        case 'Kilo-Gram':
            //SETTING THE LABELS
            labels[0].textContent = 'KILOGRAM:'
            labels[1].textContent = 'GRAM:'
            labels[2].textContent = 'OUNCE:'
            labels[3].textContent = 'POUND:'
            labels[4].textContent = 'METRIC-TON:'
            labels[5].textContent = 'CARAT:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = kilogramToGram(x);
            results[2].textContent = kilogramToOunce(x);
            results[3].textContent = kilogramToPound(x);
            results[4].textContent = kilogramToTonne(x);
            results[5].textContent = kilogramToCarat(x);
        break;
        case 'Pound':
            //SETTING THE LABELS
            labels[0].textContent = 'POUND:'
            labels[1].textContent = 'KILOGRAM:'
            labels[2].textContent = 'OUNCE:'
            labels[3].textContent = 'GRAM:'
            labels[4].textContent = 'METRIC-TON:'
            labels[5].textContent = 'CARAT:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = poundToKilogram(x);
            results[2].textContent = poundToOunce(x);
            results[3].textContent = poundToGram(x);
            results[4].textContent = poundToTonne(x);
            results[5].textContent = poundToCarat(x);
        break;
        case 'Metric-Ton':
            //SETTING THE LABELS
            labels[0].textContent = 'METRIC-TON:'
            labels[1].textContent = 'KILOGRAM:'
            labels[2].textContent = 'OUNCE:'
            labels[3].textContent = 'POUND:'
            labels[4].textContent = 'GRAM:'
            labels[5].textContent = 'CARAT:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = tonneToKilogram(x);
            results[2].textContent = tonneToOunce(x);
            results[3].textContent = tonneToPound(x);
            results[4].textContent = tonneToGram(x);
            results[5].textContent = tonneToCarat(x);
        break;
        case 'Ounce':
            //SETTING THE LABELS
            labels[0].textContent = 'OUNCE:'
            labels[1].textContent = 'KILOGRAM:'
            labels[2].textContent = 'GRAM:'
            labels[3].textContent = 'POUND:'
            labels[4].textContent = 'METRIC-TON:'
            labels[5].textContent = 'CARAT:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = ounceToKilogram(x);
            results[2].textContent = ounceToGram(x);
            results[3].textContent = ounceToPound(x);
            results[4].textContent = ounceToTonne(x);
            results[5].textContent = ounceToCarat(x);
        break;
        case 'Carat':
            //SETTING THE LABELS
            labels[0].textContent = 'CARAT:'
            labels[1].textContent = 'KILOGRAM:'
            labels[2].textContent = 'OUNCE:'
            labels[3].textContent = 'POUND:'
            labels[4].textContent = 'METRIC-TON:'
            labels[5].textContent = 'GRAM:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = caratToKilogram(x);
            results[2].textContent = caratToOunce(x);
            results[3].textContent = caratToPound(x);
            results[4].textContent = caratToTonne(x);
            results[5].textContent = caratToGram(x); 
        break;
    }
}