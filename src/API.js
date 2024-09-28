import axios from 'axios';

const APIkey = "05086f9c1b192c3ea544760f9f7c73d2";

export async function getCurrentWeather(lat, lon){
    const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);

    return data;
}