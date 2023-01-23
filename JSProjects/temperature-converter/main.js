const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

let btn = document.querySelector('.button')
let btnDel = document.querySelector('.del')

let LS = localStorage;
let result;

let arrOfValues = []
let table = document.querySelector('table')



for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}

btnDel.addEventListener('click',function(){
    LS.clear()
    location.reload()
})

window.onload = function() {
    result = JSON.parse(LS.getItem('values'))
    showData(result)

 };

 btn.addEventListener('click', function(e){
    let values = {}
    if(celciusInput.value == ''){
        alert('The input must not be empty')
    }else{
        table.innerHTML += `
        <tr>
            <td>${celciusInput.value}</td>
            <td>${fahrenheitInput.value}</td>
            <td>${kelvinInput.value}</td>
        </tr>
        `

        values['celcius']  = celciusInput.value
        values['fahrenheit']  = fahrenheitInput.value
        values['kelvin']  = kelvinInput.value
        arrOfValues.push(values)

        LS.setItem('values' , JSON.stringify(arrOfValues))
    }
  
})

function showData(arr){
    for (let index in arr) {
        table.innerHTML += `
            <tr>
            <td>${arr[index].celcius}</td>
            <td>${arr[index].fahrenheit}</td>
            <td>${arr[index].kelvin}</td>
        </tr>
            `
    }
}

