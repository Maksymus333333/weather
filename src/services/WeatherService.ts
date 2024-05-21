import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";
import api from "../axios";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(`/weather?q=${city}`);
    }
}