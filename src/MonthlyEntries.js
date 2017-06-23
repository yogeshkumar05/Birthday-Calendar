import React from 'react';
import dataDetails from '../data/data100.json';
import BdayEntry from './BdayEntry';

export default class MonthlyEntries extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillReceiveProps(nextProps)
    {
        // alert(JSON.stringify(nextProps));
    }

    render()
    {
        // alert(personDetails.length);
        // alert(JSON.stringify(personDetails[0]));
        // alert(JSON.stringify(this.props.data));
        // var d=new Date(this.props.data.dob)
        // alert(d.getMonth());

        let dataArray=this.props.monthEntries;

        let displayEntry=[];
        dataArray.map((item, index)=>
        {
            displayEntry.push(<BdayEntry bdayEntry={dataDetails[item]}/>);
        })
      
        return(
            <div>
                {displayEntry}
            </div>
        )

    }
}