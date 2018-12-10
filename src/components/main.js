import React, { Component } from "react";
//import "../App.css";



class Main extends Component{
    constructor (props) {
        super(props)
        this.state={
            Button : this.props.Button
        }
        
    }
    render () {
        const Button = this.state.Button
        return (
            <div >
                <div className="">
                    <table cellSpacing="50">
                        <td>
                            <table cellSpacing="50">
                                <tr>
                                    <Button>
                                        ventas
                                    </Button>
                                </tr>
                                <br/>
                                <tr>
                                    <Button>
                                        Clientes
                                    </Button>
                                </tr>
                                <br/>
                                <tr>
                                    <Button>
                                        Productos
                                    </Button>
                                </tr>
                                <br/>
                                <tr>
                                    <Button>
                                        personal
                                    </Button>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table cellSpacing="50">
                                <tr>
                                    Mision
                                </tr>
                                <tr>
                                    Mollit ipsum ad consectetur cupidatat id non ullamco labore do qui exercitation aliqua culpa. Et elit voluptate cupidatat est aliqua mollit reprehenderit. Irure adipisicing elit velit nulla nostrud reprehenderit anim.

Reprehenderit consectetur cillum laborum cillum irure. Qui aliqua adipisicing consequat magna est nostrud anim magna Lorem. Ut consectetur quis ea consectetur consectetur est est. Esse aliquip nisi anim fugiat ut voluptate adipisicing voluptate esse Lorem commodo pariatur in occaecat. Voluptate dolore aliquip tempor ex ullamco enim consectetur Lorem occaecat incididunt nulla. Cupidatat deserunt nulla cupidatat enim officia et in dolore eu qui. Do ut ipsum fugiat nulla eu cillum est esse in.

Adipisicing cupidatat ullamco aliqua incididunt dolor ea tempor consequat culpa do fugiat magna. Excepteur nisi eiusmod occaecat exercitation labore elit. Lorem amet nulla minim laborum aute consequat est anim ullamco eiusmod id culpa nulla.

Lorem Lorem sunt velit laboris sunt. Esse nostrud id nisi qui aliqua ea do nostrud qui in Lorem minim veniam. Pariatur sint labore fugiat exercitation do dolore consequat culpa esse cillum. Irure veniam ullamco enim Lorem. Nisi laboris aliquip excepteur Lorem sit veniam Lorem pariatur consequat mollit exercitation do.

Excepteur ullamco sit commodo ad elit. Cillum Lorem non pariatur ut voluptate sunt mollit non culpa adipisicing elit cupidatat ullamco. Excepteur et laborum cillum sint consequat non sint eiusmod irure culpa. Nisi voluptate do deserunt ipsum. Laboris nulla laboris nostrud et.
                                </tr>
                                <tr>
                                    Vision
                                </tr>
                                <tr>
                                    Cupidatat ea ipsum et et aliquip ut consequat anim sint duis est occaecat. Do incididunt sint velit nulla in nulla. Excepteur duis ex do amet nisi.

Officia id cillum ad deserunt fugiat qui nisi excepteur ullamco veniam dolore aute cillum. Tempor non enim aliquip pariatur velit deserunt tempor et veniam nisi irure fugiat elit id. Consectetur ea elit dolor proident id mollit.

Dolor exercitation adipisicing aute voluptate non cillum dolor. Magna tempor consequat cillum ea velit in do amet velit reprehenderit est commodo nostrud mollit. Amet in laboris ea nostrud elit.

Exercitation irure aliquip velit magna reprehenderit commodo reprehenderit tempor minim dolore irure ut minim. Dolore enim pariatur ea aliquip in ex id consequat reprehenderit excepteur adipisicing fugiat. Ipsum magna laborum dolor laborum voluptate Lorem qui reprehenderit nostrud. Mollit aliqua tempor laboris minim tempor quis. Dolor duis eu mollit amet voluptate officia irure occaecat amet.

Ullamco reprehenderit irure irure ut elit. Lorem sint elit esse esse aliqua ut consequat aliquip deserunt officia. Amet adipisicing tempor qui aliqua consectetur elit labore. Lorem cupidatat elit culpa elit amet nulla laborum. Enim ullamco excepteur magna Lorem ut ex sunt consectetur. Excepteur nostrud laborum pariatur ea nisi et veniam ea officia cillum.
                                </tr>
                            </table>
                        </td>
                    </table>
                </div>
            </div>
        )
    }
}

export default Main;