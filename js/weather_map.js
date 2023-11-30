import { keys } from "./keys.js";
import { getForecast } from "./api/openweather.js";
import { getCoordinates } from "./api/mapbox.js";
const createWeatherCard = (weather) =>{
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const weatherCard = document.createElement("div");
    const day = new Date(weather.dt * 1000);
    const dayString = `${months[day.getMonth()]} ${day.getDate()}, ${day.getFullYear()}`;
    const icon = weather.weather[0].icon;
    const iconSRC = `https://openweathermap.org/img/wn/${icon}@2x.png`
    weatherCard.classList.add('d-flex')
    weatherCard.innerHTML = `
        <div class="card d-flex p-2 align-items-center" style="width: 12rem;height: 14rem">
            <div>
                <img src= ${iconSRC} width="75" height="75">
                <h4 class="card-title"> ${dayString}</h4>
                <p class="card-title">Humidity - ${weather.humidity}</p>
                <p class="card-title">Tempurature - ${weather.temp.day}</p>
            </div>
        </div>
    `;
    document.querySelector(".card_container").appendChild(weatherCard)
}
const updateWeatherCards = async (searchTerm, map) => {
    const coordinates = await getCoordinates(searchTerm);
    const weatherForecast = await getForecast(coordinates[1], coordinates[0]);
    map.setCenter(coordinates);
    const cardContainer = document.querySelector(".card_container");
    cardContainer.innerHTML = "";
    for (let i = 0; i<5; i++) {
        createWeatherCard(weatherForecast.daily[i]);
    }
}
async function submitInput(map) {
    let location = document.getElementById('exampleFormControlInput1').value;
   await updateWeatherCards(location, map);
}

(async () => {
    const coordinates = await getCoordinates(location);
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/navigation-night-v1",
        center: coordinates,
        zoom: 9,
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom: 10,
        speed: 2,
    });
    await updateWeatherCards(location,map)
    document.getElementById('submit').addEventListener('click', function() {
        submitInput(map);
    });
})();