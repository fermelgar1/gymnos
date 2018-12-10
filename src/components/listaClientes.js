import React, { Component } from 'react'

const lista = [
    {},
    {}
]

const Table = ( { list, pattern, searchTerm } ) =>
      <div className = "table"> 
        { < setSearchterm searchTerm/> }
        { list.map( item =>
          <div key={ item } className = "table-row">
            <span style={ { width: '40%' } }> </span>
            <span style={ { width: '30%' } }> {  } </span>
            <span style={ { width: '10%' } }> {  } </span>
            <span style={ { width: '10%' } }> {  } </span>
            <span style={ { width: '10%' } }>
            </span>
          </div>
        ) }
      </div>
class setSearchterm extends Comment{
   constructor (props) {
  super(props)
    const searchTerm = this.props;
    this.setState(
      searchTerm
    );
  } 
}

class ListaClientes extends Component {
    constructor (props) {
        super(props)
        this.state = {
            Input: this.props.Input, 
            Button : this.props.Button, 
            Table ,
            lista ,
            setSearchterm,
            searchTerm : "", 
        }
    }
    
    render () {
        const { Input, Button, Table, lista, searchTerm, setSearchterm } = this.state
        return (
            <div  >
                <Input>
                    Nombre
                </Input>
                <Input>
                    Codigo
                </Input>
                <Button>
                    Buscar
                </Button>
                <div>
                    <Table
                        list = { lista }
                        pattern = { searchTerm }
                        searchTerm = ""
                    />
                </div>
            </div>
        )
    }
}

export default ListaClientes