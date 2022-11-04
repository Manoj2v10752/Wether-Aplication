// https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "6b5c5bbd4ec77108705f9ca22f3fcfa1",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}
function searchvalue(){
    var search = document.getElementById("input-box").value;
    console.log(search)
    getWeatherReport(search);
    document.querySelector('.weather-body').style.display = "block";
}
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ 
    ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
    let weatherhumidity = document.querySelector(".humidity");
    weatherhumidity.innerText = `Humidity:${Math.round(weather.main.humidity)}%`;
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
    } else if(weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('https://www.insurtechinsights.com/wp-content/uploads/2021/02/2019-03-04-tt-10-b2b__coloured-night-clouds-nature-series-ss142415212__1920x1080.jpg')";
    } else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('https://images.news18.com/ibnlive/uploads/2021/07/1627056776_clouds.jpg')";
    }     else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/stormy-sky-with-dramatic-clouds-picture-id1216988871?k=20&m=1216988871&s=612x612&w=0&h=YMQRozCx_c0R-PahE0kNNHRpLsS0DaLDLQt0AtBDVkA=')";
    } else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-vector/dense-white-sun-lighted-clouds-producing-pouring-rain-against-blue-sky-background_1284-56866.jpg?w=2000')";
    } else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('https://img1.rapidleaks.com/2020/11/Why-are-rain-clouds-dark.jpg')";
    } 
}
function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}
function textContent(innerText){
    getWeatherReport(Animation,)
}
