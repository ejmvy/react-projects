import React, { Component } from 'react';
import Card from './Card';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';

var turn = document.getElementById('#turn');
var pair = document.getElementById('#pair');

var turnGo = 0;
var pairGo = 0;


const CardState = {
    HIDING: 0,
    SHOWING: 1,
    MATCHING: 2
}

export default class MemoryGame extends Component {
    constructor(props) {
        super(props);

        let cards = [
            {id: 0, cardState: CardState.HIDING, backgroundColor: '#b22222' },
            {id: 1, cardState: CardState.HIDING, backgroundColor: '#b22222' },
            {id: 2, cardState: CardState.HIDING, backgroundColor: '#6a5acd' },
            {id: 3, cardState: CardState.HIDING, backgroundColor: '#6a5acd' },
            {id: 4, cardState: CardState.HIDING, backgroundColor: '#48d1cc' },
            {id: 5, cardState: CardState.HIDING, backgroundColor: '#48d1cc' },
            {id: 6, cardState: CardState.HIDING, backgroundColor: '#c71585' },
            {id: 7, cardState: CardState.HIDING, backgroundColor: '#c71585' },
            {id: 8, cardState: CardState.HIDING, backgroundColor: '#9932cc' },
            {id: 9, cardState: CardState.HIDING, backgroundColor: '#9932cc' },
            {id: 10, cardState: CardState.HIDING, backgroundColor: '#fa8072' },
            {id: 11, cardState: CardState.HIDING, backgroundColor: '#fa8072' },
            {id: 12, cardState: CardState.HIDING, backgroundColor: '#3cb371' },
            {id: 13, cardState: CardState.HIDING, backgroundColor: '#3cb371' },
            {id: 14, cardState: CardState.HIDING, backgroundColor: '#ffd700' },
            {id: 15, cardState: CardState.HIDING, backgroundColor: '#ffd700' },
        ];
        cards = shuffle(cards);
        this.state = {cards, noClick: false};

        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    handleClick(id) {
        // this.setState(prevState => {
        //     let cards = prevState.cards.map(c => (
        //         c.id === id ? {
        //             ...c,
        //             cardState: c.cardState === CardState.HIDING ? CardState.SHOWING : CardState.Hiding
        //         } : c
        //     ));
        //     return {cards}
        // });

        const mapCardState  = (cards, idsToChange, newCardState) => {
            return cards.map(c => {
                if(idsToChange.includes(c.id)) {
                    return {
                        ...c,
                        cardState: newCardState
                    };
                }
                return c;
            });
        }

        const foundCard = this.state.cards.find(c => c.id === id);

        if(this.state.noClick || foundCard.cardState !== CardState.HIDING) {
            return;
        }

        let noClick = false;

        let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

        const showingCards = cards.filter((c) => c.cardState === CardState.SHOWING);

        const ids = showingCards.map(c => c.id);

        if(showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
            cards = mapCardState(cards, ids, CardState.MATCHING);
            

        } 
        else if(showingCards.length === 2) {
            let hidingCards = mapCardState(cards, ids, CardState.HIDING);
            

            noClick = true;

            this.setState({cards, noClick}, () => {
                setTimeout(() => {
                    this.setState({cards:hidingCards, noClick: false})
                }, 1300);
            })
            return;
        }
        this.setState({cards, noClick});
    }

    handleNewGame(e) {
        e.preventDefault();
        let cards = this.state.cards.map(c => ({
            ...c,
            cardState: CardState.HIDING
        }));
        cards = shuffle(cards);
        this.setState({cards});
   
    }

    render() {
        const cards = this.state.cards.map((card) => (
            <Card 
                key={card.id} 
                showing={card.cardState !== CardState.HIDING}
                backgroundColor={card.backgroundColor}
                onClick={() => this.handleClick(card.id)}    
            />
        ));
        return (
            <div class="container">
                <Navbar onNewGame={this.handleNewGame}/>
                <div class="boxes">
                    {cards}
                </div>
                
            </div>

        )
    }
}

