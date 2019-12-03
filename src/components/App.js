import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
//import base from '../base';

export default class App extends React.Component {
    constructor() {
        super();
        // To bind 'addFish' function to 'this' object
       // this.addFish = this.addFish.bind(this);
       // this.loadSamples = this.loadSamples.bind(this);
        //this.addToOrder = this.addToOrder.bind(this);
        //setting 'fish' state and 'order' state for referencing in the entire application
        //Get initial state
        this.state= {
            fishes: {},
            order: {}
        }
    }

    // componentWillMount() {
    //     this.ref = base.synState('${this.props.params.storeId}/fishes', {
    //         context:this,
    //         state: 'fishes'
    //     });
    // }

    // componentWillUnmount() {
    //     base.removeBinding(this.ref);
    // }
    addFish=fish=> {
        //update our state
        //this.state.fishes.fish1= fish; can also be done
        const fishes = {...this.state.fishes}
        //add in our new fish
       //const timestamp = Date.now(); 
      
        fishes['fish-${timestamp}'] = fish; 
        //set state
        this.setState({fishes: fishes})
    }

    loadSamples = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder= key => {
      //Take a copy of our state
      const order = {...this.state.order}
      //update or add the new number of fish ordered
      order[key] = order[key] + 1 || 1;
      //update our state
      this.setState({order})
    }
    render() { 
        //console.log(this)
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                  <Header tagLine="Fresh Seafood Market"/>
                  <ul className="list-of-fishes">
                    {
                        Object.keys(this.state.fishes).map(key=> <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                     }
                  </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}
