import { getForecast} from "./api/openweather.js";

//main

(async () => {
    const houstonForecast = await getForecast(29.817178,-95.4012915)
    console.log(houstonForecast)








})();