import React from 'react';
import dataDetails from '../data/data100.json';
import colorCodes from '../data/colors.json';

export default function BdayEntry(props)
{
        let randomNum=Math.floor(Math.random() * 13);
        let colorStyle = {backgroundColor: randomNum};
        let iconSize=props.iconSize;
        let index=props.bdayEntry.name.indexOf(" ");
        let name=props.bdayEntry.name.slice(0,index);
        
        return(
            <div className={iconSize} style={{backgroundColor: colorCodes[randomNum]}}>
                <span > {iconSize==="largeEntry"? name: props.bdayEntry.name.charAt(0)  } </span>
            </div>
        )
}