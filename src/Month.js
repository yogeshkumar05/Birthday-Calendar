import React from 'react';
import Expander from './Expander';
import Collapser from './Collapser';
import MonthlyEntries from './MonthlyEntries';

export default class Month extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            entriesDisplayed:false
        }
        this.showEntries=this.showEntries.bind(this);
        this.hideEntries=this.hideEntries.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        
    }
    showEntries(e)
    {
        // alert("show")
        this.setState({entriesDisplayed:true});
    }
     hideEntries(e)
    {
        // alert("hide")
        this.setState({entriesDisplayed:false});
    }

    render()
    {

var displayPortStyle;
    //dont display the portlet if screen is minimized, else display
    if (this.state.entriesDisplayed) {
         displayPortStyle = { display: "block" };
      
    }
    else {
     displayPortStyle = { display: "none" };
    }

    let ExpandOrCollapser=this.state.entriesDisplayed?<Collapser collapseDiv={this.hideEntries}/>:<Expander expandDiv={this.showEntries}/>
    
        return(
            <div>
                <h1>{this.props.name}{ExpandOrCollapser}

                    </h1>
                <div style={displayPortStyle}>
                <MonthlyEntries monthEntries={this.props.entryArray}/>
                </div>
            </div>
        )

    }
}