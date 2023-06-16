console.log('Weather appp using APIs');

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//c3681b7dfdfa887875cc7f804ae6ecf5



//Get All Values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//Get API Key By Login To OpenWeather.org
const API_Key = "c3681b7dfdfa887875cc7f804ae6ecf5";

//Now Add Event Listener to the button
button.addEventListener('click', () => {
  
    //Get Input Value
    const cityInput = inputTxt.value;
    // console.log(cityInput);

    //Now Fetch Through Get API 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            //When Fill Input Field Then Clear Input Field
            inputTxt.value = " ";

            //Now Show All Data Value
            showData.innerHTML =  
            
                               `
                                <ul>
                                <li class="city">Weather in ${data.name},${data.sys.country}</li>
                                <li class="temp">${data.main.temp}°C</li> <br>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="humid">Humidity:${data.main.humidity}%</li>
                                    <li class="speed">Wind Speed:${data.wind.speed }Km/h</li>                                                     
                                </ul>
                                `;


                                
        });
        

});