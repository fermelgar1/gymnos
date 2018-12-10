import React, { Component } from "react";

class AddClient extends Component {
    constructor (props) {
        super(props)
        const Input = this.props.Input;
        this.state = {
            nombre : "", 
            domicilio : "", 
            telefono : "", 
            fechaCorte: "", 
            totalMes:"", 
            Input : Input
        }
        
    }
    render () {
        const { nombre, domicilio, telefono, fechaCorte, totalMes, Input } = this.state 
        return (
            <div>
                <div className="divv">
                    <Input
                        value = { nombre }
                        onChange = { ( event ) => this.setState( { nombre: event.target.value  } ) }
                    >
                        Nombre                     
                    </Input>
                    <Input
                        value = { domicilio }
                        onChange = { ( event ) => this.setState( { domicilio: event.target.value  } ) }
                    >
                        domicilio
                    </Input>
                    <Input
                        value = { telefono }
                        onChange = { (event) => this.setState({ telefono: event.target.value  }) }
                    >
                        telefono
                    </Input>
                    <Input
                        type = "date"
                        value = { fechaCorte }
                        onChange = { ( event ) => this.setState( { fechaCorte: event.target.value  } ) }
                    >
                        fecha de corte
                    </Input>
                    <Input
                        type = "number"
                        value = { totalMes }
                        onChange = { (event) => this.setState( { totalMes: event.target.value } ) }
                    >
                        Pago del mes
                    </Input>
                </div>
                <div style = { { padding : "10px" } }>
                    <button style = { { padding : "10px" } }>
                        Guardar
                    </button>
                </div>
            </div>
        )
    }
}

export default AddClient