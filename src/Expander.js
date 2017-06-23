import React from 'react';

export default class Expander extends React.Component
{
    constructor(props)
    {
        super(props);
        this.expandHandler=this.expandHandler.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        // alert(JSON.stringify(nextProps));
    }

    expandHandler(e)
    {
        // alert("Expand")
        this.props.expandDiv();
    }

    render()
    {
        // alert(this.props.entryArray)
        return(
            <span onClick={this.expandHandler}>
                >
            </span>
        )

    }
}