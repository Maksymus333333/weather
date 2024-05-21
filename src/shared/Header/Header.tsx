import React, { useContext, useEffect, useState } from "react"; 
import s from './Header.module.scss';
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

interface Props{}




export const Header = (props: Props) => {
    const theme = useTheme();
    const options = [
        { value: 'city-1', label: 'Poznan' },
        { value: 'city-2', label: 'Kyiv' },
        { value: 'city-3', label: 'Zhashkiv' },
      ];
        


    const colourStyles =  {
        control: (styles : any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK  ? '#4f4f4f': 'rgba(71, 142, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            birderRadius: '10px',
            zIndex:100, 
        }),
        singleValue: (styles : any) => ({
            ...styles,
            color: theme.theme === Theme.DARK  ? '#fff': '#000' 
        }),
    }; 
      
  

    function changeTheme(){ 
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK :  Theme.LIGHT);

    }


    
    

       

    return ( 
    <header className={s.header}>
         <div className={s.wrapper}>
        <div className ={s.logo}> <GlobalSvgSelector id = "header-logo" /> </div>
        <div className ={s.title}>React Weather</div>
         </div>


         <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
                 <GlobalSvgSelector id = "change-theme" /> </div>
            <Select defaultValue={options[0]}
             styles={colourStyles}
            options={options} />
         </div>
        
    </header> 
     )
}