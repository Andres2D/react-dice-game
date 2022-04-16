import React, { Component } from 'react';
import Die from './Die'; 
import './RollDice.css';

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {
            rolling: false,
            diceOne: 1,
            diceTwo: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.setState({
            rolling: true,
        });
        setTimeout(() => {
            this.setState({
                rolling: false,
                diceOne: this.randomNumber(),
                diceTwo: this.randomNumber()
            });
        }, 1000);
    }

    randomNumber = () => {
        return Math.floor((Math.random() * 6) + 1);
    }

    render() {
        return(
            <div className="section">
                <div className="Dies">
                    <Die id="1" rolling={this.state.rolling} number={this.state.diceOne} />
                    <Die id="2" rolling={this.state.rolling} number={this.state.diceTwo} />
                </div>
                <button 
                    className='button'
                    disabled={this.state.rolling}
                    onClick={this.handleClick}
                >
                    {
                        this.state.rolling 
                        ? 'Rolling...'
                        : 'Roll Dice!'
                    }
                </button>
                <footer className="footer">
                    By Andres2D 🚀
                    <a className="about" href="https://github.com/Andres2D/react-dice-game">About</a>
                </footer>
            </div>
        )
    }
}

export default RollDice;
