const celciusInput = document.querySelector('#Celcius > input');
const fahrenheitInput = document.querySelector('#Fahrenheit > input');
const kelvinInput = document.querySelector('#Kelvin > input');

function roundNum(num){
return Math.round(num * 100) / 100;
}

function celciusToFahrenheitandKelvin() {
    const CTemp = parseFloat(Celciusinput.value);
    const FTemp = (CTemp * (9 / 5)) + 32;
    const KTemp = CTemp + 273.15;
    Fahrenheitinput.value = roundNum(FTemp);
    Kelvininput.value = roundNum(KTemp);
}

function fahrenhetToCelciusAndKelvin() {
    const FTemp = parseFloat(Fahrenheitinput.value);
    const CTemp = (FTemp - 32) * (5/9);
    const KTemp = (FTemp + 459.67) * 5/9;
    Celciusinput.value= roundNum(CTemp);
    Kelvininput.value= roundNum(KTemp);
}
  
function kelvinToCelciusAndFahrenheit(){
    const KTemp= parseFloat(kelvinInput.value);
    const CTemp= KTemp - 273.15;
    const FTemp= 9/5 *(KTemp -273) +32;
    celciusInput.value = roundNum(CTemp);
    fahrenheitInput.value = roundNum(FTemp);
}

function main() {
celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin );
fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', KelvinToCelciusAndFahrenheit);
}

main();
