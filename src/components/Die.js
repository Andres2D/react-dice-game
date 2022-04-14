import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

    classMap = ['oneDot', 'twoDots', 'threeDots', 'fourDots', 'fiveDots', 'sixDots'];

    render() {
        const {number, id, rolling} = this.props;
        return(
            <div className={`Die ${this.classMap[number - 1]} ${rolling ? 'DotShake' : ''}`}>
                { 
                    new Array(number).fill('*').map((d, index) => <div className={`Dot Dot${index+1}`} key={`${id}${index}`}></div>)
                }
            </div>
        )
    }
}

export default Die;
