import React from 'react';
import Month from './month';
import data from '../data/data100.json';

export default class BdayCalendar extends React.Component
{
    constructor(props)
    {
        super(props);
        // alert("bconstructor")
    }

    componentWillMount()
    {
        
    }

    componentWillReceiveProps(nextProps)
    {
        // alert(JSON.stringify(nextProps));
    }

    render()
    {
        console.info(data.length);
        
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

        data.map((item, index)=>
        {
            let date=new Date(item.dob)
            let month=date.getMonth();
            if(month==0)
            {
                //console.info(JSON.stringify(item))
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

        })

        // alert(`jan ${jan.length}
        //         feb ${feb.length}`)
        return(
            <div>
                <Month name="January" entryArray={jan}/>
                <Month name="February" entryArray={feb}/>
                <Month name="March" entryArray={mar}/>
                <Month name="April" entryArray={apr}/>
                <Month name="May" entryArray={may}/>
                <Month name="June" entryArray={jun}/>
                <Month name="July" entryArray={jul}/>
            </div>
        )

    }
}