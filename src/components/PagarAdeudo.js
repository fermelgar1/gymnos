import React, { Component } from "react";

class PagarAdeudo extends Component {
    constructor (props) {
        super(props)
        const Input = this.props.Input;
        this.state = {
            nombre : "", 
            domicilio : "", 
            telefono : "", 
            fechaCorte: "", 
            totalMes:"", 
            Input : Input,
            Button : this.props.Button
        }
        
    }
    render () {
        const { nombre, domicilio, telefono, fechaCorte, totalMes, Input, Button } = this.state 
        return (
            <div>
                <div className="divv">
                    <Input>
                        coodigo del cliente
                    </Input>
                    <Input>
                        Nombre
                    </Input>
                    <Input>
                        fecha de corte
                    </Input>
                    <Input>
                        Total 
                    </Input>
                    <div style={{float:"left"}}>
                        <Button>
                            Pagar
                        </Button>
                    </div>
                    <div style={{float:"right"}}>
                        <Button>
                            desglosar Total
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagarAdeudo