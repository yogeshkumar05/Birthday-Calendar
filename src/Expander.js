import React from 'react';

export default class Expander extends React.Component
{
    constructor(props)
    {
        super(props);
        this.expandHandler=this.expandHandler.bind(this);
    }

    expandHandler(e)
    {
        this.props.expandDiv();
    }

    render()
    {
        return(
            <div className="collapseIcons" onClick={this.expandHandler}>
                >
            </div>
        )

    }
}