import React from 'react';
import Month from './month';
import data from '../data/data100.json';


export default function BdayCalendar()
{
        let jan=[];
        let feb=[];
        let mar=[];
        let apr=[];
        let may=[];
        let jun=[];
        let jul=[];
        let aug=[];
        let sep=[];
        let oct=[];
        let nov=[];
        let dec=[];

        //construct an array for indexes for each month entries
        data.map((item, index)=>
        {
            let date=new Date(item.dob)
            let month=date.getMonth();
            if(month==0)
            {
                jan.push(item.index);
            }
            if(month===1)
            {
                feb.push(item.index);
            }
            if(month===2)
            {
                mar.push(item.index);
            }
            if(month===3)
            {
                apr.push(item.index);
            }
            if(month===4)
            {
                may.push(item.index);
            }
            if(month===5)
            {
                jun.push(item.index);
            }
            if(month===6)
            {
                jul.push(item.index);
            }
            if(month===7)
            {
                aug.push(item.index);
            }
            if(month===8)
            {
                sep.push(item.index);
            }
            if(month===9)
            {
                oct.push(item.index);
            }
            if(month===10)
            {
                nov.push(item.index);
            }
            if(month===11)
            {
                dec.push(item.index);
            }

        });

        return(
            //render Month component with its entries
            <div className="appContainer">
                <Month name="JANUARY" entryArray={jan}/>
                <Month name="FEBRUARY" entryArray={feb}/>
                <Month name="MARCH" entryArray={mar}/>
                <Month name="APRIL" entryArray={apr}/>
                <Month name="MAY" entryArray={may}/>
                <Month name="JUNE" entryArray={jun}/>
                <Month name="AUGUST" entryArray={aug}/>
                <Month name="SEPTEMBER" entryArray={sep}/>
                <Month name="OCTOBER" entryArray={oct}/>
                <Month name="NOVEMBER" entryArray={nov}/>
                <Month name="DECEMBER" entryArray={dec}/>
                
            </div>
        )
}