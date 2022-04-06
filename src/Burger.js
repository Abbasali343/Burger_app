import React,{Component} from "react";
import './App.css';

export default class Burger extends Component{
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0

    }

    addRemoveIngredients = (action,ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }
        else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0

        });
    }


    burgerContent = () =>{
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let burger = [];

        for(let i = 0;i<lettuce;i++){
            burger.push(<div key = {burger.length} className = 'lettuceside'></div>)
        }
        return burger;
    }


    render(){
        return (
            <>
                <div className = "burgerIngredients">
                    <div className = 'topside'>
                        {this.burgerContent()}
                    </div>
                    <div className = 'bottomside'>

                    </div>
                </div>
                <div className = "ingredientsBlock">
                    <p>Lettuce</p>
                    <div className = "ingrBtns">
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Remove</button>
                    </div>

                    <p>tomato</p>
                    <div className = "ingrBtns">
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Remove</button>
                    </div>

                    <p>cheese</p>
                    <div className = "ingrBtns">
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Remove</button>
                    </div>

                    <p>meat</p>
                    <div className = "ingrBtns">
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('add.lettuce')} className = "ingrbtn">Remove</button>
                    </div>


                </div>


            </>
        );
    }


}
