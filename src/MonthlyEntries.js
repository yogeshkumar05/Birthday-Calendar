import React from 'react';
import dataDetails from '../data/data100.json';
import BdayEntry from './BdayEntry';

export default function MonthlyEntries(props)
{
        let dataArray=props.monthEntries;
        let iconSize="smallEntry";
        if(dataArray.length==1)
        {
            iconSize="largeEntry";
        }
        else if(dataArray.length==2)
        {
            iconSize="medEntry";
        }

        let displayEntry=[];
        dataArray.map((item, index)=>
        {
            displayEntry.push(<BdayEntry key={index} bdayEntry={dataDetails[item]} iconSize={iconSize}/>);
        })
      
        return(
            <div>
                {displayEntry}
            </div>
        )

}