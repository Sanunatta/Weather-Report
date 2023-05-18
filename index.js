const searchbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchBtn');
const weathericon = document.querySelector('.weather-img');


async function checkWeather(city){
    const api_key = "3eaaa12de85207b48fd34d3e53767c63";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;  const apikey="195cc261-9089-48a5-b9f5-0589755fdba5";
    const apiUrl="https://api.meteum.ai/v1/forecast?lat=52.37125&lon=4.89388";

    async function cheackWeather(city){
        const response =await fetch(apiUrl +city+ '&appid=${apikey}');
        if(response.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
            var data =await response.json();

        console.log(data);
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector('.description').innerHTML=data.main.description;
        document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
        document.querySelector('wind-speed').innerHTML=data.wind.speed+"km/hr";

        if(data.wether[0].main == "Clouds"){
            weathericon.src="images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src="images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src="images/rain.png"
        }
       else if(data.weather[0].main == "Drizzle"){
            weathericon.src="images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src="images/mist.png"
        }
        document.querySelector('.weather-body').style.display="block";
        document.querySelector('.location-not-found').style.display="none";

        }
        
    }
    searchbtn.addEventListener("click", ()=>{
        cheackWeather(searchbox.value);
    })
}
   