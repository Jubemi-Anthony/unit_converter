//GETTING THE DIV FOR THE RESULTS
const resultsC = document.querySelector('.results');

//GETTING THE UNIT SELECT FROM THE HTML
const lengthS = document.querySelector('#distance-s');

//CONVERT METER
const meterToInch = (meter) =>{
    const inch = meter * 39.3700787402;
    return inch;
}
const meterToMile = (meter) =>{
    const mile = meter / 1609.344;
    return mile;
}
const meterToFoot = (meter) =>{
    const foot = meter * 3.2808399;
    return foot;
}
const meterToCentiMeter = (meter) =>{
    const centi_meter = meter * 100;
    return centi_meter;
}
const meterToMiliMeter = (meter) =>{
    const mili_meter = meter * 1000;
    return mili_meter;
}
const meterToYard = (meter) =>{
    const yard = meter * 1.0936133;
    return yard;
}
const meterToKiloMeter = (meter) =>{
    const kilo_meter = meter / 1000;
    return kilo_meter;
}

//CONVERT INCH
const inchToMeter = (inch) =>{
    const meter = inch / 39.3700787402;
    return meter;
}
const inchToCentiMeter = (inch) =>{
    const centi_meter = inch / (39.3700787402 / 100);
    return centi_meter;
}
const inchToMiliMeter = (inch) =>{
    const mili_meter = inch / (39.3700787402 / 1000);
    return mili_meter;
}
const inchToKiloMeter = (inch) =>{
    const kilo_meter = inch / (39.3700787402 * 1000);
    return kilo_meter;
}
const inchToYard = (inch) =>{
    const yard = inch / 36;
    return yard;
}
const inchToMile = (inch) =>{
    const mile = inch / 63360;
    return mile;
}
const inchToFoot = (inch) =>{
    const foot = inch / 12;
    return foot;
}

//CONVVERT MILE
const mileToMeter = (mile) =>{
    const meter = mile * 1609.344;
    return meter;
}
const mileToCentiMeter = (mile) =>{
    const centi_meter = mile * (1609.344 * 100);
    return centi_meter;
}
const mileToMiliMeter = (mile) =>{
    const mili_meter = mile * (1609.344 * 1000);
    return mili_meter
}
const mileToKiloMeter = (mile) =>{
    const kilo_meter = mile * (1609.344 / 1000);
    return kilo_meter;
    
}
const mileToInch = (mile) =>{
    const inch = mile * 63360;
    return inch;
}
const mileToYard = (mile) =>{
    const yard = mile * 1760;
    return yard;
}
const mileToFoot = (mile) =>{
    const foot = mile * 5280;
    return foot;
}

//CONVERT FOOT
const footToMeter = (foot) =>{
    const meter = foot / 3.2808399;
    return meter;
}
const footToCentiMeter = (foot) =>{
    const centi_meter = foot / (3.2808399 * 100);
    return centi_meter;
}
const footToMiliMeter = (foot) =>{
    const mili_meter = (foot / 3.2808399) * 1000;
    return mili_meter;
}
const footToKiloMeter = (foot) =>{
    const kilo_meter = (foot / 3.2808399) / 1000;
    return kilo_meter;
}
const footToYard = (foot) =>{
    const yard = foot / 3;
    return yard;
}
const footToInch = (foot) =>{
    const inch = foot * 12;
    return inch;
}
const footToMile = (foot) =>{
    const mile = foot / 5280;
    return mile;
}

//CONVERT CENTI-METER
const centiMeterToMeter = (centi_meter) =>{
    const meter = centi_meter / 100;
    return meter;
}
const centiMeterToMiliMeter = (centi_meter) =>{
    const mili_meter = centi_meter * 10;
    return mili_meter;
}
const centiMeterToKiloMeter = (centi_meter) =>{
    const kilo_meter = centi_meter / 100000;
    return kilo_meter;
}
const centiMeterToInch = (centi_meter) =>{
    const inch = centi_meter * (39.3700787402 / 100);
    return inch;
}
const centiMeterToMile = (centi_meter) =>{
    const mile = centi_meter / (1609.344 / 100);
    return mile;
}
const centiMeterToFoot = (centi_meter) =>{
    const foot = centi_meter * (3.2808399 / 100);
    return foot;
}
const centiMeterToYard = (centi_meter) =>{
    const yard = (centi_meter * 1.0936133) / 100;
    return yard;
}

//CONVERT MILIMETER
const miliMeterToMeter = (mili_meter) =>{
    const meter = mili_meter / 1000;
    return meter;
}
const miliMeterToCentiMeter = (mili_meter) =>{
    const centi_meter = mili_meter / 10;
    return centi_meter;
}
const miliMeterToKilometer = (mili_meter) =>{
    const kilo_meter = mili_meter / 1000000;
    return kilo_meter;

}
const miliMeterToInch = (mili_meter) =>{
    const inch = mili_meter * (39.3700787402 / 1000);
    return inch;
}
const miliMeterToMile = (mili_meter) =>{
    const mile = mili_meter / (1609.344 / 1000);
    return mile;
}
const miliMeterToFoot = (mili_meter) =>{
    const foot = (mili_meter * 3.2808399) / 1000;
    return foot;
}
const miliMeterToYard = (mili_meter) =>{
    const yard = (mili_meter * 1.0936133) / 1000;
    return yard;
}

//CONVERT YARD
const yardToMeter = (yard) =>{
    const meter = yard / 1.0936133;
    return meter;
}
const yardToCentiMeter = (yard) =>{
    const centi_meter = (yard / 1.0936133) * 100;
    return centi_meter;
}
const yardToMiliMeter = (yard) =>{
    const mili_meter = (yard / 1.0936133) * 1000;
    return mili_meter;
}
const yardToKiloMeter = (yard) =>{
    const kilo_meter = (yard / 1.0936133) / 1000;
    return kilo_meter;
}
const yardToFoot = (yard) =>{
    const foot = yard * 3;
    return foot;
}
const yardToInch = (yard) =>{
    const inch = yard * 36;
    return inch;
}
const yardToMile = (yard) =>{
    const mile = yard / 1760;
    return mile;
}

//CONVERT KILOMETER
const kiloMeterToMeter = (kilo_meter) =>{
    const meter = kilo_meter * 1000;
    return meter;
}
const kiloMeterToCentiMeter = (kilo_meter) =>{
    const centi_meter = kilo_meter * 100000;
    return centi_meter;
}
const kiloMeterToMiliMeter = (kilo_meter) =>{
    const mili_meter = kilo_meter * 1000000;
    return mili_meter;
}
const kiloMeterToInch = (kilo_meter) =>{
    const inch = kilo_meter * (39.3700787402 * 1000);
    return inch;
}
const kiloMeterToMile = (kilo_meter) =>{
    const mile = kilo_meter / (1609.344 / 1000);
    return mile;
}
const kiloMeterToFoot = (kilo_meter) =>{
    const foot = (kilo_meter * 3.2808399) * 1000;
    return foot;
}
const kiloMeterToYard = (kilo_meter) =>{
    const yard = (kilo_meter * 1.0936133) * 1000;
    return yard;
}

export const chooseLength = ()=>{
    const x = input.value;

    const divsL = [];
    const results= [];
    const labels = [];
    for(let i=0; i<8; i++){
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

    switch (lengthS.value) {
        case 'Meter':
            //SETTING THE LABELS
            labels[0].textContent = 'METER:'
            labels[1].textContent = 'INCH:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'CENTI-METER:'
            labels[4].textContent = 'MILI-METER:'
            labels[5].textContent = 'KILO-METER:'
            labels[6].textContent = 'FOOT:'
            labels[7].textContent = 'MILE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = meterToInch(x);
            results[2].textContent = meterToYard(x);
            results[3].textContent = meterToCentiMeter(x);
            results[4].textContent = meterToMiliMeter(x);
            results[5].textContent = meterToKiloMeter(x);
            results[6].textContent = meterToFoot(x);
            results[7].textContent = meterToMile(x);
        break;
        case 'Yard':
            
        break;
        case 'Centi-Meter':
            //SETTING THE LABELS
            labels[0].textContent = 'CENTI-METER:'
            labels[1].textContent = 'INCH:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'METER:'
            labels[4].textContent = 'MILI-METER:'
            labels[5].textContent = 'KILO-METER:'
            labels[6].textContent = 'FOOT:'
            labels[7].textContent = 'MILE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = centiMeterToInch(x);
            results[2].textContent = centiMeterToYard(x);
            results[3].textContent = centiMeterToMeter(x);
            results[4].textContent = centiMeterToMiliMeter(x);
            results[5].textContent = centiMeterToKiloMeter(x);
            results[6].textContent = centiMeterToFoot(x);
            results[7].textContent = centiMeterToMile(x);
        break;
        case 'Mili-Meter':
            //SETTING THE LABELS
            labels[0].textContent = 'MILI-METER:'
            labels[1].textContent = 'INCH:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'CENTI-METER:'
            labels[4].textContent = 'METER:'
            labels[5].textContent = 'KILO-METER:'
            labels[6].textContent = 'FOOT:'
            labels[7].textContent = 'MILE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = miliMeterToInch(x);
            results[2].textContent = miliMeterToYard(x);
            results[3].textContent = miliMeterToCentiMeter(x);
            results[4].textContent = miliMeterToMeter(x);
            results[5].textContent = miliMeterToKilometer(x);
            results[6].textContent = miliMeterToFoot(x);
            results[7].textContent = miliMeterToMile(x); 
        break;
        case 'Kilo-Meter':
            //SETTING THE LABELS
            labels[0].textContent = 'KILO-METER:'
            labels[1].textContent = 'INCH:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'CENTI-METER:'
            labels[4].textContent = 'MILI-METER:'
            labels[5].textContent = 'METER:'
            labels[6].textContent = 'FOOT:'
            labels[7].textContent = 'MILE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = kiloMeterToInch(x);
            results[2].textContent = kiloMeterToYard(x);
            results[3].textContent = kiloMeterToCentiMeter(x);
            results[4].textContent = kiloMeterToMiliMeter(x);
            results[5].textContent = kiloMeterToMeter(x);
            results[6].textContent = kiloMeterToFoot(x);
            results[7].textContent = kiloMeterToMile(x); 
        break;
        case 'Inch':
            //SETTING THE LABELS
            labels[0].textContent = 'INCH:'
            labels[1].textContent = 'METER:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'CENTI-METER:'
            labels[4].textContent = 'MILI-METER:'
            labels[5].textContent = 'KILO-METER:'
            labels[6].textContent = 'FOOT:'
            labels[7].textContent = 'MILE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = inchToMeter(x);
            results[2].textContent = inchToYard(x);
            results[3].textContent = inchToCentiMeter(x);
            results[4].textContent = inchToMiliMeter(x);
            results[5].textContent = inchToKiloMeter(x);
            results[6].textContent = inchToFoot(x);
            results[7].textContent = inchToMile(x);
        break;
        case 'Foot':
            //SETTING THE LABELS
            labels[0].textContent = 'FOOT:'
            labels[1].textContent = 'INCH:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'CENTI-METER:'
            labels[4].textContent = 'MILI-METER:'
            labels[5].textContent = 'KILO-METER:'
            labels[6].textContent = 'METER:'
            labels[7].textContent = 'MILE:'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = footToInch(x);
            results[2].textContent = footToYard(x);
            results[3].textContent = footToCentiMeter(x);
            results[4].textContent = footToMiliMeter(x);
            results[5].textContent = footToKiloMeter(x);
            results[6].textContent = footToMeter(x);
            results[7].textContent = footToMile(x);
        break;
        case 'Mile':
            //SETTING THE LABELS
            labels[0].textContent = 'MILE:'
            labels[1].textContent = 'INCH:'
            labels[2].textContent = 'YARD:'
            labels[3].textContent = 'CENTI-METER:'
            labels[4].textContent = 'MILI-METER:'
            labels[5].textContent = 'KILO-METER:'
            labels[6].textContent = 'FOOT'
            labels[7].textContent = 'METER'

            //SETTING THE RESULTS
            results[0].textContent = x;
            results[1].textContent = mileToInch(x);
            results[2].textContent = mileToYard(x);
            results[3].textContent = mileToCentiMeter(x);
            results[4].textContent = mileToMiliMeter(x);
            results[5].textContent = mileToKiloMeter(x);
            results[6].textContent = mileToFoot(x);
            results[7].textContent = mileToMeter(x);
        break;
    }
}