import React, { Component } from 'react';
import Burger from './compononts/Burger/Burger.js';
import BreadTop from './compononts/BreadTop/BreadTop.js';
import Salad from './compononts/Salad/Salad.js';
import Cheese from './compononts/Cheese/Cheese.js';
import Meat from './compononts/Meat/Meat.js';
import Bacon from './compononts/Bacon/Bacon.js'
import BreadButton from './compononts/BreadButton/BreadButton.js';
import Buttons from './compononts/infoBlockIngr/InfoIngr.js';


class App extends Component {
    state = {
        ingredients: [
            {name: 'Salad', count: 1},
            {name: 'Cheese', count: 1},
            {name: 'Meat', count: 1},
            {name: 'Bacon', count: 1},
        ]
    };

    showIngr = (ingr, count) => {
        let arr = [];
        for (let i = 0; i < count; i++){
            if (ingr === "Salad"){
                arr.push(<Salad key={i}/>)
            };
        };
        for (let i = 0; i < count; i++){
            if (ingr === "Cheese"){
                arr.push(<Cheese key={i}/>)
            };
        };
        for (let i = 0; i < count; i++){
            if (ingr === "Meat"){
                arr.push(<Meat key={i}/>)
            };
        };
        for (let i = 0; i < count; i++){
            if (ingr === "Bacon"){
                arr.push(<Bacon key={i}/>)
            };
        };

        return arr;
    };

    onClickAdd = (ingr) => {
        const ingredients = [...this.state.ingredients]
        for (var i = 0; i < ingredients.length; i++){
            if (ingredients[i].name === ingr){
                ingredients[i].count++;
            }
        }
        this.setState({ingredients})
    };

    onClickRemove = (ingr) => {
        const ingredients = [...this.state.ingredients];
        for (var i = 0; i < ingredients.length; i++){
            if (ingredients[i].name === ingr){
                ingredients[i].count--
            }
        }
        this.setState({ingredients})
    };

    render() {

    return (

      <div className="container">
          <div className="mainIngrBlock">
              <div className="ingrBlockOne">
                  {
                      this.state.ingredients.map((ingr, index) => (
                          <Buttons
                              key={index}
                              nameAdd={'Add'}
                              nameRemove={'Remove'}
                              ingrName={ingr.name}
                              add={this.onClickAdd.bind(this, ingr.name)}
                              remove={this.onClickRemove.bind(this, ingr.name)}
                          />
                      ))
                  }
              </div>

              <div className="ingrBlockTwo">
                  <Burger>
                      <BreadTop/>
                      {
                          this.state.ingredients.map((ingr, index) => (
                              this.showIngr(this.state.ingredients[index].name ,
                                  this.state.ingredients[index].count)
                          ))

                      }
                      <BreadButton/>
                  </Burger>
              </div>
          </div>
      </div>
    );
  };
};

export default App;
