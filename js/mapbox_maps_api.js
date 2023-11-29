import { keys } from "./keys.js";



const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};

const restaurants = [
    {
        name: "Uchi",
        cuisine: "Sushi",
        address: "801 S Lamar Blvd, Austin, TX 78704"
    },
    {
        name: "Jeffrey's",
        cuisine: "American",
        address: "1204 W Lynn St, Austin, TX 78703"
    },

    {
        name: "Odd Duck",
        cuisine: "American",
        address: "1201 S Lamar Blvd, Austin, TX 78704"
    }
];

//MAIN
(async () => {
    const coordinates = await getCoordinates("801 S Lamar Blvd, Austin, TX 78704");
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom: 16,
        speed: 2,
    });
    const popup = new mapboxgl.Popup().setHTML("<p>Uchi</p>");
    const marker = new mapboxgl.Marker({

    })
        .setLngLat(coordinates)
        .addTo(map)
        .setPopup(popup);


})();