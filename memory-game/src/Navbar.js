import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({onNewGame}) => (
    <div>
        <div class="heading"> 
            <h2><a>Memory Game</a></h2>
            <div class="link">
                <li><a onClick={onNewGame}>New Game</a></li>
            </div>
        </div>
        <div class="score">
            <h4>Score</h4>
            {/* `<div class='line'>Number of turns: ${turn}</div>`
            `<div class='line'>Number of Pairs: ${pair}</div>` */}
            <div class='line'>Number of turns: <div id="turn">0</div></div> 
            <div class='line'>Matched Pairs: <div id="pair">0</div></div>
        </div>
    </div>
)

Navbar.propTypes = {
    onNewGame: PropTypes.func.isRequired
};

export default Navbar;