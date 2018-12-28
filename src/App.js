import React, { Component } from 'react';
import Burger from './compononts/Burger/Burger.js';
import BreadTop from './compononts/BreadTop/BreadTop.js';
import Fill from './compononts/Fill/Fill.js';
import BreadButton from './compononts/BreadButton/BreadButton.js';
import Buttons from './compononts/infoBlockIngr/InfoIngr.js';



class App extends Component {
    state = {
        ingredients: [
            {name: 'Salad', count: 0, price: 5},
            {name: 'Cheese', count: 0, price: 20},
            {name: 'Meat', count: 0, price: 50},
            {name: 'Bacon', count: 0, price: 30},
        ],
        countBread: 20,
    };

    showIngr = (ingr, count) => {
        let arr = [];
        for (let i = 0; i < count; i++){
            arr.push(<Fill name={ingr} key={ingr + i}/>);
        }
        return arr;
    };

    onClickAdd = (ingr) => {
        const ingredients = [...this.state.ingredients];
        for (var i = 0; i < ingredients.length; i++){
            if (ingredients[i].name === ingr){
                ingredients[i].count++;
            }
        }
        this.setState({ingredients});
        this.addGetTotalPrice();

    };

    onClickRemove = (ingr) => {
        const ingredients = [...this.state.ingredients];
        for (var i = 0; i < ingredients.length; i++){
            if (ingredients[i].name === ingr){
                ingredients[i].count--;

                if (ingredients[i].count < 0)
                    ingredients[i].count = 0
            }
        }

        this.setState({ingredients});
        this.addGetTotalPrice();
    };

    addGetTotalPrice = () => {
        let countBread = 20;

        for (let i =0; i < this.state.ingredients.length; i++){
            if (this.state.ingredients[i].name){
               let getPrice = this.state.ingredients[i].count * this.state.ingredients[i].price;
                countBread += getPrice
            }
        }
        this.setState({countBread})
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
                              cunterOfIngr={'x' + ingr.count}
                              nameRemove={'Remove'}
                              ingrName={ingr.name}
                              add={this.onClickAdd.bind(this, ingr.name)}
                              remove={this.onClickRemove.bind(this, ingr.name)}
                          />
                      ))
                  }
              </div>

              <div className="ingrBlockTwo">
                  <Burger price={'Price: ' + this.state.countBread +  ' c'}>
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
