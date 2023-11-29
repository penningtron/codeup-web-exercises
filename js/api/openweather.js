/**
 * Get forecast from openweather API
 * @param {number} lat - latitude of coordinates
 * @param {number} lng - longitude of the coordinates
 * @returns {Promise<void>} - promise that resolves to the forecast data
 */
import {keys} from "../keys.js";
import {getCoordinates} from "./mapbox.js";

export const getForecast = async (lat, lng) => {
    if(Array.isArray(lat)){
        lng = lat[1];
        lat = lat[0];
    }

    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.weather}`;
    const options = {
        method: "GET",
        // we had to remove the headers because it was making a CORS Error

    };

    const response = await fetch(url, options);
    const weather = response.json();
    return weather;
}



// const coordinates = await getCoordinates(location);
mapboxgl.accessToken = keys.mapbox;
