import React from "react";  
import s from './ThisDayInfo.module.scss'; 
import cloud from './../../../../assets/images/cloud.png';  
import { ThisDayItem } from "./ThisDayItem";
interface Props{}

export interface Item{
    icon_id: string;
        name: string;
        value: string;
}


export const ThisDayInfo = (props: Props) => {  
      const items  = [
        {
        icon_id: 'temp',
        name: 'Temperature',
        value: '20° feels like 17°',
        },

        {
            icon_id: 'pressure',
            name: 'Pressure',
            value: '765 mm Hg - normal',
        },

        {
            icon_id: 'precipitation',
            name: 'Precipitation',
            value: 'No precipitation',
        },

        {
            icon_id: 'wind',
            name: 'Wind',
            value: '3 m/s southwest - light wind',
        },    
    ];
    return ( 
    <div className={s.this_day_info}>
        <div className={s.this_day_info_items}>
        {items.map((item: Item) => (
            <ThisDayItem key = {item.icon_id} item={item}/>
        ))} 
        </div> 
        <img className = {s.cloud__img} src={cloud} alt = "cloud"/>
    </div> 
     );
};