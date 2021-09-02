import './App.css';
import React from 'react'
import App from './App';

class Lista extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lista: []
          }
    }

    componentDidMount = () => {
      fetch('../public/Taller1Eje1.json')
      .then(response => response.json())
      .then(archivoJson => this.setState({lista:archivoJson}))
    }

    render(){
        return <App name = "asd" />
    }
}

export default Lista