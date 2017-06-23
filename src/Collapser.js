import React from 'react';

export default class Collapser extends React.Component
{
    constructor(props)
    {
        super(props);
        this.collapseHandler=this.collapseHandler.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        // alert(JSON.stringify(nextProps));
    }

    collapseHandler(e)
    {
        // alert("Collapse")
        this.props.collapseDiv();
    }

    render()
    {
        // alert(this.props.entryArray)
        return(
            <span onClick={this.collapseHandler}>
                ^
            </span>
        )

    }
}