import React from 'react';

export default class Collapser extends React.Component
{
    constructor(props)
    {
        super(props);
        this.collapseHandler=this.collapseHandler.bind(this);
    }

    
    collapseHandler(e)
    {
        this.props.collapseDiv();
    }

    render()
    {
        return(
            <span className="collapseIcons" onClick={this.collapseHandler}>
                ^
            </span>
        )

    }
}