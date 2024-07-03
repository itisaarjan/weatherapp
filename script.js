let button = document.querySelector("button");
const apiKey = "5135fd4d8a26dce47f14646896a2fcc0";
button.addEventListener("click", function() {
    let cityname = document.getElementById("main-input").value;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;

    getWeather(apiURL);
});



// console.log(apiURL);


async function getWeather(apiURL){
    const response=await fetch(apiURL);
    var data=await response.json();

    let {main:{temp,humidity},name,wind:{speed},weather:{main}}=data;
    document.querySelector(".temp").innerText=`${temp}°C`;
    document.querySelector(".city").innerText=`${name.charAt(0).toUpperCase()+ name.slice(1)}`;
    document.querySelector(".wind").innerText=`${speed} km/h`
    document.querySelector(".humidity").innerText=`${humidity}%`

    let img = document.querySelector(".weather-icon");

// let weatherCondition = main.toLowerCase();

// switch (weatherCondition) {
//     case "clear":
//         img.src = "assets/clear.png";
//         break;
//     case "clouds":
//         img.src = "assets/cloudy.png";
//         break;
//     case "drizzle":
//         img.src = "assets/drizzle.png";
//         break;
//     case "rain":
//         img.src = "assets/rain.png";
//         break;  
//     case "snow":
//         img.src = "assets/snow.png";
//         break;
//     case "humidity":
//         img.src = "assets/humidity.png";
//         break;
//     case "mist":
//         img.src = "assets/mist.png";
//         break;
//     default:
//         img.src = "assets/default.png"; // Or any fallback image
//         break;
// }

console.log(data);

}

