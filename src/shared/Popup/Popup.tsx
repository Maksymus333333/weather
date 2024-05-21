import React from "react"; 
import s from './Popup.module.scss';
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
//import Select from "react-select";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
interface Props{ 
}
 
export const Popup = ({}: Props) => {
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
        <> 
        <div className = {s.blur} ></div>
    <div className={s.popup}> 

    <div className = {s.day} >
    <div className = {s.day_temp } > 20° </div>
    <div className ={ s.day_name } > Wednesday</div>
    <div className = {s.img } ><GlobalSvgSelector id = "sun"/></div>
    <div className={s.day_time}> Time: <span>21:54</span> </div> 
    <div className={s.day_city}>  Time: <span>Poznan</span>  </div>
    </div>

        <div className={s.this_day_info_items}>
        {items.map((item: Item) => (
            <ThisDayItem key = {item.icon_id} item={item}/>
        ))} 
        </div>  
        <div className = {s.close}> 
        <GlobalSvgSelector id = "close" />
         </div>
    </div>  
    </>
     )
}