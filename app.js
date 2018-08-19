const Celciusinput = document.querySelector('#Celcius > input');
const Fahrenheitinput = document.querySelector('#Fahrenheit > input');
const Kelvininput = document.querySelector('#Kelvin > input');

function roundNum(num){
return Math.round(num * 100) / 100;
}

function CelciustoFahrenheitandKelvin() {
    const CTemp = parseFloat(Celciusinput.value);
    const FTemp = (CTemp * (9 / 5)) + 32;
    const KTemp = CTemp + 273.15;
    Fahrenheitinput.value = roundNum(FTemp);
    Kelvininput.value = roundNum(KTemp);
}

function FahrenheittoCelciusandKelvin() {
    const FTemp = parseFloat(Fahrenheitinput.value);
    const CTemp = (FTemp - 32) * (5/9);
    const KTemp = (FTemp + 459.67) * 5/9;
    Celciusinput.value= roundNum(CTemp);
    Kelvininput.value= round(KTemp);
}
  
function KelvinttoCelciusandFahrenheit(){
    const KTemp= parseFloat(Kelvininput.value);
    const CTemp= KTemp - 273.15;
    const FTemp= 9/5 *(KTemp -273) +32;
    Celciusinput.value = roundNum(CTemp);
    Fahrenheitinput.value = roundNum(FTemp);
}

function main() {
Celciusinput.addEventListener('input', CelciustoFahrenheitandKelvin );
Fahrenheitinput.addEventListener('input', FahrenheittoCelciusandKelvin);
Kelvininput.addEventListener('input', KelvinttoCelciusandFahrenheit);
}

main();