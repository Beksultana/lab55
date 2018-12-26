import React, { Component } from 'react';
import Burger from './compononts/Burger/Burger.js'
import BreadTop from './compononts/BreadTop/BreadTop.js'
import Salad from './compononts/Salad/Salad.js'
import Cheese from './compononts/Cheese/Cheese.js'
import Meat from './compononts/Meat/Meat.js'
import BreadButton from './compononts/BreadButton/BreadButton.js'


class App extends Component {
    state = {
        ingredients: [
            {name: 'Meat', count: 1}
        ]
    };



    render() {
    return (
      <div className="container">
          <Burger>
              <BreadTop/>
              <Salad/>
              <Cheese/>
              <Meat/>
              <BreadButton/>
          </Burger>
      </div>
    );
  }
}

export default App;
