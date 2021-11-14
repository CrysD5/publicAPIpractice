const nameElement = document.getElementById("name");


fetch('https://api.github.com/users/crysd5')
.then(response => response.json())
.then(data => {
    nameElement.innerText = " " + data.name;
});



const tempElement = document.getElementById("temp");

//let zipCode = '44124';
let countryCode = 'us';

const apiKey = '1e52059ad9b2ca00f68fee60e948cb63';



function GetWeather(){
  const zipCode = document.getElementById('zip').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=imperial&appid=${apiKey}`)
.then(response => response.json())
.then(woogy => {

  console.log(woogy);

  tempElement.innerText = woogy.name + " currently has a temp of " +woogy.main.temp;
});

}

    