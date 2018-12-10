import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Main  from "./components/main";
import Cliente from "./components/Cliente";
import AddClient from "./components/AddClient";
import ListaClientes from "./components/listaClientes";
import PagarAdeudo from './components/PagarAdeudo';
import ventas from "./components/ventas";
import productos from "./components/productos";



const Input = ({ onChange, children, value, className = "input", type = "text" }) =>
    <form style = { { padding : "10px" } }  >
       <div style = { { padding : "10px" } } > { children } </div> 
       <span></span>
        <input
            type = { type }
            onChange = { onChange }
            value = { value }
            className = { className }
        />
    </form>

const Button =( { children = "Default", onChange }  ) =>
    <button
        type = "button"
        className = "button"
        onChange = { onChange }
    >
        { children }
    </button>

class App extends Component {
  constructor (props) {
    super(props)
    this.state ={
      searchTerm:""
    }
  }
  
  render() {
      
    return (
          <div className="">
            <span><label>Time       </label><label>Date     </label><label>user     </label></span>
                <br/>
                <div className="divv" >
                    <ListaClientes
                        Input = { Input }
                        Button = { Button }
                    />
                </div>
                
          </div>
    );
  }
}

export default App;
