let xhr;
function fetchWeather(){
let city=document.getElementById("city").value
console.log(city)
let API_key="81817eb0d9c3a6c5d744a9bd26babd79"
let source=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=process_responce;
    xhr.open("get",source,true);
    xhr.send(null);
}
function process_responce(){
    console.log(xhr.readyState)
    if(xhr.readyState==4){
        let str= xhr.responseText;
        console.log(xhr.responseText)
        let obj=JSON.parse(str)
        console.log(obj)
        let temperature=obj.main.temp
        let humidity=obj.main.humidity
        let pressure =obj.main.pressure
        let max_temp=obj.main.temp_max
        let min_temp=obj.main.temp_min
        let weather=obj.weather[0].description
        let wind_speed=obj.wind.speed
        let wind_deg=obj.wind.deg;
        let span=document.getElementById("weatherInfo")
        span.innerHTML=`<h2>Temperature</h2>${temperature-273}°C
                        <h2>Pressure </h2>${pressure}
                        <h2>Humidity</h2>${humidity}%
                        <h2>Wind Speed</h2> ${wind_speed}
                        <h2>Wind Direction</h2> ${wind_deg}°
                        <h2>Max. Tempeature</h2>${max_temp}
                        <h2>Min. Temperature</h2>${min_temp}
                        <h2>Weather Condition</h2>${weather}    
                    `;
    }
}