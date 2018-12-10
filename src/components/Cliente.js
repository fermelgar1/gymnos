
import React, { Component } from 'react'

class Cliente extends Component {
    constructor (props) {
        super(props)
        this.state = {
            Input : this.props.Input, 
            Button : this.props.Button, 
            nombre : "Fernando", 
            domicilio : "", 
            telefono : "", 
            fechaCorte: "", 
            totalMes:"", 
            estado:"Pagado"
        }
    }
    
    render () {
        const Input = this.state.Input
        const Button = this.state.Button
        const { nombre, domicilio, telefono, fechaCorte, totalMes, estado } = this.state
        return (
            <div  style = {{  "min-width": "100vh", span: "20px", "align-item":"center" }}>
                <div >
                <Input>
                    Codigo Cliente
                </Input>
                <button>
                    Entrar
                </button>
                </div>
                <div >
                    <div style = {{  "min-width": "100vh", float:"left", span: "20px" }}>
                        <form >
                            <Button>
                                Lista de Clientes
                            </Button>
                        </form>
                        <form>
                            <Button>
                                Agregar Cliente
                            </Button>
                        </form>
                        <form>
                            <Button>
                                Pagar Adeudo
                            </Button>
                        </form>
                        <form>
                            <Button>
                                Dar de baja
                            </Button>
                        </form>
                    </div>
                    <div style = {{ "min-height": "100vh", float:"right", span: "20px"  }}>
                        <form>
                            <span> Nombre del Cliente: </span><br/>
                            <span> { nombre } </span><br/><br/>
                        </form>
                        <form>
                            <span> Fecha de Pago: </span><br/>
                            <span> { fechaCorte } </span><br/><br/>
                        </form>
                        <form>
                            <span> Deuda total: </span><br/>
                            <span> { totalMes } </span><br/><br/>
                        </form>
                        <form>
                            <span> estado: </span><br/>
                            <span> { estado } </span><br/><br/>
                        </form>
                        <form>
                            <Button>
                                Ediar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cliente