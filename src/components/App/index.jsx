import React from 'react';

import { Button } from 'react-bootstrap';

import Gift from '../Gift';

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            gifts: [],
        }
    }
    
    addGift = () => {
        const { gifts } = this.state;
        
        const ids = gifts.map(gift => gift.id);
        
        const next_id = ids.length ? Math.max(...ids) + 1 : 1;
        
        this.setState({
          gifts: [...this.state.gifts, {id: next_id}]
        })
    }
    
    removeGift = (id) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    }
    
    render() {
        return (
            <div>
                <h2>
                    Gift Giver
                </h2>
                <div className={'gift-list'} >
                    { this.state.gifts.map( gift => {
                        return (
                            <Gift
                                key={gift.id} 
                                gift={gift}
                                removeGift={this.removeGift}
                            />
                            );
                        })
                    }
                </div>
                <Button className={'btn-add'} 
                    onClick={this.addGift}>
                    Add Gift
                </Button>
            </div>
        );
    };
}

export default App;
