import React, { useEffect } from "react";
import s from './Home.module.scss';
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { useSelector } from "react-redux";
import { selectCurrentWeatherData } from "../../../store/selectors";

interface Props{
    
}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();
    const {weather} = useCustomSelector(selectCurrentWeatherData);

    useEffect(() => {
        dispatch(fetchCurrentWeather('poznan'))
    }, []);  

    return (
         <div  className={s.home}>  
    <div className={s.wrapper}> 
    <ThisDay weather={weather}/>
    <ThisDayInfo/>
    </div>
    <Days />

     </div>  )
}