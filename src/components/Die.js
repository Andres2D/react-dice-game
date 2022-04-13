import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {number} = this.props;
        return(
            <div className="Die">
                {number}
            </div>
        )
    }
}

export default Die;
