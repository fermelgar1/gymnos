import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import '../App.css';
class Login extends Component{
    constructor (props) {
        super(props)
        this.state={
            user : "", 
            password : ""
        };
    }
    
    render () {
        const { user, password } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <div className="logDiv">
                        <span>
                            <h5>
                                Usuario:
                            </h5>
                            <input 
                                type = "text"                     
                                value = { user }
                                onChange = { ( event ) => this.setState( { user : event.target.value } ) }
                                />
                        </span>   
                        <span>
                            <h5>
                                Contraseña:
                            </h5>
                            <input
                                type = "password"
                                value = { password }
                                onChange = { (event) => this.setState( { password : event.target.value } ) }
                            />
                        </span>
                        <br/>
                        <br></br>
                        <span>
                            <button
                                type = "button"
                                onClick = { () => this.onClick } 
                                className = "button"
                            >
                            LOGIN 
                            </button>
                        </span>
                    </div>
                </header>
            </div>
        )
    }
}
export default Login;