// import { render } from "@testing-library/react";
import React from "react";
import css from "./test.module.css"


export class Test extends React.Component {

static defaultCounter = {
    initialValue: 0
}

    state ={
        counter:this.prop.initialValue
    }
    
    increment = () => {
    this.setState((prevState) => {
        return { counter: prevState.counter + 1}
    })
}
    decrement = () => {
        this.setState((prevState) => {

            if( prevState.counter === 0){
               return {
               ...prevState
            }}
            return {counter: prevState.counter - 1}
        })

    } 
    render() {
        return (<>
        <button onClick={this.increment}>increment</button>
        <span className={css.spanNumber} initialValue={10}>{this.state.counter}</span>
        <button onClick={this.decrement} >decrement</button>
        </>
             
       )
}
    
 
}
