import React from 'react';
import ReactDOM from 'react-dom';
import BdayCalendar from './BdayCalendar';
import Heading from './Heading';
import '../styles/index.scss';

const container=document.getElementById("container");
function DisplayCalendar()
{
    return(
        <div>
            <Heading/>
            <BdayCalendar/>
        </div>
    )
}
ReactDOM.render(<DisplayCalendar/>, container);