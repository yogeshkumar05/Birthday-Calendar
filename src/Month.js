import React from 'react';
import Expander from './Expander';
import Collapser from './Collapser';
import MonthlyEntries from './MonthlyEntries';

export default class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesDisplayed: false
        }
        this.showEntries = this.showEntries.bind(this);
        this.hideEntries = this.hideEntries.bind(this);
    }

    showEntries(e) {
        this.setState({ entriesDisplayed: true });
    }
    hideEntries(e) {
        this.setState({ entriesDisplayed: false });
    }

    render() {

        var displayPortStyle;

        if (this.state.entriesDisplayed) {
            displayPortStyle = { display: "block" };
        }
        else {
            displayPortStyle = { display: "none" };
        }

        let ExpandOrCollapser = this.state.entriesDisplayed ? <Collapser collapseDiv={this.hideEntries} /> : <Expander expandDiv={this.showEntries} />

        return (
            <div className="monthDetails">
                <div className="monthContainer">{this.props.name}{ExpandOrCollapser}
                </div >
                <div className="monthBg" style={displayPortStyle}>
                    {/*pass the array of indexes for each month*/}
                    <MonthlyEntries monthEntries={this.props.entryArray} />
                </div>
            </div>
        )

    }
}