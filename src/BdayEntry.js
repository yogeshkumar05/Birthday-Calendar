import React from 'react';
import dataDetails from '../data/data100.json';


export default class BdayEntry extends React.Component
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

        let displayEntry=[];
      
        return(
            <div>
                {this.props.bdayEntry.name}
                
            </div>
        )

    }
}