import React, { Component } from 'react';
import './App.css';
import Logo from '../src/Images/fcc_primary_large.svg'
import Boton from './components/boton';
import Contador from './components/Contador';
import {useState} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    
    const manejarClic = () =>{
      this.setState({ count : this.state.count + 1 });
    }

    const reiniciarContador = () => {
      this.setState({ count : 0 });
    }
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
          className='freecodecamp-logo'
          src={Logo}
          alt='Logo de freeCodeCamp'
          />

        </div>
        <div className='contenedor-ppal'>
          <Contador numClics={this.state.count} />
          <Boton
            texto="Clic"
            esBotonDeClic={true} 
            manejarClic={manejarClic} />
          <Boton 
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
