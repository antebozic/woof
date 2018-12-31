import React, {Component} from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Dog from './Dog';
import './MemoryGame.css';
import axios from 'axios';


const CardState = {
    HIDDING: 0,
    SHOWING: 1, 
    MATCHING: 2
}

export default class MemoryGame extends Component {
    constructor(props) {
        super(props);


        //the cards I'm using for my state
        let cards = [
            {id: 0, cardState: CardState.HIDING, backgroundColor: 'red', backgroundImage: ''},
            {id: 1, cardState: CardState.HIDING, backgroundColor: 'red', backgroundImage: ''},
            {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy', backgroundImage: ''},
            {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy', backgroundImage: ''},
            {id: 4, cardState: CardState.HIDING, backgroundColor: 'yellow', backgroundImage: ''},
            {id: 5, cardState: CardState.HIDING, backgroundColor: 'yellow', backgroundImage: ''},
            {id: 6, cardState: CardState.HIDING, backgroundColor: 'green', backgroundImage: ''},
            {id: 7, cardState: CardState.HIDING, backgroundColor: 'green', backgroundImage: ''},
            {id: 8, cardState: CardState.HIDING, backgroundColor: 'black', backgroundImage: ''},
            {id: 9, cardState: CardState.HIDING, backgroundColor: 'black', backgroundImage: ''},
            {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple', backgroundImage: ''},
            {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple', backgroundImage: ''},
            {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink', backgroundImage: ''},
            {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink', backgroundImage: ''},
            {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightsky', backgroundImage: ''},
            {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightsky', backgroundImage: ''}, 
            {id: 16, cardState: CardState.HIDING, backgroundColor: 'brown', backgroundImage: ''},
            {id: 17, cardState: CardState.HIDING, backgroundColor: 'brown', backgroundImage: ''},
            {id: 18, cardState: CardState.HIDING, backgroundColor: 'white', backgroundImage: ''},
            {id: 19, cardState: CardState.HIDING, backgroundColor: 'white', backgroundImage: ''}
        ];

        cards = this.shuffle(cards);

        this.state = {
            cards, noClick: false, isVis: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.getAllDogs = this.getAllDogs.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    getAllDogs() {
        // let ur = 'https://dog.ceo/api/breeds/image/random'
        let dogs = []
        // for(let i=0; i<10; i++) {
        //     axios
        //     .get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime())
        //     .then( res => dogs.push(res.data.message))
        //     .catch( err => console.log(err))
        // }

        axios.all([
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
            axios.get('https://dog.ceo/api/breeds/image/random?nocache=' + new Date().getTime()), 
        ])
        .then(axios.spread(
            function(red, navy, yellow, green, black, purple, pink, lightsky, brown, white) {
                dogs.push(red.data.message);
                dogs.push(navy.data.message);
                dogs.push(yellow.data.message);
                dogs.push(green.data.message);
                dogs.push(black.data.message);
                dogs.push(purple.data.message);
                dogs.push(pink.data.message);
                dogs.push(lightsky.data.message);
                dogs.push(brown.data.message);
                dogs.push(white.data.message);
            }
        ))
    
        setTimeout(
          () => {
            let cards = this.state.cards.map( c => {

                switch(c.backgroundColor) {

                    case "red":
                    return {...c, backgroundImage: dogs[0]};

                    case "navy":
                    return {...c, backgroundImage: dogs[1]};

                    case "yellow":
                    return {...c, backgroundImage: dogs[2]};

                    case "green":
                    return {...c, backgroundImage: dogs[3]};

                    case "black":
                    return {...c, backgroundImage: dogs[4]};

                    case "purple":
                    return {...c, backgroundImage: dogs[5]};

                    case "pink":
                    return {...c, backgroundImage: dogs[6]};

                    case "lightsky":
                    return {...c, backgroundImage: dogs[7]};

                    case "brown":
                    return {...c, backgroundImage: dogs[8]};

                    case "white":
                    return {...c, backgroundImage: dogs[9]};

                    default: 
                    return c;

                }
        })
            this.setState({cards, isVis: false})
          }, 3000
        )
    }

    componentWillMount() {
        this.getAllDogs();
    }

    handleNewGame() {
        // 1.copy all state and set all cards to state of hiding
        // 2.shuffle the cards
        this.setState({isVis: true})
        setTimeout(() => {
            this.setState({isVis: false})
        }, 3000)
        let cards = this.state.cards.map(c => ({
            ...c,
            cardState: CardState.HIDING
        }));

        cards = this.shuffle(cards);

        this.setState({cards});

        this.getAllDogs();

    }

    handleClick(id) {
        // 1.if two cards are visible and they don't match, put back
        // 2.if two cards are visible and they match, they should stay

        const mapCardState = (cards, idsToChange, newCardState) => {
            return cards.map(c => {
                if (idsToChange.includes(c.id)) {
                    return {
                        ...c, 
                        cardState: newCardState
                    };
                }
                return c;
            });
        }
        //grabbing the card we want out of the array

        const foundCard = this.state.cards.find(c => c.id === id);

        //prevents flipping card if it's noClick || matching || showing
        if(this.state.noClick || foundCard.cardState !== CardState.HIDING) {
            return;
        }

        let noClick = false;

        //filters all cards, but one that's clicke has SHOWING now
        let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

        //finds only cards with SHOWING
        const showingCards = cards.filter(c => c.cardState === CardState.SHOWING);
    
        //grabbing ids from showingCards
        const ids = showingCards.map(c => c.id);


        if (showingCards.length === 2 && 
            showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
                cards = mapCardState(this.state.cards, ids, CardState.MATCHING);  
            } 
        else if (showingCards.length === 2) {
           let hidingCards = mapCardState(this.state.cards, ids, CardState.HIDING);
                
            noClick = true;

            this.setState({cards, noClick}, () => {
                setTimeout(() => {
                    // set the state of the cards to HIDING after 1.5 seconds
                    this.setState({cards: hidingCards, noClick: false});
                }, 1500);
            }
            );   
        }
        this.setState({cards, noClick});
    }


    
    render() {
        var classNames = require('classnames');
        var loadClass = classNames(
            "load",{
                "hide": !this.state.isVis, 
                "show" : this.state.isVis
            }
        )
        const cards = this.state.cards.map((card) => (
            <Card 
                key={card.id} 
                opacity={card.cardState === CardState.MATCHING}
                showing={card.cardState !== CardState.HIDING} 
                backgroundColor={card.backgroundColor} 
                backgroundImage={card.backgroundImage}
                onClick={() => this.handleClick(card.id)}
            />
        ));


        let style = {};
        if (!this.state.isVis) {
            style.display = 'grid'
        }
        else if(this.state.isVis) {
            style.display = 'none'
        }

        return (
            <div className="container">
                <NavBar onNewGame={this.handleNewGame}/>
                <div className="content">
                <div className="cardsContainer" style={style}>
                {cards}
                </div>
                </div>
                <div className={loadClass}>
                <Dog />
                </div>
            </div>
        );
    }
}